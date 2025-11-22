# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a VuePress 2.0 documentation site for a New Zealand student life handbook (新西兰留学生上岸手册). The site provides comprehensive guidance for international students coming to New Zealand, covering visa applications, university courses, living tips, and job hunting experiences.

## Technology Stack

- **Framework**: VuePress 2.0 (migrated from Docsify)
- **Bundler**: Webpack (via @vuepress/bundler-webpack)
- **Theme**: Default theme (@vuepress/theme-default)
- **Node.js**: >= 16
- **npm**: >= 8

## Essential Commands

### Development
```bash
npm install                 # Install dependencies
npm run dev                 # Start development server
npm run build              # Build for production
npm run serve              # Preview production build
```

### Sidebar Management
```bash
npm run update-sidebar     # Auto-generate sidebar config from docs/ structure
```

### Deployment
```bash
npm run deploy            # Build and deploy to GitHub Pages
npm run deploy:gh-pages   # Deploy dist folder to gh-pages branch
```

Note: Automatic deployment is configured via GitHub Actions on push to main branch.

## Architecture & Structure

### Content Organization

The documentation is organized in `docs/` with the following sections:

- `timeline/` - Student journey timeline
- `preparation/` - Pre-arrival preparation
- `visa/` - Visa application and renewal guides
- `life/` - Living expenses and daily life tips
- `courses/` - University of Waikato IT course reviews
- `work/` - Job hunting and career guidance
- `english/` - English learning resources

### VuePress Configuration

**Main config**: `docs/.vuepress/config.js`

This file contains:
- Site metadata and SEO configuration (Open Graph, Twitter cards, structured data)
- Navigation bar and sidebar structure
- Theme settings (repo link, edit links, last updated timestamps)
- Plugin configuration (search, sitemap)
- Base path set to `/nz-life-handbook/` for GitHub Pages deployment

**Important**: The sidebar configuration in `config.js` is manually maintained and maps to actual markdown files. When adding new content:
1. Create markdown file in appropriate `docs/` subdirectory
2. Run `npm run update-sidebar` to regenerate sidebar config, OR
3. Manually add entry to sidebar array in `config.js`

### Sidebar Generation Script

`scripts/update-sidebar.js` automates sidebar generation:
- Scans `docs/` directories (preparation, visa, life, courses, work, english)
- Extracts H1 titles from markdown files for display text
- Generates sidebar config structure matching VuePress format
- Updates `config.js` by regex-replacing the sidebar section

### Static Assets

- `docs/.vuepress/public/` - Static files (favicon, images, etc.)
- These files are served from the root path in production

### Build Output

- Build output: `docs/.vuepress/dist/`
- Temporary files: `docs/.vuepress/.cache/` and `docs/.vuepress/.temp/`
- These directories are git-ignored

## Development Workflow

1. **Adding Content**: Create `.md` files in appropriate `docs/` subdirectories following existing structure
2. **Updating Navigation**: Run `npm run update-sidebar` or manually edit `config.js`
3. **Testing**: Use `npm run dev` to preview changes locally
4. **Deployment**: Push to main branch triggers automatic GitHub Pages deployment

## Content Guidelines

Per CONTRIBUTING.md and README.md:
- Respect privacy - no personal information
- Keep content objective, truthful, and factual
- Follow existing Markdown formatting
- Cite sources when quoting external content
- Content is in Chinese (zh-CN)

## Configuration Files

统一从配置文件读取参数，不要在代码中添加默认参数或硬编码值。主要配置在 `docs/.vuepress/config.js`。
