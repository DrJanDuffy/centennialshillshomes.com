@echo off
REM Centennial Hills Homes - Deployment Script (Windows Batch)
REM This script handles the complete deployment workflow

setlocal enabledelayedexpansion

echo 🏠 Centennial Hills Homes - Deployment Script
echo ==============================================

REM Check if we're in the right directory
if not exist "package.json" (
    echo [ERROR] package.json not found. Please run this script from the project root.
    exit /b 1
)

echo [INFO] Starting deployment process...

REM Step 1: Check git status
echo [INFO] Checking git status...
git status --porcelain > temp_status.txt
set /p git_status=<temp_status.txt
del temp_status.txt

if not "%git_status%"=="" (
    echo [INFO] Uncommitted changes detected. Adding all changes...
    git add .
    git commit -m "chore(deploy): update for deployment"
    echo [SUCCESS] Changes committed
) else (
    echo [SUCCESS] No uncommitted changes found.
)

REM Step 2: Run pre-deployment checks
echo [INFO] Running pre-deployment checks...

REM TypeScript check
echo [INFO] Running TypeScript check...
npx tsc --noEmit
if errorlevel 1 (
    echo [ERROR] TypeScript check failed
    exit /b 1
)
echo [SUCCESS] TypeScript check passed

REM Build check
echo [INFO] Running build check...
npm run build
if errorlevel 1 (
    echo [ERROR] Build check failed
    exit /b 1
)
echo [SUCCESS] Build check passed

REM Step 3: Push to git
echo [INFO] Pushing to git repository...
git push origin main
if errorlevel 1 (
    echo [ERROR] Failed to push to git
    exit /b 1
)
echo [SUCCESS] Successfully pushed to git

REM Step 4: Deploy to Vercel
echo [INFO] Deploying to Vercel...

REM Check if vercel CLI is installed
vercel --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Vercel CLI not found. Please install it with: npm i -g vercel
    exit /b 1
)

REM Deploy to Vercel
vercel --prod
if errorlevel 1 (
    echo [ERROR] Vercel deployment failed
    exit /b 1
)
echo [SUCCESS] Successfully deployed to Vercel!

REM Step 5: Final status
echo [SUCCESS] 🎉 Deployment completed successfully!
echo [INFO] Your Centennial Hills Homes website is now live!

REM Optional: Open the deployed site
set /p open_site="Would you like to open the deployed site? (y/N): "
if /i "%open_site%"=="y" (
    echo [INFO] Opening deployed site...
    start https://centennialshillshomes.com
)

echo.
echo 📋 Deployment Summary:
echo   - Git branch: main
echo   - Deployment time: %date% %time%
echo.
echo 🔗 Useful links:
echo   - Vercel Dashboard: https://vercel.com/dashboard
echo   - GitHub Repository: Check your git remote
echo.

pause
