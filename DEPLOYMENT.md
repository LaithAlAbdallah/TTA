# TTA Website Deployment Guide

## 🚀 Quick Deployment Options

Your TTA website is ready to deploy! Here are the recommended platforms:

### Option 1: Vercel (Recommended) ⭐

**Why Vercel?**
- Free tier with custom domains
- Automatic deployments from GitHub
- Built-in CDN and performance optimization
- Perfect for Angular applications

**Steps:**
1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   npm run deploy:vercel
   ```

4. **Follow the prompts:**
   - Link to existing project or create new
   - Set project name (e.g., "tta-website")
   - Confirm settings

5. **Your site will be live at:** `https://your-project-name.vercel.app`

### Option 2: Netlify

**Steps:**
1. **Install Netlify CLI:**
   ```bash
   npm i -g netlify-cli
   ```

2. **Login:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   npm run deploy:netlify
   ```

### Option 3: Manual Upload

1. **Build the project:**
   ```bash
   npm run build:prod
   ```

2. **Upload the contents of `dist/demo/browser/` to your hosting provider**

## 🔧 Pre-Deployment Checklist

- ✅ Production build tested and working
- ✅ All assets included in build
- ✅ SEO meta tags configured
- ✅ Custom domain ready (optional)

## 🌐 Custom Domain Setup

### For Vercel:
1. Go to your project dashboard
2. Click "Domains"
3. Add your custom domain (e.g., `tta-dubai.com`)
4. Update DNS records as instructed

### For Netlify:
1. Go to Site settings → Domain management
2. Add custom domain
3. Configure DNS records

## 📊 Performance Optimization

Your build is already optimized with:
- ✅ Minified JavaScript and CSS
- ✅ Tree shaking enabled
- ✅ AOT compilation
- ✅ Asset optimization
- ✅ Source maps disabled for production

## 🔄 Continuous Deployment

### GitHub Integration:
1. Push your code to GitHub
2. Connect your repository to Vercel/Netlify
3. Automatic deployments on every push to main branch

### Manual Updates:
```bash
# Make changes to your code
npm run build:prod
npm run deploy:vercel  # or netlify
```

## 🛠️ Troubleshooting

**Build Issues:**
- Run `npm install` to ensure dependencies are up to date
- Check for TypeScript errors: `ng build --configuration=production`

**Deployment Issues:**
- Ensure all files in `dist/demo/browser/` are uploaded
- Check that `index.html` is in the root directory
- Verify routing configuration for SPA

**Performance Issues:**
- Enable gzip compression on your server
- Use a CDN for static assets
- Monitor Core Web Vitals

## 📞 Support

If you encounter any issues:
1. Check the platform's documentation
2. Verify your build output
3. Test locally with `npm run serve:prod`

---

**Your TTA website is ready to go live! 🎉**
