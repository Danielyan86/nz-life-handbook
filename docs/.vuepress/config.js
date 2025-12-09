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
      'text': '首页',
      'children': [
        '/README.md'
      ]
    },
    {
      'text': '时间轴',
      'children': [
        '/timeline/README.md'
      ]
    },
    {
      'text': '怀大IT课程',
      'children': [
        '/courses/CSMAX596.md',
        '/courses/README.md',
        '/courses/abc-difference.md',
        '/courses/assessment-forms.md',
        '/courses/compx519.md',
        '/courses/compx521.md',
        '/courses/compx525.md',
        '/courses/compx527.md',
        '/courses/compx575.md',
        '/courses/csmax570.md',
        '/courses/geogy558.md',
        '/courses/how-to-check-assessment.md',
        '/courses/preparation.md'
      ]
    },
    {
      'text': '英语学习',
      'children': [
        '/english/README.md',
        '/english/chatgpt-speaking.md'
      ]
    },
    {
      'text': '生活',
      'children': [
        '/life/README.md',
        '/life/expenses.md',
        '/life/nz-tax.md'
      ]
    },
    {
      'text': '登录前准备',
      'children': [
        '/preparation/README.md',
        '/preparation/items-preparation.md',
        '/preparation/mindset-preparation.md',
        '/preparation/visa-diy.md'
      ]
    },
    {
      'text': '签证',
      'children': [
        '/visa/README.md',
        '/visa/common-questions.md',
        '/visa/diy-preparation.md',
        '/visa/post-study-visa.md',
        '/visa/student-visa-renewal.md',
        '/visa/timeline.md'
      ]
    },
    {
      'text': '工作',
      'children': [
        '/work/README.md'
      ]
    }
  ]
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