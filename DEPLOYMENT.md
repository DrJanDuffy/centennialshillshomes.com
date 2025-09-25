# Centennial Hills Homes - Deployment Guide

This guide covers all deployment methods for the Centennial Hills Homes real estate website.

## 🚀 Quick Deployment

### Option 1: Automated Scripts (Recommended)

**Windows PowerShell:**
```powershell
.\deploy.ps1 "feat(properties): add new luxury home listings"
```

**Windows Command Prompt:**
```cmd
deploy.bat
```

**Linux/Mac:**
```bash
./deploy.sh "feat(properties): add new luxury home listings"
```

### Option 2: Manual Commands

```bash
# 1. Add and commit changes
git add .
git commit -m "feat(properties): add new luxury home listings"

# 2. Push to repository
git push origin main

# 3. Deploy to Vercel
vercel --prod
```

## 🔧 Prerequisites

### Required Tools
- [Node.js 18+](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Vercel CLI](https://vercel.com/cli): `npm i -g vercel`

### Required Secrets (for GitHub Actions)
Set these in your GitHub repository settings:

1. **VERCEL_TOKEN** - Your Vercel API token
2. **VERCEL_ORG_ID** - Your Vercel organization ID
3. **VERCEL_PROJECT_ID** - Your Vercel project ID

## 📋 Pre-Deployment Checklist

- [ ] All TypeScript errors resolved (`npx tsc --noEmit`)
- [ ] Build succeeds locally (`npm run build`)
- [ ] Tests pass (if applicable)
- [ ] Environment variables configured in Vercel
- [ ] Images optimized and properly referenced
- [ ] SEO meta tags updated
- [ ] Mobile responsiveness tested

## 🌍 Environment Configuration

### Vercel Environment Variables

Set these in your Vercel dashboard:

```bash
# API Configuration
REACT_APP_API_URL=https://api.centennialshillshomes.com
REACT_APP_GOOGLE_MAPS_API_KEY=your_maps_key

# Analytics
REACT_APP_GA_TRACKING_ID=GA-XXXXXXXXX

# Feature Flags
REACT_APP_ENABLE_MAPS=true
REACT_APP_ENABLE_COMMUTE_CALCULATOR=true
```

## 🔄 Deployment Workflows

### 1. Manual Deployment

**When to use:** Quick fixes, testing, or when you prefer manual control.

```bash
# Run the deployment script
.\deploy.ps1 "fix(maps): resolve map loading issue"
```

### 2. GitHub Actions (Automated)

**When to use:** Regular development workflow, team collaboration.

- **Push to `main`** → Automatic production deployment
- **Pull Request** → Preview deployment
- **All branches** → Automated testing and build verification

### 3. Vercel CLI Direct

**When to use:** Quick previews, testing specific configurations.

```bash
# Preview deployment
vercel

# Production deployment
vercel --prod

# Deploy with specific environment
vercel --env production
```

## 🏗️ Build Configuration

### Vercel Settings (`vercel.json`)
```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "functions": {
    "src/entry.vercel-edge.tsx": {
      "runtime": "edge"
    }
  }
}
```

### Package.json Scripts
```json
{
  "scripts": {
    "build": "vite build",
    "build:vercel": "vite build --mode production",
    "preview": "vite preview",
    "deploy": "vercel --prod",
    "deploy:preview": "vercel"
  }
}
```

## 🚨 Troubleshooting

### Common Issues

**Build Fails:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check TypeScript errors
npx tsc --noEmit
```

**Vercel Deployment Fails:**
```bash
# Check Vercel CLI version
vercel --version

# Force deployment
vercel --force

# Check deployment logs
vercel logs
```

**Environment Variables Missing:**
- Verify all required variables are set in Vercel dashboard
- Check variable names match exactly (case-sensitive)
- Redeploy after adding new variables

### Rollback Procedures

**Quick Rollback:**
```bash
# Revert last commit
git revert HEAD
git push origin main
```

**Vercel Rollback:**
```bash
# List deployments
vercel ls

# Promote previous deployment
vercel promote <deployment-url>
```

## 📊 Monitoring

### Post-Deployment Checks
- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Images load properly
- [ ] Forms work correctly
- [ ] Mobile responsiveness
- [ ] Core Web Vitals performance

### Useful Links
- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub Repository**: Check your git remote
- **Live Site**: https://centennialshillshomes.com
- **Analytics**: Check your analytics dashboard

## 🔐 Security Considerations

- Never commit API keys or secrets
- Use Vercel's environment variable encryption
- Enable branch protection rules
- Require pull request reviews
- Regular security audits

## 📈 Performance Optimization

- Monitor Core Web Vitals
- Optimize images (WebP format)
- Implement proper caching
- Use Vercel's Edge Runtime
- Enable Vercel Analytics

---

## 🆘 Need Help?

If you encounter issues:

1. Check the [troubleshooting section](#-troubleshooting)
2. Review Vercel deployment logs
3. Verify all prerequisites are installed
4. Check GitHub Actions workflow status
5. Contact the development team

**Happy Deploying! 🚀**
