# load_component
动态加载组件方式（主用于低代码场景）


#### 结论

对比上面三个方案，方案一实现起来最简单，但是没有真正实现按需加载，随着项目规模和需要满足的业务场景的扩大，组件的公共依赖会越来越多。

方案二 、方案三 都能实现真正的按需加载，其中 require.js 虽然听上去已经是上个世纪的东西了，但是兼容性和坑相对比较少。说到 ESModule， 虽然有兼容性和上面提到的一些格式转化的问题，但随着近些年 Vite 、Snowpack 的发展，在未来 ESModule 一定是大势所趋，目前笔者也正在将负责的我司内部大屏低代码平台改造为 ESModule 方式加载。