# Google Search Console Setup Guide

This guide will help you set up and verify your website with Google Search Console for optimal SEO performance.

## 📋 Prerequisites

- Access to your website's domain
- Google account
- Access to Vercel dashboard (for environment variables)

## 🚀 Step 1: Create Google Search Console Account

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Select "URL prefix" method
4. Enter your website URL: `https://www.centennialhillshomesforsale.com`
5. Click "Continue"

## 🔐 Step 2: Verify Website Ownership

You have **three verification methods** available:

### Method 1: HTML Meta Tag (Recommended - Already Configured)

1. In Google Search Console, select "HTML tag" verification method
2. Copy the verification code (looks like: `abc123def456...`)
3. Add it to your Vercel environment variables:
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add: `PUBLIC_GOOGLE_VERIFICATION` = `your-verification-code`
   - Apply to: Production, Preview, Development
4. Redeploy your site: `vercel --prod`
5. Click "Verify" in Google Search Console

**✅ This method is already implemented in `src/components/router-head/router-head.tsx`**

### Method 2: HTML File Upload

1. In Google Search Console, select "HTML file" verification method
2. Download the verification HTML file (e.g., `google123abc456def.html`)
3. Upload it to your `public/` folder
4. Redeploy your site
5. Click "Verify" in Google Search Console

**✅ Alternative: Use the route handler at `/google[verification].html`**

### Method 3: DNS Verification

1. In Google Search Console, select "DNS record" verification method
2. Add the provided TXT record to your domain's DNS settings
3. Wait for DNS propagation (can take up to 48 hours)
4. Click "Verify" in Google Search Console

## 📊 Step 3: Submit Sitemap

1. In Google Search Console, go to "Sitemaps" in the left sidebar
2. Enter your sitemap URL: `https://www.centennialhillshomesforsale.com/sitemap.xml`
3. Click "Submit"

**✅ Your sitemap is automatically generated at `/sitemap.xml` with all pages**

## 🔍 Step 4: Configure Settings

### Preferred Domain

1. Go to Settings → General
2. Under "Preferred domain", select:
   - **`www.centennialhillshomesforsale.com`** (recommended)
   - This ensures all URLs use the www subdomain

### URL Parameters (if needed)

1. Go to Settings → URL Parameters
2. Configure any dynamic URL parameters that don't affect content
3. For most real estate sites, this isn't necessary

## 📈 Step 5: Monitor Performance

### Key Metrics to Track

1. **Coverage**: Check for indexing issues
   - Go to Coverage report
   - Fix any errors or warnings
   - Request indexing for important pages

2. **Performance**: Monitor search performance
   - Track clicks, impressions, CTR, and position
   - Identify top-performing pages
   - Optimize underperforming pages

3. **Mobile Usability**: Ensure mobile-friendly pages
   - Check for mobile usability issues
   - Fix any problems found

4. **Core Web Vitals**: Monitor page experience
   - Track LCP, FID, and CLS metrics
   - Optimize slow pages

## 🛠️ Step 6: Set Up Google Analytics (Optional but Recommended)

1. Create a Google Analytics 4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Add to Vercel environment variables:
   - `PUBLIC_GA_TRACKING_ID` = `G-XXXXXXXXXX`
4. Redeploy your site

**✅ Google Analytics is already configured in `src/components/router-head/router-head.tsx`**

## 📝 Step 7: Request Indexing for Important Pages

After verification, request indexing for key pages:

1. Go to URL Inspection tool in Search Console
2. Enter important page URLs:
   - `https://www.centennialhillshomesforsale.com/`
   - `https://www.centennialhillshomesforsale.com/centennial-hills-homes`
   - `https://www.centennialhillshomesforsale.com/properties`
   - `https://www.centennialhillshomesforsale.com/buy-a-home`
   - `https://www.centennialhillshomesforsale.com/sell-a-home`
3. Click "Request Indexing" for each

## ✅ Verification Checklist

- [ ] Google Search Console account created
- [ ] Website verified (using one of the three methods)
- [ ] Sitemap submitted and processed
- [ ] Preferred domain set to www version
- [ ] Google Analytics configured (optional)
- [ ] Important pages requested for indexing
- [ ] Monitoring set up for coverage and performance

## 🔧 Environment Variables Required

Add these to your Vercel project:

```bash
# Google Search Console Verification
PUBLIC_GOOGLE_VERIFICATION=your-verification-code-here

# Google Analytics 4 (Optional)
PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
```

## 📚 Additional Resources

- [Google Search Console Help](https://support.google.com/webmasters)
- [Sitemap Guidelines](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Core Web Vitals](https://web.dev/vitals/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

## 🐛 Troubleshooting

### Verification Fails

- **Meta tag method**: Ensure `PUBLIC_GOOGLE_VERIFICATION` is set correctly and site is redeployed
- **HTML file method**: Ensure file is in `public/` folder and accessible at the correct URL
- **DNS method**: Wait 24-48 hours for DNS propagation, verify TXT record is correct

### Sitemap Not Processing

- Check that sitemap is accessible at `/sitemap.xml`
- Verify sitemap XML is valid (use [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html))
- Ensure all URLs in sitemap are accessible (no 404 errors)

### Pages Not Indexing

- Check Coverage report for errors
- Ensure pages are not blocked by robots.txt
- Verify pages have proper meta tags and content
- Request indexing manually for important pages

## 🎯 Next Steps

1. **Monitor regularly**: Check Search Console weekly for issues
2. **Optimize content**: Use performance data to improve pages
3. **Fix errors**: Address any coverage or mobile usability issues
4. **Track progress**: Monitor rankings and traffic improvements
5. **Update sitemap**: Ensure new pages are added to sitemap automatically

---

**Last Updated**: January 2025
**Maintained by**: Development Team



