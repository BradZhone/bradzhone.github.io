import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Brad Zhone\'s Blog',
  description: 'Hello there, welcome to Brad Zhone\'s Blog',
  base: '/',
  head: [
  ["link", { rel: "icon", href: "/images/light.png" }],
],

  theme: defaultTheme({// 主题设置
    logo: '/images/light.png',
    logoDark: '/images/dark.png',
    repo: 'https://github.com/BradZhone',
    repoLabel: 'GitHub',
    navbar: require("./config/nav"),
    sidebar: require("./config/sidebar"),

    editLink: false,
    editLinkPattern: "",
    sidebarDepth: 2,
    lastUpdated: true,
    lastUpdatedText: "Update Time",
    backToHome: 'Back Home',
  }),

  plugins: [
    searchPlugin({}),
  ],
})
