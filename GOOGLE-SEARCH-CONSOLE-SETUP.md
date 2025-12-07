# Google Search Console Setup Guide
## Centennial Hills Real Estate - Dr. Jan Duffy

## ✅ Pre-Submission Checklist

### 1. Technical Requirements
- ✅ **HTTPS Enabled**: All pages use HTTPS (enforced via middleware)
- ✅ **Canonical Domain**: www.centennialhillshomesforsale.com (enforced via middleware)
- ✅ **Sitemhttps://www.centennialhillshomesforsale.com/sitemap.xmlap**: Available at 
- ✅ **Robots.txt**: Available at https://www.centennialhillshomesforsale.com/robots.txt
- ✅ **Mobile-Friendly**: Responsive design with mobile-first approach
- ✅ **Page Speed**: Optimized with Qwik framework for fast loading

### 2. Sitemap Configuration
- ✅ **Location**: https://www.centennialhillshomesforsale.com/sitemap.xml
- ✅ **Format**: XML sitemap (Google standard)
- ✅ **Pages Included**: 75 canonical pages
- ✅ **Redirect Pages Excluded**: Only canonical URLs included
- ✅ **Last Modified**: Updated daily
- ✅ **Priorities Set**: Homepage (1.0), core pages (0.9), supporting pages (0.7-0.8)

### 3. Robots.txt Configuration
- ✅ **Location**: https://www.centennialhillshomesforsale.com/robots.txt
- ✅ **Sitemap Reference**: Included and correct
- ✅ **Test Pages Blocked**: /demo/, /test-simple/, etc.
- ✅ **Redirect Pages Blocked**: /tule-springs.html, /skye-canyon.html

### 4. Structured Data (Schema.org)
- ✅ **RealEstateAgent**: Homepage, About, Janet Duffy page
- ✅ **Organization**: Homepage, About page
- ✅ **WebSite**: Homepage with SearchAction
- ✅ **Person**: About, Janet Duffy pages
- ✅ **LocalBusiness**: Service pages
- ✅ **BreadcrumbList**: Key pages
- ✅ **FAQPage**: FAQ sections on multiple pages

### 5. Meta Tags
- ✅ **Title Tags**: Unique, descriptive, keyword-rich (50-60 characters)
- ✅ **Meta Descriptions**: Compelling, 150-160 characters
- ✅ **Canonical URLs**: All pages have canonical tags
- ✅ **Open Graph**: All pages have OG tags
- ✅ **Twitter Cards**: All pages have Twitter card tags
- ✅ **Robots Meta**: Properly configured (index, follow)

### 6. Content Quality
- ✅ **H1 Tags**: Exactly one per page
- ✅ **H2/H3 Structure**: Proper heading hierarchy
- ✅ **Word Count**: 1500+ words on key pages
- ✅ **Internal Linking**: Strategic interpage links throughout
- ✅ **Keyword Optimization**: Natural keyword integration

### 7. Redirects
- ✅ **301 Redirects**: All old URLs redirect to canonical URLs
- ✅ **HTTPS Redirect**: HTTP → HTTPS (301)
- ✅ **WWW Redirect**: Non-www → www (301)
- ✅ **Old URLs**: /about-us, /index.html, /las-vegas-89166, etc.

## 📋 Google Search Console Setup Steps

### Step 1: Verify Domain Ownership

#### Option A: HTML File Upload (Recommended)
1. Download verification file from Google Search Console
2. Upload to `/public/` directory
3. Ensure file is accessible at: `https://www.centennialhillshomesforsale.com/google[verification].html`

#### Option B: HTML Tag
1. Add verification meta tag to homepage `<head>`
2. Already configured in `src/routes/index.tsx` if needed

#### Option C: DNS Record
1. Add TXT record to DNS: `google-site-verification=XXXXX`
2. Verify in Cloudflare DNS settings

### Step 2: Submit Sitemap

1. Go to Google Search Console → Sitemaps
2. Enter: `https://www.centennialhillshomesforsale.com/sitemap.xml`
3. Click "Submit"
4. Wait for processing (usually 24-48 hours)

### Step 3: Request Indexing

1. Go to URL Inspection tool
2. Enter homepage URL: `https://www.centennialhillshomesforsale.com/`
3. Click "Request Indexing"
4. Repeat for key pages:
   - `/centennial-hills`
   - `/buy-a-home`
   - `/sell-a-home`
   - `/about`
   - `/contact`
   - `/mls-search`

### Step 4: Monitor Performance

1. **Coverage Report**: Check for crawl errors
2. **Performance Report**: Monitor search impressions and clicks
3. **Mobile Usability**: Verify mobile-friendly status
4. **Core Web Vitals**: Monitor LCP, INP, CLS metrics
5. **Indexing Status**: Track indexed pages

## 🔍 Key URLs to Verify

### Essential Pages
- Homepage: https://www.centennialhillshomesforsale.com/
- About: https://www.centennialhillshomesforsale.com/about
- Contact: https://www.centennialhillshomesforsale.com/contact
- Properties: https://www.centennialhillshomesforsale.com/properties
- MLS Search: https://www.centennialhillshomesforsale.com/mls-search

### Service Pages
- Buy a Home: https://www.centennialhillshomesforsale.com/buy-a-home
- Sell a Home: https://www.centennialhillshomesforsale.com/sell-a-home
- Market Analysis: https://www.centennialhillshomesforsale.com/market-analysis
- Home Valuation: https://www.centennialhillshomesforsale.com/home-valuation

### Neighborhood Pages
- Centennial Hills: https://www.centennialhillshomesforsale.com/centennial-hills
- Summerlin: https://www.centennialhillshomesforsale.com/summerlin
- Red Rock Country Club: https://www.centennialhillshomesforsale.com/red-rock-country-club
- The Ridges: https://www.centennialhillshomesforsale.com/the-ridges

## 📊 Expected Results Timeline

- **Immediate**: Sitemap submission accepted
- **24-48 hours**: Initial indexing begins
- **1 week**: Core pages indexed
- **2-4 weeks**: Full site indexed
- **4-8 weeks**: Search performance data available

## 🛠️ Troubleshooting

### Sitemap Errors
- **Empty sitemap**: Check sitemap.xml.tsx route handler
- **Invalid XML**: Verify XML structure and escaping
- **Missing URLs**: Ensure all pages are in pages array

### Indexing Issues
- **Not indexed**: Check robots.txt, meta robots tags
- **Partial indexing**: Review sitemap priorities
- **Duplicate content**: Verify canonical URLs

### Performance Issues
- **Slow indexing**: Increase sitemap priority for key pages
- **Low impressions**: Optimize meta descriptions and titles
- **High bounce rate**: Improve content quality and internal linking

## 📝 Maintenance Tasks

### Weekly
- Monitor Search Console for errors
- Check indexing status
- Review performance metrics

### Monthly
- Update sitemap lastmod dates
- Review and optimize underperforming pages
- Add new pages to sitemap

### Quarterly
- Comprehensive SEO audit
- Update structured data
- Review and update meta descriptions

## 🔗 Resources

- [Google Search Console Help](https://support.google.com/webmasters)
- [Sitemap Guidelines](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Structured Data Testing Tool](https://search.google.com/test/rich-results)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [PageSpeed Insights](https://pagespeed.web.dev/)

---

**Last Updated**: December 2025
**Status**: Ready for Google Search Console submission
