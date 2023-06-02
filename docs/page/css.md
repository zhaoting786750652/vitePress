# css相关

## BFC
块格式化上下文，是一个独立的渲染区域，简单来说就是一个独立的盒子，并且这个盒子里的布局不受外部影响，也不会影响到外部元素。
在正常的文档流中，块级元素是按照从上自下，内联元素从左到右的顺序排列的。
### BFC 的作用
1.使 BFC 内部的浮动元素不会到处乱跑，如果我给里面的元素一个 float 或者绝对定位，它就会脱离普通文档流中。此时如果我们还想让外层元素包裹住内层元素，让外层元素产生一个 BFC

2.解决margin塌陷问题:也就是解决，在一个标准流body（body元素就是一个BFC）中相邻盒子之间垂直margin重叠的问题。
方法：触发其中一个盒子的BFC，成为一个独立的容器，根据BFC规则，这个盒子的布局不受外部元素影响。

3.解决高度塌陷问题
当一个标准流中的盒子中所有的子元素都进行了浮动，并且没有给盒子设置高度时，那么这个盒子的整个高度就会塌陷，浮动的子元素高度不计算在父元素内，父元素高度就为0。
方法：触发这个盒子生成BFC，根据规则计算BFC的高度时，浮动元素也参与计算。
例如：1设置父元素浮动; 2使用clearfix; 3在浮动元素后加个div设置clear: both; height:0,overflow:hidden
 
## Less和scss
共同：层级嵌套，变量定义，数据运算，&代表父级

scss特有：@function, @extend 继承其他class ，@mixin 公共class, @include引入公共class

## display:grid网格布局
flex布局是一维的，grid可以理解成是二维布局
```css
display: grid;
grid-template-columns: 1fr 3fr 1fr --- 列宽1:3:1的格子
grid-template-columns: repeat(3,100px) ----3个100px的格子
grid-template-rows：1fr 2fr 3fr -----行高1:2:3的格子
grid-gap: 20px---- 格子间距20px
```
```css
grid-column: 1 / span 3 ----- 从第一个列开始，合并3个单元格
// 等价于
grid-column-start: 1   列从第一个开始  
grid-column-end: 4    列到第四个结束（不包含））
```
```css
grid-row: 1 / span 3   ----- 从第一行格子开始，合并3个单元格
// 等价于
grid-row-start: 1   行从第一个开始  
grid-row-end: 4    行到第四个结束（不包含））
```
```css
// grid居中
.parent {
    display: grid;
    place-items: center;
}
```

## flex
### 父元素样式
```css
flex-direction：row | row-reverse | column | column-reverse  //决定主轴的方向
flex-wrap：nowrap | wrap | wrap-reverse //决定容器内项目是否可换行
flex-flow：
justify-content：定义了项目在主轴的对齐方式
align-items：定义了项目在交叉轴上的对齐方式
align-content：flex-start | flex-end | center | space-between | space-around | stretch //定义了多根轴线的对齐方式
```
### flex子元素样式
```css
order：定义项目在容器中的排列顺序，数值越小，排列越靠前，默认值为 0
flex-basis：80px | auto 定义了在分配多余空间之前，项目占据的主轴空间，浏览器根据这个属性，计算主轴是否有多余空间，默认值为auto，即 项目原本大小；
flex-grow：定义项目的放大比例，默认为0，即 即使存在剩余空间，也不会放大，所有项目的flex-grow为1：等分剩余空间（自动放大占位）；flex-grow为n的项目，占据的空间（放大的比例）是flex-grow为1的n倍。
flex-shrink：定义了项目的缩小比例，默认为1，即 如果空间不足，该项目将缩小，所有项目的flex-shrink为1：当空间不足时，缩小的比例相同；flex-shrink为0：空间不足时，该项目不会缩小；flex-shrink为n的项目，空间不足时缩小的比例是flex-shrink为1的n倍。
align-self：auto | flex-start | flex-end | center | baseline | stretch
允许单个项目有与其他项目不一样的对齐方式
flex属性是 flex-grow, flex-shrink 和 flex-basis 的缩写
flex:1 即为flex-grow:1; flex-shrink:1;flex-basis:0%，等分空间
```

### 两列固定中间自适应
```css
1.#main{
  display: flex;/*设为伸缩容器*/
}

#left { 
  width:200px;/*左侧固定宽度*/
  height:400px; 
  background:aqua;
}
#center {
  flex-grow:1; /*填满剩余空间*/ 
  height:400px;  
  background:green;}
#right { 
  width:200px;/*固定右侧宽度*/
  height:400px;  
  background:blue;
}
2.#main {
  width: 100%;height: 400px;
}
#left { 
  width:200px;/*左侧固定宽度
float: left; /*设置容器左浮动*/
}
#center{
  width: 100%;
  margin: 0 200px;/*设置容器左右外边距*/ 
}
#right{ 
  width:200px;/*固定右侧宽度*/
  height:400px;  
  float: right;/*设置容器右浮动*/
  background:blue;
}
3.#main{
  width: 100%;
  height: 400px;
  position: relative;/*父容器使用相对定位*/
}
#left{ 
  width:200px;/*左侧固定宽度*/
  height:400px;
  position: absolute;/*左侧使用固定定位*/
  left: 0;/*定位在容器最左边*/
  top: 0;
}
#center{
  width:100%;
  margin: 0 200px;/*设置中间容器左右外边距*/
}
#right{ 
  width:200px;/*固定右侧宽度*/
  height:400px;
  position: absolute;/*右侧使用固定定位*/
  right: 0;/*定位在容器最右边*/
  top: 0;
}
```
## css3动画属性
```css

@keyframes 规定动画
animation：animation-name //动画名字
animation-duration  //动画完成一个周期所花时间
animation-direction //规定动画是否在下一周期逆向地播放
```

## 基本上浏览器默认的设置都是16px

## @import, link
@import 是 CSS 提供的语法规则，只有导入样式表的作用

link 是 HTML 提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性、引入网站图标等
  ```css
  <link rel="icon" href="<%= BASE_URL %>favicon.ico">
  ```
BASE_URL是webpack中插件DefinePlugin中定义的全局变量，表示项目根目录
 
## script标签js放在body前原因
script会阻塞dom加载。也可以放在前面，用async和defer解决，他两可以使dom和js加载并行进行（异步）。

区别：async加载完立马执行，多个js执行顺序哪个先加载完哪个就先执行。

defer加载完等dom全部解析完才执行，（DOMContentLoaded 事件触发之前完成，当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的加载完成。Load 事件是当所有资源加载完成后触发的）
多个js执行顺序与定义顺序有关。
 

## 绘制三角形
  ```css
    div {
        width: 0;
        height: 0;
        border: 40px solid;
        border-color: transparent transparent red;
    }
  ```
