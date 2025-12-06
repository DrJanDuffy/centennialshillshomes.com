# Quick Start: Google Search Console Setup

## 🚀 5-Minute Setup

### 1. Get Verification Code
- Go to [search.google.com/search-console](https://search.google.com/search-console)
- Add property: `https://www.centennialhillshomesforsale.com`
- Choose "HTML tag" method
- Copy the verification code

### 2. Add to Vercel
- Vercel Dashboard → Your Project → Settings → Environment Variables
- Add: `PUBLIC_GOOGLE_VERIFICATION` = `[paste-code]`
- Apply to: **All environments**
- **Save**

### 3. Deploy
```bash
vercel --prod
```

### 4. Verify
- Go back to Google Search Console
- Click **"Verify"**
- ✅ Done!

### 5. Submit Sitemap
- In Search Console: **Sitemaps** → **Add new sitemap**
- Enter: `sitemap.xml`
- Click **Submit**

---

## 📊 Optional: Google Analytics

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID: `G-XXXXXXXXXX`
3. Add to Vercel: `PUBLIC_GA_TRACKING_ID` = `G-XXXXXXXXXX`
4. Redeploy: `vercel --prod`

---

## ✅ What's Already Done

- ✅ Dynamic sitemap at `/sitemap.xml`
- ✅ Verification meta tag support
- ✅ Google Analytics 4 ready
- ✅ Robots.txt configured
- ✅ All SEO best practices implemented

**You just need to add the environment variables!**

---

For detailed instructions, see `GOOGLE-SEARCH-CONSOLE-SETUP.md`



