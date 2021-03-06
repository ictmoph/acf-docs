module.exports = {
    title: 'acf-docs V20210518.16.00',
    description: '',
    base: '/acf-docs/',
    port: '4000',
    sorter: true,
    themeConfig: {
        nav: [
            { text: 'คู่มือผู้ใช้งาน', link: '/user/login' },
            
            // { text: 'foo', link: '/foo/one' },
            // { text: 'bar', link: '/bar/one' },
        ],
        sidebar: [
            {
                title: 'คู่มือผู้ใช้งาน',
                collapsable: true,
                children: [
                    '/user/login',
                    '/user/pre-register',
                    '/user/user1',
                    '/user/admin'
        
                ]
            },
            '/contact/',
            
            {
                title: 'การติดตั้งเครื่องอ่านบัตรประจำตัวประชาชนแบบ Smartcard',
                collapsable: true,
                children: [
                    '/smartcard/install',
                    '/smartcard/troubleshooting'
                ]
            },
            '/setprintsticker/',
        ]
    }
}