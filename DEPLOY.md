# GitBook 部署指南

## 本地预览

1. 安装 GitBook CLI：
```bash
npm install -g gitbook-cli
```

2. 安装依赖：
```bash
gitbook install
```

3. 本地预览：
```bash
gitbook serve
```

4. 构建静态文件：
```bash
gitbook build
```

## GitHub Pages 部署

### 方法1：使用 GitHub Actions（推荐）

1. 在项目根目录创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
    
    - name: Install GitBook
      run: |
        npm install -g gitbook-cli
        gitbook install
    
    - name: Build GitBook
      run: gitbook build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./_book
```

2. 在 GitHub 仓库设置中启用 GitHub Pages，选择 `gh-pages` 分支作为源。

### 方法2：手动部署

1. 构建项目：
```bash
gitbook build
```

2. 将 `_book` 目录的内容推送到 `gh-pages` 分支。

## 自定义域名

在 `book.json` 中添加：

```json
{
  "title": "新西兰留学生上岸手册",
  "description": "帮助新同学快速适应新西兰生活，避坑少走弯路",
  "author": "阿东",
  "language": "zh-hans",
  "structure": {
    "readme": "README.md",
    "summary": "SUMMARY.md"
  },
  "plugins": [
    "search",
    "github",
    "back-to-top-button",
    "copy-code-button",
    "expandable-chapters"
  ],
  "pluginsConfig": {
    "github": {
      "url": "https://github.com/Danielyan86/nz-life-handbook"
    }
  },
  "variables": {
    "site": {
      "title": "新西兰留学生上岸手册"
    }
  }
}
```

## 插件说明

- `search`: 全文搜索功能
- `github`: 显示 GitHub 链接
- `back-to-top-button`: 返回顶部按钮
- `copy-code-button`: 代码复制按钮
- `expandable-chapters`: 可折叠章节

## 注意事项

1. 确保所有 Markdown 文件都有正确的标题
2. 图片路径使用相对路径
3. 定期更新内容，GitBook 会自动重新构建 