# Cloudflare DNS Management

This directory contains scripts and tools for managing DNS records for `centennialshillshomes.com` through Cloudflare's API.

## 🚀 Quick Start

### 1. Set up Environment Variables

Create a `.env` file in the project root with your Cloudflare credentials:

```bash
# Get your API token from: https://dash.cloudflare.com/profile/api-tokens
CLOUDFLARE_API_TOKEN=your_cloudflare_api_token_here

# Zone ID for centennialshillshomes.com domain
# You can find this in your Cloudflare dashboard or let the script auto-detect it
CLOUDFLARE_ZONE_ID=your_zone_id_here
```

### 2. Pull DNS Records

#### Using npm scripts (recommended):
```bash
# Display DNS records in table format
npm run dns:pull

# Display DNS records in JSON format
npm run dns:pull:json

# Export DNS records to file
npm run dns:export
```

#### Using scripts directly:
```bash
# JavaScript version
node scripts/cloudflare-dns-pull.js

# TypeScript version (requires tsx)
npx tsx scripts/cloudflare-dns-pull.ts

# With options
node scripts/cloudflare-dns-pull.js --format json --output dns-records.json
```

## 📋 Available Scripts

| Script | Description | Output |
|--------|-------------|---------|
| `npm run dns:pull` | Display DNS records in table format | Console table |
| `npm run dns:pull:json` | Display DNS records in JSON format | Console JSON |
| `npm run dns:export` | Export DNS records to file | `dns-records.json` |

## 🔧 Cloudflare Worker Integration

The DNS functionality is also integrated into the Cloudflare Worker at `real-estate-mcp-worker`. You can use these methods:

### Available Methods

#### `pullDnsRecords(format: string = "json")`
Pulls all DNS records for the domain.

**Parameters:**
- `format`: Output format ("json" or "table")

**Returns:**
```json
{
  "success": true,
  "domain": "centennialshillshomes.com",
  "zoneId": "zone_id_here",
  "recordCount": 5,
  "timestamp": "2024-12-24T10:30:00.000Z",
  "records": [
    {
      "id": "record_id",
      "type": "A",
      "name": "centennialshillshomes.com",
      "content": "192.0.2.1",
      "ttl": 1,
      "proxied": true,
      "comment": "Main domain",
      "createdOn": "2024-01-01T00:00:00.000Z",
      "modifiedOn": "2024-12-24T10:30:00.000Z"
    }
  ]
}
```

#### `getDnsRecord(recordId: string)`
Gets a specific DNS record by ID.

**Parameters:**
- `recordId`: The ID of the DNS record

**Returns:**
```json
{
  "success": true,
  "record": {
    "id": "record_id",
    "type": "A",
    "name": "centennialshillshomes.com",
    "content": "192.0.2.1",
    "ttl": 1,
    "proxied": true,
    "comment": "Main domain",
    "created_on": "2024-01-01T00:00:00.000Z",
    "modified_on": "2024-12-24T10:30:00.000Z"
  },
  "timestamp": "2024-12-24T10:30:00.000Z"
}
```

## 🔐 Security

### API Token Permissions

Your Cloudflare API token needs the following permissions:
- **Zone:Read** - To read DNS records
- **Zone:Zone Settings:Read** - To read zone information

### Token Scope
- **Zone Resources**: Include specific zone for `centennialshillshomes.com`
- **Account Resources**: Include all zones (if you want to auto-detect zone ID)

## 📊 Output Examples

### Table Format
```
Type | Name                        | Content           | TTL  | Proxied | Comment
-----|-----------------------------|-------------------|------|---------|--------
A    | centennialshillshomes.com   | 192.0.2.1         | Auto | Yes     | Main domain
CNAME| www.centennialshillshomes.com| centennialshillshomes.com | Auto | Yes | WWW redirect
```

### JSON Format
```json
{
  "domain": "centennialshillshomes.com",
  "zoneId": "abc123def456",
  "timestamp": "2024-12-24T10:30:00.000Z",
  "recordCount": 2,
  "records": [
    {
      "id": "rec123456789",
      "type": "A",
      "name": "centennialshillshomes.com",
      "content": "192.0.2.1",
      "ttl": 1,
      "proxied": true,
      "comment": "Main domain",
      "createdOn": "2024-01-01T00:00:00.000Z",
      "modifiedOn": "2024-12-24T10:30:00.000Z"
    }
  ]
}
```

## 🚨 Troubleshooting

### Common Issues

1. **"CLOUDFLARE_API_TOKEN environment variable is required"**
   - Make sure you've set the `CLOUDFLARE_API_TOKEN` environment variable
   - Check that your `.env` file is in the project root

2. **"No zone found for domain: centennialshillshomes.com"**
   - Verify the domain is added to your Cloudflare account
   - Check that your API token has access to the zone
   - Try setting `CLOUDFLARE_ZONE_ID` explicitly

3. **"API Error: Invalid API token"**
   - Verify your API token is correct
   - Check that the token hasn't expired
   - Ensure the token has the required permissions

### Getting Help

- Check the [Cloudflare API Documentation](https://developers.cloudflare.com/api/)
- Verify your API token permissions in the [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
- Check the zone ID in your [Cloudflare DNS settings](https://dash.cloudflare.com/dns)

## 🔄 Integration with Real Estate Workflow

This DNS management system integrates with the real estate website workflow:

1. **Domain Management**: Keep track of all DNS records for the main domain
2. **Subdomain Setup**: Manage subdomains for different services (api, blog, etc.)
3. **SSL/TLS**: Monitor SSL certificate status through DNS records
4. **CDN Configuration**: Track Cloudflare proxy settings
5. **Backup & Recovery**: Export DNS configuration for disaster recovery

## 📝 Notes

- All scripts support both JavaScript and TypeScript
- The Cloudflare Worker integration provides real-time DNS management
- Records are automatically formatted for readability
- All operations include proper error handling and logging
- Timestamps are included for audit trails
