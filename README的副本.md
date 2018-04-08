## ct-adc-page

页码bar

## 组件示例图

![img]()

## 在线demo

[在线demo](https://codepen.io/rubyisapm/pen/xdQzbe?editors=1010)

## 功能点

1. 可定制为简易版或表单版

## 使用

从npm安装ct-adc-page

```
npm install ct-adc-page --save
```
在代码中使用

```
import Page from 'ct-adc-page'
Vue.component(Page.name,Page);

或

new Vue({
    el: '#app',
    components: {
        Page
    }
})
```

## props

参数 | 说明 | 类型 | 默认值 | 可选值 | 描述 |
--- | --- | --- | --- | ---- | ---
currPage | 当前页 | Number | 1 | | 当前页
pageLen | 每页数量 | Number | 10 |  | 每页数量
totalNum | 记录总数 | Number | 10000 |  | 记录总数
form | 是否显示跳转 | Boolean | false | | 是否显示跳转
spage | 页面几页后省略 | Number | 5 |  | 页面几页后省略
topPage | 省略号前显示页数 | Number | 1 |  | 省略号前显示页数
afterPage | 省略号后显示页数 | Number | 1 | | 省略号后显示页数


## 方法

### setPage

翻页

#### 参数列表

参数 | 说明 | 类型 | 默认值 | 可选值 | 描述 |
--- | --- | --- | --- | ---- | ----
page | 目标页码 | Number | 无 | 正整数 | 要翻到哪一页

返回值

undefined

## 事件

### change-page

事件名称 | 说明 | 回调参数 | 描述
change-page | 当前页改变 | page | 当前页发生变化时，发生该事件

## 更新日志

[更新日志]()

## 外部资源依赖列表

无

