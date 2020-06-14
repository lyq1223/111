// 通常会给想缓存的空间起个名字
const CACHE_NAME = 'sw-' + 0; //会有很多个缓存，0是代表版本号，强调应用会有一个迭代的过程，迭代的时候会有版本的更新，serviceWorker也想和应用用同一个版本号
self.addEventListener('install', (event) => { //service的生命周期，会有一个install事件，注册完了就开始安装
    // 当监听到安装，就可以干活了 self是全局变量，相当于window(是js中的一个全局变量)，然后service-worker是背后的线程，就不能叫window了，所以是self
    // 事件发生的时候有一个事件对象event
    // 安装完成后你去到激活
    // 通常一个service-worker安装完了就回去下一个阶段，加了这个就会先等着，等放的事情完成了采取下一步
    // service-worker是比较新的，都支持Promise
    // 等着把要把缓存的都缓存好，才进去下一层
    // 缓存用一个api,cacheStorage，要缓存就要打开cache storage的空间
    // 1.打开（通过名字打开） 可能失败，可能成功
    // 一监听到安装完成就到下一个激活状态activited
    // 先看一下资源有没有加进去 live-server启动，打开页面观察一下service-worker 看有没有激活 小绿点，看加进去的资源子在不在cache storage
    let cacheComplete = caches.open(CACHE_NAME).then(cache => {
        // 打开了，就有空间了，是空的，把内容加进来
        return cache.addAll([
            // 加什么跟要缓存什么有关,填网络的url也行，一定要记得还要加一个当前的根目录，网站后面的根路径，这是容易被忽略的
            // 等会使用live-server打开，打开的路径是http://localhost:8080/ 后面都是有一个根路径的
            // 打开的是一个html就是整个html文件，先缓存的是html,在缓存要用到的图片
            // 根路径缓存的是什么？就是整个html文件
            './', 
            './sw-lifecycle.png',
            'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2473690265,2444464417&fm=26&gp=0.jpg'
        ])
    })
    // 等我缓存好，等我缓存好了才进入下一个阶段
    event.waitUntil(cacheComplete) //要接受的就是一个Promise
})
// 安装成功就会来这个激活阶段，
self.addEventListener('activate',() => {})
// service-worker 是个线程会监听浏览器发出的请求
// service-worker提供的就是这些流程
// 判断，如果在我们缓存的空间中，就直接取出缓存空间中的内容返回，不在的话 service-worker帮浏览器发出这个请求，让浏览器发出请求
// 请求完之后再放到缓存中，供下次使用
// 相当于有了service-worker流程就变了 browser-》service-worker-》后端
// service-worker相当于一个代理
self.addEventListener('fetch', (event) => {
    // 监听到浏览器的请求
    // 用什么返回，看缓存中有没有，有就用，没有就放行
    // 怎么判断 cache
    // 这些api都是Promise的
    // 记住Promise的返回值就是then回调里面的返回值
    // 不管是怎么去的数据，只关心当前这个请求该响应什么
    let thisReqRes = caches.match(event.request) //如果匹配上当前的请求了
    .then((response) => {
        if(response) { //1. 缓存有的话就直接用，return出来
            //如果存在在缓存中，把缓存中的内容取出，
            return response
        } else {
            // 没有的话，service-worker帮浏览器发出这个请求
            // 用fetch请求 是个新的api
            // return的是一个Promise,还是then中的值
            return fetch(event.request)
            .then(res => {
                // 发出请求，拿到结果，放进缓存
                //操作cache去存，要放到缓存就要先打开
                return caches.open(CACHE_NAME).then(function(cache) {
                    // 拿到缓存了，放进去，加记录 加德士键值对 名字+内容
                    cache.put(event.request, res.clone());
                    //是以流的形式返回的（res)，用一次就没有了，所以要clone一下，不直接使用，别的地方要用
                    //2. 缓存没有就把请求完的结果return出来，return的时候还加了一个存的动作，存完再return
                    return res;
                })
            })
        }

    }) //这些api都是Promise
    // 最终的目的，对请求做出响应（不管是从哪里拿的数据，我关心的只是返回的数据）
    event.respondWith(thisReqRes)
    // 试试断网能不能用
})