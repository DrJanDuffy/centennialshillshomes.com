#!/usr/bin/env tsx

/**
 * Cloudflare DNS Records Puller (TypeScript Version)
 * Pulls DNS records from Cloudflare for centennialshillshomes.com domain
 * 
 * Usage:
 *   npx tsx scripts/cloudflare-dns-pull.ts
 *   npx tsx scripts/cloudflare-dns-pull.ts --format json
 *   npx tsx scripts/cloudflare-dns-pull.ts --output dns-records.json
 */

import https from 'https';
import fs from 'fs';
import path from 'path';

// Types
interface CloudflareRecord {
  id: string;
  type: string;
  name: string;
  content: string;
  ttl: number;
  proxied: boolean;
  comment?: string;
  created_on: string;
  modified_on: string;
}

interface CloudflareZone {
  id: string;
  name: string;
  status: string;
}

interface CloudflareResponse<T> {
  success: boolean;
  result: T;
  errors: Array<{ message: string }>;
}

// Configuration
const CONFIG = {
  apiToken: process.env.CLOUDFLARE_API_TOKEN,
  zoneId: process.env.CLOUDFLARE_ZONE_ID,
  domain: 'centennialshillshomes.com',
  apiUrl: 'https://api.cloudflare.com/client/v4'
};

// Command line arguments
const args = process.argv.slice(2);
const format = args.includes('--format') ? args[args.indexOf('--format') + 1] : 'table';
const outputFile = args.includes('--output') ? args[args.indexOf('--output') + 1] : null;

/**
 * Make HTTP request to Cloudflare API
 */
function makeRequest<T>(endpoint: string, method: string = 'GET'): Promise<T> {
  return new Promise((resolve, reject) => {
    const url = `${CONFIG.apiUrl}${endpoint}`;
    const options = {
      method,
      headers: {
        'Authorization': `Bearer ${CONFIG.apiToken}`,
        'Content-Type': 'application/json'
      }
    };

    const req = https.request(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const parsed: CloudflareResponse<T> = JSON.parse(data);
          if (parsed.success) {
            resolve(parsed.result);
          } else {
            reject(new Error(`API Error: ${parsed.errors.map(e => e.message).join(', ')}`));
          }
        } catch (e) {
          reject(new Error(`Failed to parse response: ${(e as Error).message}`));
        }
      });
    });

    req.on('error', reject);
    req.end();
  });
}

/**
 * Get zone ID for domain if not provided
 */
async function getZoneId(): Promise<string> {
  if (CONFIG.zoneId) {
    return CONFIG.zoneId;
  }

  console.log(`🔍 Looking up zone ID for ${CONFIG.domain}...`);
  const zones: CloudflareZone[] = await makeRequest(`/zones?name=${CONFIG.domain}`);
  
  if (zones.length === 0) {
    throw new Error(`No zone found for domain: ${CONFIG.domain}`);
  }

  const zone = zones[0];
  console.log(`✅ Found zone: ${zone.name} (ID: ${zone.id})`);
  return zone.id;
}

/**
 * Pull all DNS records for the zone
 */
async function pullDnsRecords(zoneId: string): Promise<CloudflareRecord[]> {
  console.log(`📡 Pulling DNS records for zone ${zoneId}...`);
  
  const records: CloudflareRecord[] = await makeRequest(`/zones/${zoneId}/dns_records`);
  console.log(`✅ Retrieved ${records.length} DNS records`);
  
  return records;
}

/**
 * Format records as table
 */
function formatAsTable(records: CloudflareRecord[]): string {
  const headers = ['Type', 'Name', 'Content', 'TTL', 'Proxied', 'Comment'];
  const rows = records.map(record => [
    record.type,
    record.name,
    record.content,
    record.ttl === 1 ? 'Auto' : record.ttl.toString(),
    record.proxied ? 'Yes' : 'No',
    record.comment || '-'
  ]);

  // Calculate column widths
  const widths = headers.map((header, i) => {
    const maxWidth = Math.max(
      header.length,
      ...rows.map(row => String(row[i]).length)
    );
    return Math.min(maxWidth, 50); // Cap at 50 chars
  });

  // Create table
  const separator = widths.map(w => '-'.repeat(w)).join('-+-');
  const headerRow = headers.map((header, i) => header.padEnd(widths[i])).join(' | ');
  
  let table = `${headerRow}\n${separator}\n`;
  
  rows.forEach(row => {
    const dataRow = row.map((cell, i) => String(cell).padEnd(widths[i])).join(' | ');
    table += `${dataRow}\n`;
  });

  return table;
}

/**
 * Format records as JSON
 */
function formatAsJson(records: CloudflareRecord[]): string {
  return JSON.stringify({
    domain: CONFIG.domain,
    zoneId: CONFIG.zoneId,
    timestamp: new Date().toISOString(),
    recordCount: records.length,
    records: records.map(record => ({
      id: record.id,
      type: record.type,
      name: record.name,
      content: record.content,
      ttl: record.ttl,
      proxied: record.proxied,
      comment: record.comment,
      createdOn: record.created_on,
      modifiedOn: record.modified_on
    }))
  }, null, 2);
}

/**
 * Save records to file
 */
function saveToFile(content: string, filename: string): void {
  const outputPath = path.resolve(filename);
  fs.writeFileSync(outputPath, content);
  console.log(`💾 Saved DNS records to: ${outputPath}`);
}

/**
 * Main execution
 */
async function main(): Promise<void> {
  try {
    // Validate configuration
    if (!CONFIG.apiToken) {
      throw new Error('CLOUDFLARE_API_TOKEN environment variable is required');
    }

    console.log('🚀 Cloudflare DNS Records Puller (TypeScript)');
    console.log('==============================================');

    // Get zone ID
    CONFIG.zoneId = await getZoneId();

    // Pull DNS records
    const records = await pullDnsRecords(CONFIG.zoneId);

    if (records.length === 0) {
      console.log('⚠️  No DNS records found');
      return;
    }

    // Format output
    let output: string;
    if (format === 'json') {
      output = formatAsJson(records);
    } else {
      output = formatAsTable(records);
    }

    // Display or save
    if (outputFile) {
      saveToFile(output, outputFile);
    } else {
      console.log('\n📋 DNS Records:');
      console.log('================');
      console.log(output);
    }

    console.log(`\n✅ Successfully pulled ${records.length} DNS records`);
    
    // Show summary
    const recordTypes = records.reduce((acc, record) => {
      acc[record.type] = (acc[record.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    console.log('\n📊 Record Summary:');
    Object.entries(recordTypes).forEach(([type, count]) => {
      console.log(`   ${type}: ${count} records`);
    });

  } catch (error) {
    console.error('❌ Error:', (error as Error).message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

export { main, pullDnsRecords, formatAsJson, formatAsTable };
