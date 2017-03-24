# vue-seed

> 基于 vue2, vue-router, vuex, axios及 豆瓣 API 和 Element UI 框架 的项目 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Demo

![demo](https://j.gifs.com/g592g3.gif)

## 项目结构
```javascript
├── App.vue
├── api
│   ├── base.js
│   └── movie.js
├── assets
│   └── logo.png
├── components
├── main.js
├── router
│   └── index.js
├── store
│   ├── index.js
│   └── movies
│       ├── module.js
│       └── type.js
└── views
    ├── Home.vue
    ├── NavMenu.vue
    └── movie
        ├── ComingList.vue
        ├── HotList.vue
        └── MovieDetail.vue

```
## 豆瓣API
电影 API:
* `/v2/movie/search?q={text}` 电影搜索api；(暂未实现)
* `/v2/movie/in_theaters` 正在上映的电影；
* `/v2/movie/coming_soon` 即将上映的电影；
* `/v2/movie/subject/:id` 单个电影条目信息。

>更多关于豆瓣的api可以前往[豆瓣api官网](https://developers.douban.com/wiki/?title=guide)查看。

豆瓣 API 跨域配置:
在`/config/index.js`中配置代理：
```javascript
dev: {
  env: require('./dev.env'),
  port: 8880,
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  proxyTable: {
    '/api': {
      target: 'http://api.douban.com/v2',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  }
}
```
在`proxyTable`这个属性中，配置target属性为我们要代理的目标地址。设置为`http://api.douban.com/v2`，这样我们就可以在应用中调用`/api/movie/in_theaters`来访问`http://api.douban.com/v2/movie/in_theaters`，从而解决跨域的问题。
>关于vue-cli更多关于跨域的设置可以看[官网文档](http://vuejs-templates.github.io/webpack/)

## RoadMap
* 实现搜索 API
* 添加 ajax loading
* 添加分页或滚动更新
