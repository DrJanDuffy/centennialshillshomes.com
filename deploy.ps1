# Centennial Hills Homes - Deployment Script (PowerShell)
# This script handles the complete deployment workflow

param(
    [string]$CommitMessage = "chore(deploy): update for deployment"
)

# Set error action preference
$ErrorActionPreference = "Stop"

Write-Host "🏠 Centennial Hills Homes - Deployment Script" -ForegroundColor Cyan
Write-Host "==============================================" -ForegroundColor Cyan

# Function to print colored output
function Write-Status {
    param([string]$Message)
    Write-Host "[INFO] $Message" -ForegroundColor Blue
}

function Write-Success {
    param([string]$Message)
    Write-Host "[SUCCESS] $Message" -ForegroundColor Green
}

function Write-Warning {
    param([string]$Message)
    Write-Host "[WARNING] $Message" -ForegroundColor Yellow
}

function Write-Error {
    param([string]$Message)
    Write-Host "[ERROR] $Message" -ForegroundColor Red
}

# Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Error "package.json not found. Please run this script from the project root."
    exit 1
}

Write-Status "Starting deployment process..."

# Step 1: Check git status
Write-Status "Checking git status..."
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Status "Uncommitted changes detected. Adding all changes..."
    git add .
    git commit -m $CommitMessage
    Write-Success "Changes committed with message: $CommitMessage"
} else {
    Write-Success "No uncommitted changes found."
}

# Step 2: Run pre-deployment checks
Write-Status "Running pre-deployment checks..."

# TypeScript check
Write-Status "Running TypeScript check..."
try {
    npx tsc --noEmit
    Write-Success "TypeScript check passed"
} catch {
    Write-Error "TypeScript check failed"
    exit 1
}

# Build check
Write-Status "Running build check..."
try {
    npm run build
    Write-Success "Build check passed"
} catch {
    Write-Error "Build check failed"
    exit 1
}

# Step 3: Push to git
Write-Status "Pushing to git repository..."
try {
    $currentBranch = git branch --show-current
    git push origin $currentBranch
    Write-Success "Successfully pushed to git"
} catch {
    Write-Error "Failed to push to git"
    exit 1
}

# Step 4: Deploy to Vercel
Write-Status "Deploying to Vercel..."

# Check if vercel CLI is installed
try {
    vercel --version | Out-Null
} catch {
    Write-Error "Vercel CLI not found. Please install it with: npm i -g vercel"
    exit 1
}

# Deploy to Vercel
try {
    vercel --prod
    Write-Success "Successfully deployed to Vercel!"
} catch {
    Write-Error "Vercel deployment failed"
    exit 1
}

# Step 5: Final status
Write-Success "🎉 Deployment completed successfully!"
Write-Status "Your Centennial Hills Homes website is now live!"

# Optional: Open the deployed site
$openSite = Read-Host "Would you like to open the deployed site? (y/N)"
if ($openSite -eq "y" -or $openSite -eq "Y") {
    Write-Status "Opening deployed site..."
    try {
        Start-Process "https://centennialshillshomes.com"
    } catch {
        Write-Warning "Could not automatically open the site"
    }
}

Write-Host ""
Write-Host "📋 Deployment Summary:" -ForegroundColor Cyan
Write-Host "  - Git branch: $(git branch --show-current)" -ForegroundColor White
Write-Host "  - Last commit: $(git log -1 --pretty=format:'%h - %s')" -ForegroundColor White
Write-Host "  - Deployment time: $(Get-Date)" -ForegroundColor White
Write-Host ""
Write-Host "🔗 Useful links:" -ForegroundColor Cyan
Write-Host "  - Vercel Dashboard: https://vercel.com/dashboard" -ForegroundColor White
Write-Host "  - GitHub Repository: $(git remote get-url origin)" -ForegroundColor White
Write-Host ""
