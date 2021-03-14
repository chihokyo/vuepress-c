module.exports = {
    base: '/vuepress-c/', /* 基础虚拟路径 */
    dest: 'docs/dist', /* 打包文件基础路径, 在命令所在目录下 */
    title: '个人博客存档', // 标题
    description: '主要用于存档个人博客👍https://chihokyo.com', // 标题下的描述
    
    themeConfig: { // 主题配置
      logo: '/logo.png',
      nav: [ // 头部导航
        { text: '博客主页', link: 'https://chihokyo.com' },
        { 
          text: '学习路线', 
          items: [
            { text: '1', link: 'https://chihokyo.com' },
            { text: '2', link: 'https://chihokyo.com' },
            { text: '3', link: 'https://chihokyo.com' }
          ] 
        },
      ],
      sidebar: [ // 左侧导航
        {
          title: '2021年3月', // 标题
          collapsable: false, // 下级列表不可折叠
          children: [ // 下级列表
            'chapter1/01_Start.md',
            'chapter1/02_Start.md',
            'chapter1/03_Start.md',
          ]
        },
      ],
    },
  
    head: [ // 指定网页head图标
      ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico` }]
    ]
  }