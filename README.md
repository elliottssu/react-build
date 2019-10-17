<h2 align="center">
 React框架技术使用指南
</h2>
<p align="center">
React+Mobx框架搭建的后台管理系统，以及对应新手需要掌握的技能介绍
</p>

[![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

![](https://upload-images.jianshu.io/upload_images/3502567-3ce61620e876251f.png)

### 一、前置知识点
1. 《React中文文档》[https://react.docschina.org](https://react.docschina.org/docs/hello-world.html)
2. 《React菜鸟教程》[https://www.runoob.com/react/react-tutorial.html](https://www.runoob.com/react/react-tutorial.html) 
3. 《React.js 小书》[http://huziketang.mangojuice.top/books/react/](http://huziketang.mangojuice.top/books/react/) 
4. 《Mobx使用方法》[https://www.jianshu.com/p/7c07a5a26726](https://www.jianshu.com/p/7c07a5a26726)
5. 《Ant Design组件》[https://ant.design](https://ant.design/components/button-cn/)


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
11. [书写less样式](http://lesscss.cn/)

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

#### 1. React

React是由Facebook出的UI框架，但因为其具有很高的性能且轻便，代码逻辑非常简单，搭配第三方组件能够快速构建起强大的前端系统架构。

React相比Angular的优点：

- 简单易上手，Angular是一个全面的框架，学习曲线非常高。
- 加载更快，Angular因为引入的依赖太多，加载速度会慢一点。
- 组件灵活，react很多组件是社区第三方贡献，而Angular除了业务组件外，其他很多都内置官方库如路由、动画等等。

推荐学习路线：

- 《React菜鸟教程》是一个面向新手非常友好的教程，看完基本可以上手了，不建议看官方文档，官方文档中文读起来生涩，不好懂。
- 《React.js 小书》是一个进阶的教程，这个是从原理的角度解析React原理。

#### 2. 脚手架：Create React App

Create React App是使用最为广泛的脚手架，通过它的命令，能够快速生成一个包含webpack的前端自动化工具、单元测试、eslint等前端架构都有的代码。而不用自己费劲心思的去构建，如果业务上需要自定义的构建配置，在`config-overrides.js`中可以拓展修改，比如支持babel的装饰器等等。说明一点是，这个脚手架只是一个空架子，后面针对业务的组件以及模块需要自己去整理，这一点对后期代码维护和开发比较重要，这个在上面的层级结构有体现。


#### 3. 数据状态管理：Mobx

react对数据的改变官方使用方法有state和props，但是当页面非常多且需要跨页面传值，用起来非常麻烦。Mobx就是为了解决数据存值问题，通过定义观察者模式observable, observer 和 action来控制数据流。这个使用方法可以最上面的链接，同时本项目中`src/_stores/CommonStore.js`，也有demo去定义和使用数据。

#### 4. 路由：react-router-dom

react-router-dom 是html historyAPI提供的一套路由机制，如果你想在html中使用跳转`<Link to="/home" />`，如果你想在方法内使用跳转`this.props.history.push('home')`，基本上路由跳转上面两就满足了。还有就是注册路由，这里分为一级路由和子路由，这个在项目中有体现。

#### 5. HTTP请求：axios

常用的发请求的方式，有使用问题的可以看文档，比较简单。这里主要注意两个点：

- `scr/dataProxy.js` 在这里面可以全局拦截，比如未登陆接口返回403，那么，这里可以获取状态码，从而实现跳转。
- `scr/setupProxy.js` 在这里面可以做后台代理，比如请求接口`/api/login`，这里配置一下匹配规`/api`和后台地址`http://localhost:5000`即可实现，所有接口 都走该代理。

#### 6. 图表：Echarts

画图的，这个配置看官方文档就OK。

#### 7. Ant Design组件之响应式布局

这里的Ant Design响应式布局和Bootstrap的栅格布局极为相似，可以代替Bootstrap。使用方法看看文档就OK。

#### 8. Ant Design组件之字体图标

这里的Ant Design内置的字体库，一般也够用，不够用的话可以使用阿里的iconfont字体图标库。

#### 9. Ant Design组件之50多种内置组件

Ant Design内置组件基本涵盖能够想到的大部分组件，如果发现有类似的场景可以直接用。

#### 10. 额外的第三方精选组件

第三方组件也有，尽量不自己造轮子，百度或者谷歌，npm上搜索，应该会有。

#### 11. 书写less样式

本项目中使用的预处理器less来代替css，这个用的比较多的就是变量和嵌套，可以看看官方文档了解一下。

### 六、Q & A

#### 1. 开始本框架前需要哪些前置知识？

- 对js和css语法有基本的了解。
- 对开头推荐的《React菜鸟教程》《Mobx使用方法》《Ant Design组件》有基本的阅读和了解。

#### 2. 如何实现响应式布局？

可以使用Ant Design响应式布局，通过`<Col>`的断点配置，来实现不同终端的现实，当然如果不喜欢用的话，可以安装bootstrap。

#### 3. 对于接下来开发，主要注意什么？

- 需要了解mobx数据流管理流程，这个跨页面传递参数必备的。
- 深刻贯彻React组件化思想，万物皆组件，就是能独立的模块全部独立。
- 了解react写法，这个和之前的写法不一致，看文档熟悉掌握。
- 注意组件和页面的区别，对应的代码放到对应的文件夹中。

#### 4. 遇到困难？

本项目涉及到的技术点均已罗列出来，如果遇到问题可以Google 技术点+问题查找结局方案，或者找我协助解决。

### 七、结束

上面就是React框架技术使用指南，可以配合这个项目了解掌握，有任何问题可随时联系我。