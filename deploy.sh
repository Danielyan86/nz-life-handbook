#!/bin/bash

# 部署脚本 - 构建并部署到GitHub Pages

echo "🚀 开始部署..."

# 构建项目
echo "📦 构建VuePress项目..."
npm run build

# 检查构建是否成功
if [ $? -eq 0 ]; then
    echo "✅ 构建成功！"
else
    echo "❌ 构建失败！"
    exit 1
fi

# 如果存在dist目录，复制到根目录
if [ -d "docs/.vuepress/dist" ]; then
    echo "📁 复制构建文件..."
    cp -r docs/.vuepress/dist/* ./
    echo "✅ 文件复制完成！"
else
    echo "❌ 构建目录不存在！"
    exit 1
fi

echo "🎉 部署完成！"
echo "📋 下一步操作："
echo "1. git add ."
echo "2. git commit -m 'Update VuePress site'"
echo "3. git push origin main" 