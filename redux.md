# Redux 使用分享

[toc]

### 1.1 React 组件传值的方式
- 父子组件传值使用 props + callback
- 兄弟组件使用父组件传递状态
- 路由组件可以使用路由参数
- 事件的发布订阅
- 跨多层级组件使用Context(react-redux库的基础)
- redux

### 1.2 Redux 的核心概念
- store： 单一状态树（对象）
- dispatch： 修改状态的方法（参数为action）
- action： 修改状态携带的参数（对象，有type和payload两个key）
- reducer： 根据action返回新的状态的方法（参数为旧状态和action）

### 1.3 Redux 原则
- 单一数据源
- state是只读的，只能通过dispatch去修改，并返回一个新对象
- reducer必须是纯函数

### 1.4 keywords
- 纯函数
- 函数柯里化
- 闭包
- 订阅发布
- 中间件
- compose

### 1.5 相关包
- react-reudx

- redux-thunk
- redux-saga
- redux-promise

### 1.6 
- demo1 redux基础应用
- demo2 redux的combineReducer和applyMiddleware
- demo3 react-redux
- demo2.1 redux-thunk的应用
- demo4 react-redux原理
- demo5 useReducer



## y. 参考文档
- [图解 Flux](https://zhuanlan.zhihu.com/p/20263396)
- [Redux设计思想与使用场景](https://segmentfault.com/a/1190000015367584)
- [为什么redux要返回一个新的state引发的血案](https://juejin.im/post/5c1b6925e51d455ac91d6bac)
- [Redux源码分析(3) - applyMiddleware](https://juejin.im/post/5ea0165ef265da47b177ac6f)
