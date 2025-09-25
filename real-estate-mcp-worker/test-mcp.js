#!/usr/bin/env node

/**
 * Test script for Real Estate MCP Worker
 * This script tests the MCP functionality locally
 */

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🏠 Testing Real Estate MCP Worker...\n');

// Test data
const testCases = [
  {
    name: 'Market Analysis - Centennial Hills',
    method: 'analyzeMarketTrends',
    params: ['89144', 'single-family', '90days']
  },
  {
    name: 'Commute Analysis - Centennial Hills to Strip',
    method: 'calculateCommuteTime',
    params: ['Centennial Hills', 'Las Vegas Strip', 'driving']
  },
  {
    name: 'Property Description Generation',
    method: 'generatePropertyDescription',
    params: ['luxury', 4, 3, 2800, 'Red Rock Country Club', 'golf course views']
  },
  {
    name: 'Neighborhood Analysis - Summerlin',
    method: 'analyzeNeighborhood',
    params: ['Summerlin']
  }
];

// Run MCP server and test
async function testMCP() {
  console.log('🚀 Starting MCP server...\n');
  
  const mcpProcess = spawn('npx', [
    'workers-mcp',
    'run',
    'real-estate-mcp-worker',
    'https://real-estate-mcp-worker.drduffy.workers.dev',
    __dirname
  ], {
    stdio: ['pipe', 'pipe', 'pipe']
  });

  // Send test requests
  for (const testCase of testCases) {
    console.log(`📊 Testing: ${testCase.name}`);
    
    const request = {
      jsonrpc: '2.0',
      id: Math.random(),
      method: 'tools/call',
      params: {
        name: testCase.method,
        arguments: testCase.params
      }
    };

    mcpProcess.stdin.write(JSON.stringify(request) + '\n');
    
    // Wait a bit for response
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  // Close the process
  mcpProcess.kill();
  
  console.log('\n✅ MCP testing completed!');
  console.log('\n📋 Next Steps:');
  console.log('1. Add the MCP configuration to your Claude Desktop or Cursor');
  console.log('2. Restart your MCP client');
  console.log('3. Start using the real estate tools!');
  console.log('\n🔗 Worker URL: https://real-estate-mcp-worker.drduffy.workers.dev');
}

testMCP().catch(console.error);

