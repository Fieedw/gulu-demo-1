module.exports = {
    base: '/gulu-demo-1/',
    title: '轱辘UI',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'}],
        sidebar: [
            {
                title: '入门',
                children: ['/install/', '/get-started/']
            },

            {
                title: '组件',
                children: ['/components/layout','/components/button','/components/grid','/components/input','/components/popover','/components/tabs','/components/toast']
            }
        ]
    }
}