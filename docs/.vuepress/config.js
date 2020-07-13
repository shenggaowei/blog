module.exports = {
    title: '大芒果',
    description: '大芒的博客果',
    themeConfig: {
      displayAllHeaders: true,
      logo: '/assets/img/logo.jpeg',
      nav: [
        { text: '主页', link: '/' },
        { text: '前端', link: '/fronted/' },
        { text: '后端', link: '/backend/' },
        {
            text: '计算机',
            ariaLabel: 'Language Menu',
            items: [
              { text: '计算机组成原理', link: '/language/chinese/' },
              { text: '操作系统', link: '/language/japanese/' }
            ]
        }
      ],
      sidebar: {
        '/backend/': [
          {
            title: 'node',
            children: [
              '/backend/node/nvm',
            ]
          },
        ],
        '/fronted/': [
          {
            title: 'javascript',
            children: [
              '/fronted/js/函数式编程',
              '/fronted/js/如何发布npm包',
            ]
          },
          {
            title: 'css',
            children: [
              '/fronted/css/两栏布局',
              '/fronted/css/居中方案'
            ]
          },
        ]
      },
      sidebarDepth: 0
    }
  }