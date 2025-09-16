# Vercel Deployment Guide

## Quick Deployment Steps

### 1. Install Node.js (if not already installed)
- Download from [nodejs.org](https://nodejs.org)
- Install the LTS version
- Restart your computer

### 2. Install Vercel CLI
```bash
npm install -g vercel
```

### 3. Login to Vercel
```bash
vercel login
```

### 4. Deploy
```bash
vercel
```

### 5. Follow the prompts:
- Set up and deploy? **Y**
- Which scope? **Your account**
- Link to existing project? **N**
- What's your project's name? **gpa-budaun-website**
- In which directory is your code located? **./**

## Alternative: Deploy via GitHub

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/gpa-budaun-website.git
git push -u origin main
```

### 2. Deploy via Vercel Web Interface
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Vercel will automatically detect the settings

## Environment Variables

After deployment, add these environment variables in Vercel dashboard:

- `REACT_APP_API_URL` = `https://your-backend-url.herokuapp.com/api`

## Troubleshooting

### If you get "package.json not found":
- Make sure you're in the root directory (S:\CollegeSite)
- Check that package.json exists in the root

### If build fails:
- Check that all dependencies are in package.json
- Make sure all files are in the correct locations

### If deployment succeeds but site doesn't work:
- Check the environment variables
- Verify the build output directory is correct
