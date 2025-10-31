import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '新西兰留学生上岸手册',
  description: '帮助新同学快速适应新西兰生活，避坑少走弯路。包含签证申请、生活指南、课程经验、求职经验等实用信息。',
  
  // 设置GitHub Pages的base路径
  base: '/nz-life-handbook/',
  
  bundler: webpackBundler(),
  
  // SEO优化 - head标签配置
  head: [
    // 基础SEO
    ['meta', { name: 'author', content: '阿东 - 新西兰留学生' }],
    ['meta', { name: 'keywords', content: '新西兰留学,留学生活,签证申请,怀卡托大学,IT课程,求职经验,英语学习,新西兰生活指南' }],
    ['meta', { name: 'robots', content: 'index,follow' }],
    
    // Open Graph / Facebook
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '新西兰留学生上岸手册' }],
    ['meta', { property: 'og:description', content: '帮助新同学快速适应新西兰生活，避坑少走弯路。包含签证申请、生活指南、课程经验、求职经验等实用信息。' }],
    ['meta', { property: 'og:url', content: 'https://danielyan86.github.io/nz-life-handbook/' }],
    ['meta', { property: 'og:site_name', content: '新西兰留学生上岸手册' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    
    // Twitter
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: '新西兰留学生上岸手册' }],
    ['meta', { name: 'twitter:description', content: '帮助新同学快速适应新西兰生活，避坑少走弯路。包含签证申请、生活指南、课程经验、求职经验等实用信息。' }],
    
    // 移动端优化
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'format-detection', content: 'telephone=no' }],
    
    // 图标
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    
    // 结构化数据
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "新西兰留学生上岸手册",
      "description": "帮助新同学快速适应新西兰生活，避坑少走弯路",
      "url": "https://danielyan86.github.io/nz-life-handbook/",
      "author": {
        "@type": "Person",
        "name": "阿东",
        "description": "新西兰留学生，15年IT行业经验"
      },
      "publisher": {
        "@type": "Organization",
        "name": "新西兰留学生上岸手册"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://danielyan86.github.io/nz-life-handbook/search.html?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    })],
  ],
  
  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '时间轴',
        link: '/timeline/',
      },
    ],
    
    sidebar: {
      '/': [
        {
          text: '首页',
          children: [
            '/README.md',
          ],
        },
        {
          text: '时间轴',
          children: [
            '/timeline/README.md',
          ],
        },
        {
          text: '怀大IT课程',
          children: [
            {
              text: 'ABC学期入学有什么区别',
              link: '/courses/abc-difference.md',
            },
            {
              text: '课程的考核形势',
              link: '/courses/assessment-forms.md',
            },
            {
              text: 'COMPX519-Malware Analysis and Penetration Testing',
              link: '/courses/compx519.md',
            },
            {
              text: 'COMPX521-Machine Learning Algorithms',
              link: '/courses/compx521.md',
            },
            {
              text: 'COMPX525-Deep Learning',
              link: '/courses/compx525.md',
            },
            {
              text: 'COMPX527-Secure Cloud Application Engineering',
              link: '/courses/compx527.md',
            },
            {
              text: 'COMPX575-Programming Tools and Techniques',
              link: '/courses/compx575.md',
            },
            {
              text: 'CSMAX570-Internship preparation',
              link: '/courses/csmax570.md',
            },
            {
              text: 'CSMAX596-Computer Science Internship',
              link: '/courses/CSMAX596.md',
            },
            {
              text: 'GEOGY558-Applied Geographic Information Systems',
              link: '/courses/geogy558.md',
            },
            {
              text: '怎么提前查看每个课程的考核形势',
              link: '/courses/how-to-check-assessment.md',
            },
            {
              text: '怀大IT Master之准备篇',
              link: '/courses/preparation.md',
            },
          ],
        },
        {
          text: '英语学习',
          children: [
            {
              text: '如何使用 ChatGPT 练习口语',
              link: '/english/chatgpt-speaking.md',
            },
          ],
        },
        {
          text: '生活',
          children: [
            {
              text: '生活开销',
              link: '/life/expenses.md',
            },
          ],
        },
        {
          text: '登录前准备',
          children: [
            {
              text: '出发前物品准备',
              link: '/preparation/items-preparation.md',
            },
            {
              text: '大龄留学准备 - 心态篇',
              link: '/preparation/mindset-preparation.md',
            },
            {
              text: '签证DIY',
              link: '/preparation/visa-diy.md',
            },
          ],
        },
        {
          text: '签证',
          children: [
            {
              text: '学签常见问题',
              link: '/visa/common-questions.md',
            },
            {
              text: 'DIY 留学准备 - 签证篇',
              link: '/visa/diy-preparation.md',
            },
            {
              text: '学生签续签申请',
              link: '/visa/student-visa-renewal.md',
            },
            {
              text: '签证时间线',
              link: '/visa/timeline.md',
            },
          ],
        },
        {
          text: '工作',
          children: [
            {
              text: '工作相关',
              link: '/work/README.md',
            },
          ],
        },
      ],
    },
    
    repo: 'Danielyan86/nz-life-handbook',
    docsDir: 'docs',
    
    editLink: true,
    editLinkText: '在 GitHub 上编辑此页',
    
    lastUpdated: true,
    lastUpdatedText: '最后更新',
    
    contributors: true,
    contributorsText: '贡献者',
  }),
  
  plugins: [
    '@vuepress/plugin-search',
    
    // Sitemap插件
    sitemapPlugin({
      hostname: 'https://danielyan86.github.io',
      sitemapFilename: 'sitemap.xml',
    }),
  ],
}) 