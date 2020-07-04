module.exports = {
    title: '大芒果',
    description: '大芒果的博客',
    themeConfig: {
      displayAllHeaders: true,
      logo: '/assets/img/logo.jpeg',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'External', link: 'https://google.com' },
        {
            text: 'Languages',
            ariaLabel: 'Language Menu',
            items: [
              { text: 'Chinese', link: '/language/chinese/' },
              { text: 'Japanese', link: '/language/japanese/' }
            ]
          }
      ],
      sidebar: [
        {
            title: 'Group 1',   // 必要的
            path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
              '/',
            ]
          },
      ]
    }
  }