# 页码渲染组件

## 使用

从npm安装`ct-adc`
```
npm install ct-adc
```
在代码中引用
```
import adc from 'ct-adc';
Vue.use(adc)
```
或
```
import adc from 'ct-adc';
import {Page} from 'ct-adc'
Vue.component(Page.name,Page);
```
## 参数说明

参数|描述|类型|默认值
--- | --- | --- | --- |
currPage | 当前页 | Number | 1
pageLen | 每页数量 | Number | 10
totalNum | 记录总数 | Number | 10000
form | 是否显示跳转 | Boolean | false
spage | 页面几页后省略 | Number | 5
topPage | 省略号前显示页数 | Number | 1
afterPage | 省略号后显示页数 | Number | 1
