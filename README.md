## ai report SSR

* 技术栈： ES6/ES7 、可以使用css modules 、scss并使用PossCSS

* 开发环境： client 使用 webpackDevServer 进行本地开发、支持热加载、使用babel转换代码、代码检测使用standard

* SSR 支持热加载

* 生产环境：使用DLLPlugin 优化编译速度

- front： react redux react-router-v4 axios immutable saga/thunk d3/echarts webpack standard
- end：  koa2 mysql pm2 log4js  bluebird 

可以client开发

也可以server启动以SSR开发

一键部署

```bash
npm i -pm2 -g
npm i 
npm start
```
推荐yarn

```
yarn client 本地开发client
yarn server 同构开发
yarn build 部署生产文件
yarn start 一键部署
```




@boqiao