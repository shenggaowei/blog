module.exports = [
  '@vuepress/back-to-top',
  '@vuepress/medium-zoom',
  '@vuepress/nprogress',
  'reading-progress',
  [
    '@vuepress/blog',
    {
      comment: {
        service: 'vssue',
        owner: 'shenggaogao',
        repo: 'blog',
        clientId: '1b4d138c1587ac0bc41d',
        clientSecret: '4fd806e27db852913534fe03b83cd58644ecd609',
      },
    },
  ],
];
