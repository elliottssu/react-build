<h2 align="center">
 React框架技术使用指南
</h2>
<p align="center">
React+Mobx框架搭建的后台管理系统，以及对应新手需要掌握的技能介绍
</p>

[![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react) [![CircleCI Status](https://circleci.com/gh/facebook/react.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/facebook/react) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

### 一、前置知识点
1. 《React中文文档》[https://react.docschina.org](https://react.docschina.org/docs/hello-world.html)
2. 《React.js 小书》[http://huziketang.mangojuice.top/books/react/](http://huziketang.mangojuice.top/books/react/) 
3. 《Mobx使用方法》[https://www.jianshu.com/p/7c07a5a26726](https://www.jianshu.com/p/7c07a5a26726)
4. 《Ant Design组件》[https://ant.design](https://ant.design/components/button-cn/)


### 二、使用到的技术及组件
1. [React：中文文档](https://react.docschina.org/docs/hello-world.html)
2. [脚手架：Create React App](https://create-react-app.dev/docs/getting-started/)
3. [数据状态管理：Mobx](https://www.jianshu.com/p/7c07a5a26726) 
4. [路由：react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)
5. [HTTP请求：axios](http://www.axios-js.com/docs/)
6. [图表：Echarts](https://www.echartsjs.com/examples/zh/index.html)
7. [Ant Design组件之响应式布局](https://ant.design/components/grid-cn/)
8. [Ant Design组件之字体图标](https://ant.design/components/icon-cn/)
9. [Ant Design组件之50多种内置组件](https://ant.design/components/button-cn/)
10. [额外的第三方精选组件](https://ant.design/docs/react/recommendation-cn)

 ![image.png](https://upload-images.jianshu.io/upload_images/3502567-006aa675fbcc031a.png)

### 三、项目启动

本地开发环境运行会在浏览器打开`http://localhost:3000`，线上生产环境运行会压缩代码并输出到build目录。

1. 安装包
```sh
npm install
```

2. 本地开发环境运行
```sh
npm start
```

3. 线上生产环境运行
```sh
npm run build
```

### 四、目录结构

主要的代码在`src`目录下，包括mobx数据定义、公共工具方法类、公共组件和业务组件以及各个路由对应的页面，接下来我会在下面详细讲解各部分功能及作用。

```
react-build
├── README.md
├── node_modules
├── config-overrides.js        //  扩展的Webpack配置
├── package-lock.json
├── package.json
├── .gitignore
├── public                     //  index.html首页相关信息
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── _stores                //  mobx数据定义
    │   └── CommonStore.js
    ├── _utils                 //  公共工具方法类
    │   └── Chart.js
    ├── components             //  公共组件和业务组件
    │   └── Fold
    ├── containers             //  各个路由对应的页面
    │   ├── Analysis
    │   ├── Home
    │   ├── Login
    │   ├── Main
    │   ├── Permission
    │   ├── App.js
    │   └── App.less
    ├── images
    ├── less
    ├── dataProxy.js           //  http拦截器
    ├── index.js
    ├── routes.js              //  一级路由配置
    └── setupProxy.js          //  服务的代理配置
```

### 五、技术及组件说明
