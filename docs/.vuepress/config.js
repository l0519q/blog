module.exports = {
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'Blog',
            description: '前端学习笔记'
        }
    },
    base: '/blog/',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        nav: [
            { text: 'HTML', link: '/html/' },
            { text: 'CSS', link: '/css/' },
            {
                text: 'JavaScript',
                ariaLabel: 'JavaScript Menu',
                items: [
                    { text: 'JavaScript', link: '/js/' },
                    { text: 'ES6', link: '/ES6/' }
                ]
            },
            { text: '网络', link: '/network/' },
            { text: 'jQuery', link: '/jQuery/' },
            { text: '工具', link: '/tools/' },
            { text: 'React', link: '/React/' },
            // { text: '面试题', link: '/interview/' }
            {
                text: '面试题',
                items: [
                    { text: '基础', link: '/interview/basics/' },
                    // { text: '进阶', link: '/interview/promotion/' }
                ]
            }
        ],
        sidebar: 'auto',
        lastUpdated: '上次更新时间',
        smoothScroll: true
    },
    plugins: ['@vuepress/back-to-top']
}