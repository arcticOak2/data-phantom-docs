# Data Phantom Platform Documentation

This repository contains the official documentation for the Data Phantom Platform - a comprehensive data processing and analytics platform for managing SQL workflows across multiple engines with AWS EMR integration.

## 🌐 Live Documentation

Visit the live documentation at: [https://arcticOak2.github.io/data-phantom-docs](https://arcticOak2.github.io/data-phantom-docs)

## 📚 Documentation Structure

- **[Home](index.html)** - Platform overview and features
- **[Getting Started](getting-started.html)** - Complete setup and installation guide
- **[Quick Start Guide](quick-start.html)** - Visual step-by-step guide with screenshots
- **[Configuration](configuration.html)** - Configuration guide and best practices

## 🚀 Features Covered

### Platform Capabilities
- Multi-engine SQL support (Hive, Presto, Spark SQL, MySQL, PySpark)
- Visual workflow management with dependency tracking (DAG)
- Cron-based scheduling and ad-hoc execution
- Data reconciliation and validation
- UDF support with JAR upload
- AWS EMR and S3 integration

### Documentation Features
- Modern, responsive design
- Interactive code examples
- Step-by-step guides
- Mobile-friendly navigation
- Search functionality
- Syntax highlighting

## 🛠️ Local Development

To run the documentation locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/arcticOak2/data-phantom-docs.git
   cd data-phantom-docs
   ```

2. **Serve locally:**
   ```bash
   # Option 1: Using Python
   python -m http.server 8000
   
   # Option 2: Using Node.js
   npx serve .
   
   # Option 3: Using Jekyll (if you have Ruby)
   bundle exec jekyll serve
   ```

3. **Open in browser:**
   Navigate to `http://localhost:8000`

## 📝 Contributing

We welcome contributions to improve the documentation! Here's how you can help:

### Reporting Issues
- Found a typo or error? [Open an issue](https://github.com/arcticOak2/data-phantom-docs/issues)
- Missing information? Let us know what should be added
- Broken links or outdated content? Report it

### Contributing Changes
1. Fork this repository
2. Create a feature branch (`git checkout -b improve-docs`)
3. Make your changes
4. Test locally to ensure everything works
5. Commit your changes (`git commit -m 'Improve API documentation'`)
6. Push to your branch (`git push origin improve-docs`)
7. Create a Pull Request

### Style Guidelines
- Use clear, concise language
- Include code examples where helpful
- Test all code snippets
- Follow the existing structure and formatting
- Add appropriate headings and sections

## 🏗️ Project Structure

```
data-phantom-docs/
├── index.html              # Homepage
├── getting-started.html    # Setup guide
├── quick-start.html        # Visual step-by-step guide
├── configuration.html      # Configuration guide
├── assets/
│   ├── images/            # Screenshots (14 files)
│   │   ├── 01-login-page.png
│   │   └── ...
│   ├── css/
│   │   ├── style.css      # Main styles
│   │   └── prism.css      # Code highlighting
│   └── js/
│       ├── main.js        # Interactive functionality
│       └── prism.js       # Syntax highlighting
├── _config.yml            # Jekyll configuration
└── README.md              # This file
```

## 🚀 GitHub Pages Deployment

This documentation is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### Setting Up GitHub Pages
1. Go to your repository Settings
2. Scroll to "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Choose `main` branch and `/ (root)` folder
5. Click "Save"

The site will be available at: `https://arcticOak2.github.io/data-phantom-docs`

## 🔗 Related Projects

- **[Data Phantom Platform](https://github.com/arcticOak2/annihilator-data-playground)** - Main backend application
- **[Data Phantom Dashboard](https://github.com/arcticOak2/data-phantom-dashboard)** - React frontend interface

## 📄 License

This documentation is licensed under the Apache License 2.0 - see the main project's [LICENSE](https://github.com/arcticOak2/annihilator-data-playground/blob/main/LICENSE) file for details.

## 👤 Author

**Abhijeet Kumar**
- Email: [searchabhijeet@gmail.com](mailto:searchabhijeet@gmail.com)
- LinkedIn: [@abhijeet-kumar-983b57a4](https://www.linkedin.com/in/abhijeet-kumar-983b57a4/)
- GitHub: [@arcticOak2](https://github.com/arcticOak2)

## 🙏 Acknowledgments

- Built with modern web technologies
- Styled with custom CSS and responsive design
- Icons from [Font Awesome](https://fontawesome.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

For questions about the Data Phantom Platform itself, please refer to the [main repository](https://github.com/arcticOak2/annihilator-data-playground).

For documentation-specific questions, feel free to [open an issue](https://github.com/arcticOak2/data-phantom-docs/issues) in this repository.
