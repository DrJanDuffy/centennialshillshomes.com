#!/bin/bash

# Centennial Hills Homes - Deployment Script
# This script handles the complete deployment workflow

set -e  # Exit on any error

echo "🏠 Centennial Hills Homes - Deployment Script"
echo "=============================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if we're on main branch (optional - comment out if you want to deploy from any branch)
# if [ "$(git branch --show-current)" != "main" ]; then
#     print_warning "You're not on the main branch. Current branch: $(git branch --show-current)"
#     read -p "Continue anyway? (y/N): " -n 1 -r
#     echo
#     if [[ ! $REPLY =~ ^[Yy]$ ]]; then
#         exit 1
#     fi
# fi

print_status "Starting deployment process..."

# Step 1: Check git status
print_status "Checking git status..."
if [ -n "$(git status --porcelain)" ]; then
    print_status "Uncommitted changes detected. Adding all changes..."
    git add .
    
    # Get commit message from user or use default
    if [ -z "$1" ]; then
        COMMIT_MSG="chore(deploy): update for deployment"
    else
        COMMIT_MSG="$1"
    fi
    
    git commit -m "$COMMIT_MSG"
    print_success "Changes committed with message: $COMMIT_MSG"
else
    print_success "No uncommitted changes found."
fi

# Step 2: Run pre-deployment checks
print_status "Running pre-deployment checks..."

# TypeScript check
print_status "Running TypeScript check..."
if npx tsc --noEmit; then
    print_success "TypeScript check passed"
else
    print_error "TypeScript check failed"
    exit 1
fi

# Build check
print_status "Running build check..."
if npm run build; then
    print_success "Build check passed"
else
    print_error "Build check failed"
    exit 1
fi

# Step 3: Push to git
print_status "Pushing to git repository..."
if git push origin $(git branch --show-current); then
    print_success "Successfully pushed to git"
else
    print_error "Failed to push to git"
    exit 1
fi

# Step 4: Deploy to Vercel
print_status "Deploying to Vercel..."

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    print_error "Vercel CLI not found. Please install it with: npm i -g vercel"
    exit 1
fi

# Deploy to Vercel
if vercel --prod; then
    print_success "Successfully deployed to Vercel!"
else
    print_error "Vercel deployment failed"
    exit 1
fi

# Step 5: Final status
print_success "🎉 Deployment completed successfully!"
print_status "Your Centennial Hills Homes website is now live!"

# Optional: Open the deployed site
read -p "Would you like to open the deployed site? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    # Try to get the deployment URL (this might need adjustment based on your Vercel setup)
    print_status "Opening deployed site..."
    # You can customize this URL based on your Vercel domain
    open "https://centennialshillshomes.com" 2>/dev/null || print_warning "Could not automatically open the site"
fi

echo ""
echo "📋 Deployment Summary:"
echo "  - Git branch: $(git branch --show-current)"
echo "  - Last commit: $(git log -1 --pretty=format:'%h - %s')"
echo "  - Deployment time: $(date)"
echo ""
echo "🔗 Useful links:"
echo "  - Vercel Dashboard: https://vercel.com/dashboard"
echo "  - GitHub Repository: $(git remote get-url origin)"
echo ""
