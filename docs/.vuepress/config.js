module.exports = {
    title: 'acf-docs V20210426.10.13',
    description: '',
    base: '/acf-docs/',
    port: '4000',
    sorter: true,
    themeConfig: {
        nav: [
            { text: 'คู่มือผู้ใช้งาน', link: '/user/login' },
            { text: 'ดาวน์โหลด', link: '/download/' },
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
                    '/user/Admin',
                    '/user/User'
        
                ]
            },
            '/Q&A/',
            '/contact/',
            '/download/',
            {
                title: 'การติดตั้งเครื่องอ่านบัตรประจำตัวประชาชนแบบ Smartcard',
                collapsable: true,
                children: [
                    '/smartcard/install',
                    '/smartcard/troubleshooting'
                ]
            },
            '/request_permission/',
        ]
    }
}