# Deployment Guide for Data Phantom Documentation

This guide will help you deploy the Data Phantom documentation to GitHub Pages.

## 🚀 Quick Deployment Steps

### 1. Initialize Git Repository

```bash
cd /Users/abhijeetk/Documents/data-phantom-docs

# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Data Phantom documentation website"
```

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `data-phantom-docs` (or your preferred name)
3. **Don't** initialize with README (we already have one)
4. Make it public for GitHub Pages

### 3. Connect Local Repository to GitHub

```bash
# Add remote origin (replace 'yourusername' with your GitHub username)
git remote add origin https://github.com/yourusername/data-phantom-docs.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**

### 5. Access Your Documentation

Your documentation will be available at:
```
https://yourusername.github.io/data-phantom-docs
```

**Note:** It may take 5-10 minutes for the site to be available after first deployment.

## 🔧 Custom Domain (Optional)

If you want to use a custom domain:

### 1. Create CNAME File

```bash
# Replace with your domain
echo "docs.dataphantom.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

### 2. Configure DNS

In your domain registrar's DNS settings, add a CNAME record:
- **Type:** CNAME
- **Name:** docs (or your subdomain)
- **Value:** yourusername.github.io

### 3. Enable Custom Domain in GitHub

1. Go to repository Settings → Pages
2. Under **Custom domain**, enter your domain
3. Check **Enforce HTTPS**
4. Save

## 📝 Making Updates

To update the documentation:

```bash
# Make your changes to HTML/CSS/JS files

# Add and commit changes
git add .
git commit -m "Update documentation"

# Push to GitHub
git push
```

Changes will automatically deploy to GitHub Pages within a few minutes.

## 🛠️ Local Development Server

### Option 1: Python HTTP Server
```bash
cd /Users/abhijeetk/Documents/data-phantom-docs
python3 -m http.server 8000
# Open http://localhost:8000
```

### Option 2: Node.js serve
```bash
# Install serve globally
npm install -g serve

# Serve the directory
serve .
# Open http://localhost:3000
```

### Option 3: Jekyll (if you want to use Jekyll features)
```bash
# Install Jekyll (requires Ruby)
gem install bundler jekyll

# Create Gemfile
echo 'source "https://rubygems.org"' > Gemfile
echo 'gem "github-pages", group: :jekyll_plugins' >> Gemfile

# Install dependencies
bundle install

# Serve with Jekyll
bundle exec jekyll serve
# Open http://localhost:4000
```

## 📁 File Structure Summary

```
data-phantom-docs/
├── index.html              # Homepage
├── getting-started.html    # Installation guide
├── api-reference.html      # API documentation  
├── configuration.html      # Configuration guide
├── examples.html          # Examples and use cases
├── assets/
│   ├── css/
│   │   ├── style.css      # Main stylesheet
│   │   └── prism.css      # Code highlighting
│   └── js/
│       ├── main.js        # Interactive features
│       └── prism.js       # Syntax highlighting
├── _config.yml            # Jekyll configuration
├── README.md              # Project documentation
├── DEPLOY.md             # This deployment guide
└── .gitignore            # Git ignore rules
```

## 🔍 Verification

After deployment, verify these features work:

- [ ] Homepage loads correctly
- [ ] Navigation between pages works
- [ ] Mobile responsive design
- [ ] Code blocks have syntax highlighting
- [ ] Copy-to-clipboard functionality
- [ ] All links work (internal and external)
- [ ] Contact information is correct

## 🚨 Troubleshooting

### Site not loading after 10 minutes
- Check GitHub Pages settings
- Ensure repository is public
- Check for any build errors in repository Actions tab

### Custom domain not working
- Verify DNS settings (use `dig` or online DNS checker)
- Ensure CNAME file is in root directory
- Check GitHub Pages custom domain settings

### Styles not loading
- Check file paths in HTML files
- Ensure CSS files are in correct directory
- Verify case sensitivity in file names

### 404 errors for pages
- Ensure file names match exactly (case sensitive)
- Check that all HTML files are in root directory
- Verify links in navigation menus

## 📞 Support

For GitHub Pages specific issues:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Community Forum](https://github.com/community)

For Data Phantom Platform questions:
- [Main Repository](https://github.com/arcticOak2/annihilator-data-playground)
- Email: searchabhijeet@gmail.com

## 🎉 Success!

Once deployed, your Data Phantom documentation will be:
- ✅ Publicly accessible
- ✅ Mobile responsive
- ✅ Fast loading
- ✅ Professional looking
- ✅ Easy to navigate
- ✅ Search engine friendly

Share the link with your users and start getting feedback!
