# About
这是慕课网上[Vue+Webpack打造todo应用](https://www.imooc.com/learn/935)课程的源码

# 使用方法
```
git clone https://github.com/Jokcy/vue-todo-tech.git
```
进入项目目录，运行
```
npm install
```
然后执行
```
npm run dev
```
开始开发项目
- 1. css打包:
  - 1.1 css样式的来源:
    外联css文件,vue文件内的css,组件内的style行内样式
  - 1.2 css变更之后,css热重载配置
    vue-style-loader: fallback: 'vue-style-loader'
- 2. 将打包目标文件dist先删除后生成新的dist文件的配置
  - 2.1 在packge.json文件中配置:
        1) "build:client": "cross-env NODE_ENV=production webpack --config build/webpack.config.client.js",
  - 2.2 2) "clean": "rimraf dist",
  - 2.3 3) "build": "npm run build && npm run build:clean",
- 3. vue-loader.config.js文件中可以自定义loader
- 4. loader加载器
    - 4.1 style --> style-loader(vue-style-loader)
    - 4.2 js文件 --> babel-loaders
    - 4.3 css文件 --> css-loaders
    - 4.4 template --> HTML...
- 5. vue.esm.js可以编译template模板,而vue.runtime.common.js不可以
