#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * 从 Markdown 文件中提取标题
 */
function getTitleFromMarkdown(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('# ')) {
        return trimmed.substring(2).trim();
      }
    }
    return path.basename(filePath, '.md');
  } catch {
    return path.basename(filePath, '.md');
  }
}

/**
 * 生成侧边栏配置
 */
function generateSidebarConfig() {
  const docsDir = 'docs';
  const sidebarConfig = {
    '/': [
      {
        text: '首页',
        children: ['/README.md'],
      },
      {
        text: '时间轴',
        children: ['/timeline/README.md'],
      },
    ],
  };

  // 目录映射
  const dirMapping = {
    preparation: '登录前准备',
    visa: '签证',
    life: '生活',
    courses: '怀大IT课程',
    work: '工作',
    english: '英语学习',
  };

  // 遍历目录
  const dirs = fs.readdirSync(docsDir)
    .filter(item => fs.statSync(path.join(docsDir, item)).isDirectory())
    .sort();

  for (const dirName of dirs) {
    if (dirMapping[dirName]) {
      const dirPath = path.join(docsDir, dirName);
      const children = [];

      // 获取目录下的所有 md 文件
      const files = fs.readdirSync(dirPath)
        .filter(file => file.endsWith('.md'))
        .sort();

      for (const fileName of files) {
        const relPath = `/${dirName}/${fileName}`;
        children.push(relPath);
      }

      if (children.length > 0) {
        sidebarConfig['/'].push({
          text: dirMapping[dirName],
          children,
        });
      }
    }
  }

  return sidebarConfig;
}

/**
 * 更新配置文件
 */
function updateConfigFile() {
  const sidebarConfig = generateSidebarConfig();
  const configPath = 'docs/.vuepress/config.js';

  // 读取现有配置
  let content = fs.readFileSync(configPath, 'utf-8');

  // 找到 sidebar 配置部分并替换
  const sidebarRegex = /sidebar:\s*\{[\s\S]*?\},/;
  
  // 将配置转换为JavaScript格式
  const sidebarConfigStr = JSON.stringify(sidebarConfig, null, 2)
    .replace(/"([^"]+)":/g, "'$1':")  // 将键名改为单引号
    .replace(/"([^"]+)"/g, "'$1'");    // 将字符串值改为单引号
  
  const newSidebar = `sidebar: ${sidebarConfigStr},`;

  if (sidebarRegex.test(content)) {
    content = content.replace(sidebarRegex, newSidebar);
    fs.writeFileSync(configPath, content, 'utf-8');
    console.log('✅ 侧边栏配置已更新');
  } else {
    console.log('❌ 找不到 sidebar 配置');
  }
}

// 执行更新
updateConfigFile(); 