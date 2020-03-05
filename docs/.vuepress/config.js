module.exports = {
    title: 'Blog',
    base: '/blog/',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        nav: [
            { text: 'HTML', link: '/html/' },
            { text: 'CSS', link: '/css/' },
            { text: 'JavaScript', link: '/js/' },
            { text: '网络', link: '/network/' },
            { text: 'ES6', link: '/ES6/' },
            { text: 'jQuery', link: '/jQuery/' },
            { text: '工具', link: '/tools/' },
            { text: 'React', link: '/React/' },
            { text: '面试题', link: '/interview/' }
        ],
        sidebar: 'auto'
    }
}