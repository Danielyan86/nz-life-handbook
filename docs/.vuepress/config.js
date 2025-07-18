import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '新西兰留学生上岸手册',
  description: '帮助新同学快速适应新西兰生活，避坑少走弯路',
  
  bundler: webpackBundler(),
  
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
      {
        text: 'GitHub',
        link: 'https://github.com/Danielyan86/nz-life-handbook',
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
            '/courses/preparation.md',
          ],
        },
        {
          text: '英语学习',
          children: [
            '/english/chatgpt-speaking.md',
          ],
        },
        {
          text: '生活',
          children: [
            '/life/expenses.md',
          ],
        },
        {
          text: '登录前准备',
          children: [
            '/preparation/items-preparation.md',
            '/preparation/mindset-preparation.md',
            '/preparation/visa-diy.md',
          ],
        },
        {
          text: '签证',
          children: [
            '/visa/common-questions.md',
            '/visa/diy-preparation.md',
            '/visa/student-visa-renewal.md',
            '/visa/timeline.md',
          ],
        },
        {
          text: '工作',
          children: [
            '/work/README.md',
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
  ],
}) 