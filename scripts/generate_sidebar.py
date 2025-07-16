#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
自动生成 Docsify 侧边栏导航
扫描目录结构并生成 _sidebar.md 文件
"""

import os
import re
from pathlib import Path
from urllib.parse import quote

def get_title_from_markdown(file_path):
    """从 Markdown 文件中提取标题"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            # 查找第一个 # 开头的标题
            lines = content.split('\n')
            for line in lines:
                line = line.strip()
                if line.startswith('# '):
                    return line[2:].strip()
            # 如果没有找到标题，使用文件名
            return Path(file_path).stem
    except:
        return Path(file_path).stem

def should_include_file(filename, is_dir=False):
    """判断是否应该包含该文件或目录"""
    exclude_files = {
        'README.md', '_sidebar.md', '.DS_Store', '.gitignore',
        'LICENSE', 'index.html'
    }
    exclude_dirs = {
        '.git', '.github', 'scripts', '__pycache__', '.vscode', 'datalib'
    }
    if is_dir:
        if filename in exclude_dirs or filename.startswith('.'):
            return False
        return True
    else:
        if filename in exclude_files or filename.startswith('.'):
            return False
        return True

def url_encode_path(path):
    """直接返回原始路径，不做编码"""
    return path

def generate_sidebar_content(root_dir='.'):
    """生成侧边栏内容"""
    content = ['<!-- docs/_sidebar.md -->\n']
    
    # 特殊文件处理
    special_files = {
        'README.md': '首页',
        '新西兰生存完整时间轴.md': '新西兰生存完整时间轴'
    }
    
    # 处理根目录下的 Markdown 文件
    root_files = []
    for item in os.listdir(root_dir):
        if item.endswith('.md') and should_include_file(item):
            root_files.append(item)
    
    # 添加首页
    if 'README.md' in root_files:
        content.append('* [首页](/)\n')
        root_files.remove('README.md')
    
    # 添加其他根目录文件
    for file in sorted(root_files):
        if file in special_files:
            title = special_files[file]
        else:
            title = get_title_from_markdown(file)
        encoded_path = url_encode_path(file)
        content.append(f'* [{title}]({encoded_path})\n')
    
    content.append('\n')
    
    # 自动遍历实际存在的目录
    for dir_name in sorted(os.listdir(root_dir)):
        dir_path = os.path.join(root_dir, dir_name)
        if os.path.isdir(dir_path) and should_include_file(dir_name, is_dir=True):
            # 目录分组头，指向 README.md
            readme_path = os.path.join(dir_path, 'README.md')
            if os.path.exists(readme_path):
                encoded_readme = url_encode_path(f'{dir_name}/README.md')
                content.append(f'* [{dir_name}]({encoded_readme})\n')
            else:
                content.append(f'* {dir_name}\n')
            
            # 获取目录下的其他 md 文件
            files = []
            for item in os.listdir(dir_path):
                if item.endswith('.md') and should_include_file(item) and item != 'README.md':
                    files.append(item)
            
            for file in sorted(files):
                file_path = os.path.join(dir_path, file)
                title = get_title_from_markdown(file_path)
                rel_path = f'{dir_name}/{file}'
                encoded_path = url_encode_path(rel_path)
                content.append(f'  * [{title}]({encoded_path})\n')
    
    return ''.join(content)

def main():
    """主函数"""
    print("🔍 扫描目录结构...")
    
    # 生成侧边栏内容
    sidebar_content = generate_sidebar_content()
    
    # 写入文件
    with open('_sidebar.md', 'w', encoding='utf-8') as f:
        f.write(sidebar_content)
    
    print("✅ 侧边栏已更新: _sidebar.md")
    print("\n📋 生成的导航结构:")
    print(sidebar_content)

if __name__ == '__main__':
    main() 