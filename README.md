### 本项目需要结合migu-api一起使用
[migu-api传送门](https://github.com/bigzjk/miguMusic-api/)
```
   下载咪咕api
   $ git clone https://github.com/bigzjk/miguMusic-api.git
```
### 启动步骤
```js
1. 运行migu-api,启动server服务，拿到接口数据
    cd miguMusic-api
    $ yarn 
    $ yarn run nodedev
2. 运行当前项目
    cd MMusic
    $ yarn
    $ yarn run dev
    
```
### 项目介绍

![首页](https://imgsa.baidu.com/forum/w%3D580/sign=486080e9accc7cd9fa2d34d109002104/287ad9af2edda3cc981623240ee93901203f9295.jpg)![歌单详情列表](https://imgsa.baidu.com/forum/w%3D580/sign=f14847643a2ac65c6705667bcbf3b21d/59bf4f87e950352a0d93be0c5c43fbf2b3118b95.jpg)![搜索](https://imgsa.baidu.com/forum/w%3D580/sign=59fb025ad2c451daf6f60ce386fd52a5/6db86ed5ad6eddc413f42eff36dbb6fd5266336b.jpg)

```js
├── dist
├── node_modules
├── public
│   └── index.html
├── src
│   ├── assets
│   ├── components
│   └── pages
│       ├── home
│       └── main
│       └── index.jsx
│       └── common.scss
│   └── utils
│       └── connect.ts
│       └── request.ts
├── package.json
├── webpack.config.dev.js
├── webpack.config.prod.js
 
手动搭建的webpack.config配置，坑多慢慢改🤣

使用了react的class组件和hooks组件
    
用到的技术大概有
webpack4
typescript
react16+
react-router
redux
react-redux
antd-mobile

```

### 目的
练习hooks和ts
