# 🚀 部署指南

## 自动部署（推荐）

本项目已配置GitHub Actions自动部署。每次推送到`main`分支时，会自动构建并部署到GitHub Pages。

### 部署步骤

1. **推送代码到GitHub**
   ```bash
   git add .
   git commit -m "Update documentation"
   git push origin main
   ```

2. **查看部署状态**
   - 访问 [Actions](https://github.com/Danielyan86/nz-life-handbook/actions) 页面
   - 查看最新的工作流运行状态

3. **访问网站**
   - 部署完成后，访问：https://danielyan86.github.io/nz-life-handbook/

## 手动部署

如果需要手动部署，可以使用以下命令：

```bash
# 构建项目
npm run build

# 部署到GitHub Pages（需要安装gh-pages）
npm install -g gh-pages
npm run deploy:gh-pages
```

## 本地开发

```bash
# 启动开发服务器
npm run dev

# 构建项目
npm run build

# 预览构建结果
npm run serve
```

## 配置说明

### GitHub Pages设置

1. 进入仓库设置：Settings > Pages
2. Source选择：GitHub Actions
3. 确保仓库是公开的

### 自定义域名（可选）

如果需要使用自定义域名：

1. 在仓库设置中添加自定义域名
2. 在`docs/.vuepress/config.js`中添加：
   ```javascript
   export default defineUserConfig({
     // ... 其他配置
     base: '/nz-life-handbook/', // 如果使用子路径
   })
   ```

## 故障排除

### 构建失败
- 检查Node.js版本（推荐18+）
- 确保所有依赖已安装：`npm install`
- 检查VuePress配置语法

### 部署失败
- 检查GitHub Actions权限设置
- 确保仓库是公开的
- 检查GitHub Pages设置

### 页面显示问题
- 清除浏览器缓存
- 检查文件路径是否正确
- 验证Markdown语法

## 更新侧边栏

如果添加了新页面，需要更新侧边栏：

```bash
npm run update-sidebar
```

这会自动扫描`docs/`目录并更新侧边栏配置。 