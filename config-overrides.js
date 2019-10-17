const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy } = require('customize-cra');

module.exports = override(
    // antd组件按需引用
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    // antd组件全局less控制
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    }),
    // 支持@装饰器
    addDecoratorsLegacy()
)