const Koa = require('koa'),
  Router = require('koa-router');

const app = new Koa(),
  router = new Router;

// 首页 —— 广告（超值特惠）
const homeAdData = require('./home/ad.js')
router.get('/api/homead',(ctx, next) => {
    ctx.body = homeAdData;
});

// 首页 —— 推荐列表（猜你喜欢）
const homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page', (ctx, next) => {
    // 参数
    const params = this.params;
    const paramsCity = params.city;
    const paramsPage = params.page;

    console.log('当前城市：' + paramsCity);
    console.log('当前页数：' + paramsPage);

    ctx.body = homeListData;
});


// 开始服务并生成路由
app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);
console.log('app running on port 3000');