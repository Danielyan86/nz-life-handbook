#!/bin/bash

# 自动更新侧边栏脚本
echo "🔄 正在更新侧边栏..."

# 检查 Python 是否可用
if command -v python3 &> /dev/null; then
    python3 scripts/generate_sidebar.py
elif command -v python &> /dev/null; then
    python scripts/generate_sidebar.py
else
    echo "❌ 错误: 未找到 Python，请先安装 Python"
    exit 1
fi

echo "✅ 侧边栏更新完成！"
echo "提示: 记得提交更改到 Git" 