# 面试题

## 一、HTML

### 1. 基于搜索引擎做项目的话 需要注意哪些问题

* 合理的 title、description、keywords：搜索对这三项的权重逐个减小，title 值强调重点即可，重要关键词出现不要超过 2 次，而且要靠前，不同页面 title 要有所不同；description 把页面内容高度概括，长度合适，不可过分堆砌关键词，不同页面 description 有所不同；keywords 列举出重要关键词即可
* 语义化的 HTML 代码，符合 W3C 规范：语义化代码让搜索引擎容易理解网页
* 重要内容 HTML 代码放在最前：搜索引擎抓取 HTML 顺序是从上到下，有的搜索引擎对抓取长度有限制，保证重要内容一定会被抓取
* 重要内容不要用 JavaScript 输出：爬虫不会执行 JavaScript 获取内容
* 少用 iframe：搜索引擎不会抓取 iframe 中的内容
* 非装饰图片必须加 alt
* 提高网站速度：网站速度是搜索引擎排序的一个重要指标
* a 标签使用 title 属性 在不影响页面功能的情况下，可以尽量给 a 标签加上 title 属性，可以更有利于蜘蛛抓取信息
* 集中网站权重 由于蜘蛛分配到每个页面的权重是一定的，这些权重也将平均分配到每个 a 链接上，那么为了集中网站权重，可以使用 "rel=nofollow" 属性，它告诉蜘蛛无需抓取目标页，可以将权重分给其他的链接



### 2. html 标签的语义化理解

* 去掉或者丢失样式的时候能够让页面呈现出清晰的结构
* 有利于 SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重
* 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页
* 便于团队开发和维护，语义化更具可读性，是下一步网页的重要动向，遵循 W3C 标准的团队都遵循这个标准，可以减少差异化



### 3. 介绍一下你对浏览器内核的理解

主要分成两部分：渲染引擎（layout engineer 或 Rendering Engine）和 JS 引擎

1. 渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入 CSS 等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核
2. JS 引擎：解析和执行 JavaScript 来实现网页的动态效果。最开始渲染引擎和 JS 引擎并没有区分的很明确，后来 JS 引擎越来越独立，内核就倾向于只指渲染引擎



### 4. 请描述一下 Cookie、sessionStorage 和 localStorage 的区别

Cookie 是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。Cookie 数据始终在同源的 http 请求中携带（即使不需要），即会在浏览器和服务器间来回传递。sessionStorage 和 localStorage 不会自动把数据发给服务器，仅在本地保存。

**存储大小：**

​		Cookie 数据大小不能超过 4k。

​		sessionStorage 和 localStorage 虽然也有存储大小的限制，但比 cookie 大得多，可以达到 5M 或更大。

**有效时间：**

​		localStorage 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；

​		sessionStorage 数据在当前浏览器窗口关闭后自动删除；

​		Cookie 设置的 cookie 过期时间之前一直有效，即使窗口或浏览器关闭

**作用域区别：**

sessionStorage 不在不同的浏览器窗口中共享，即使是同一个页面

localStorage 和 cookie 在所有同源窗口是共享的



### 5. iframe 有哪些缺点？

* iframe 会阻塞主页面的 onload 事件
* 搜索引擎的检索程序无法解读这种页面，不利于 SEO
* iframe 和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。使用 iframe 之前需要考虑这两个缺点。如果需要使用 iframe，最好是通过 JavaScript 动态给 iframe 添加 src 属性值，这样可以绕开以上两个问题

​		

### 6. HTML 和 XHTML 有什么区别？

1. 是功能上的差别

   主要是 XHTML 可兼容各大浏览器、手机以及 PAD，并且浏览器也能快速正确地编译网页

2. 是书写习惯的差别

   XHTML 元素必须被正确地嵌套，闭合，区分大小写，文档必须拥有根元素

   

### 7. DOCTYPE 作用？严格模式与混杂模式如何区分？它们有何意义？

- 声明位于 HTML 文档中的第一行，处于 html 标签之前。告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE 不存在或格式不正确会导致文档以兼容模式呈现。
- 标准模式的排版和 JS 运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示，模拟老式浏览器的行为以防止站点无法工作。



### 8. 行内元素有哪些？块级元素有哪些？空(void)元素有哪些？行内元素和块级元素有什么区别？

行内元素有：a  b  span  img  input  select  strong

块级元素有：div  ul  ol  li  dl  dd  h1~h6  p

空元素：\<br>  \<hr>  \<img>  \<input>  \<link>  \<meta>

行内元素不可以设置宽高，不独占一行

块级元素可以设置宽高，独占一行



### 9.  HTML 全局属性(global attribute) 有哪些

class：为元素设置类标识

data-*：为元素增加自定义属性

draggable：设置元素是否可拖拽

id：元素 id，文档内唯一

lang：元素内容的语言

style：行内 css 样式

title：元素相关的建议信息



### 10. WebSocket 如何兼容低浏览器？

Adobe Flash Socket、ActiveX HTMLFile(IE) 、基于 multipart 编码发送 XHR、基于长轮询的 XHR



### 11. 页面可见性（Page Visibility API）可以有哪些用途？

通过 visibilityState 的值检测页面当前是否可见，以及打开网页的时间等；在页面被切换到其他后台进程的时候，自动暂停音乐或视频的播放



### 12. HTML5 audio 标签在移动端和 pc 端有什么区别

移动端浏览器大部分是禁用 video 和 audio 的 autoplay 功能，并且很多移动浏览器也不支持首次 JavaScript 调用 play 方法进行播放



### 13. HTML 中的 meta 标签都有哪些

* HTML 文档的字符编码：\<meta charset="UTF-8">

* 网页信息描述：\<meta name="keywords" content="蝉壳学院，蝉壳，前端，前端开发"> Keywords 为页面关键字，即该网页的关键字有哪些。

  \<meta name="description" content="描述"> description 为页面描述，content 写入对该页面的信息描述

* 浏览器的渲染方式：\<meta name="renderer" content="webkit|ie-comp|ie-stand"> 渲染速度快；兼容模式兼容问题少，适合银行政府网站。标准模式则是 IE8



### 14. 基于 SEO 的话，一个页面里的 h1 标签应该控制在多少个

首页最佳的 h1 标题数是出现一次，基本上都用在文章的名称或者商品的名称上，出现 h1 标题的次数过多会被搜索引擎认为是作弊而被降权，严重了还会被删除。



## 二、CSS

### 1. 把一个元素设置 float 属性它会产生浮动，说说怎么去除浮动

**(1) 为什么要清除浮动？**  

浮动起来的元素不会脱离文字流，但是会脱离文档流

**不脱离文字流：** display 属性是 inline 和 inline-block 的元素还是可以看见的，文字本身是 inline 属性 

**脱离文档流：** 正常元素看不见它 类似 absolute 属性

内部改元素的样式 `display: inline-block;`

**(2) 不清除浮动效果：**

border 不能被撑开，背景不能显示，margin 设置值不能正确显示

**(3) 清除浮动的方法：**

- **底下添加新的元素，应用** `clear: both;`

  **原理：** 该属性的值指出了不允许有浮动对象的边情况，对象左边不允许有浮动、右边不允许有浮动、不允许有浮动对象

- **父级属性：** `overflow: hidden;`

  **原理：** overflow: hidden 属性相对于是让父级紧贴内容，这样即可紧贴其对象内内容，是因为 overflow 除了(visible) 会重新给它里面的元素建立块级格式化 floats，position: absolute，inline-block，table-cell 和 table-caption 都不是块级样式，所以才会用到 clear 来控制浮动 overflow 也可以清除浮动是因为当在父级元素设置 overflow 时，除了 visible，就是只有 auto，hidden 或者 scroll 时，也会建立新的块级格式给它的子元素，从而起到清除浮动效果

- **可以在外层套一个标签设置属性** `clear: both;`

- **添加一个 after**

  **原理：** 它就是在最后加了一个伪元素，这个元素不是浮动的，它是抗浮动的，所以能看到浮动元素来定位自己的位置，然后父级元素能看到这个伪元素，所以它只是按照这个伪元素的位置来改变自己的宽高。

  ```css
  xxx::after {
      content: '';
      clear: both;
      display: block;
  }
  ```



### 2. 说说触发 BFC 的几种方式？

- 设置除 float: none 以外的属性值（如：left | right）就会触发 BFC
- 设置除 overflow: visible 以外的属性值（如：hidden | auto | scroll）就会触发 BFC
- 设置 display 属性值为：inline-block | flex | inline-flex | table-cell | table-caption 就会触发 BFC
- 设置 position 属性值为：absolute | fixed 就会触发 BFC



### 3. 说说常见的将元素水平垂直居中的方法

- 知道元素宽高

  ```scss
  .wrapper {
      position: relative;
      .box {
          position: absolute;
          left: 50%;
          top: 50%;
          margin-left: -100px;
          margin-top: -100px;
          width: 200px;
          height: 200px;
  	}
  }
  ```

- 不知道宽高（IE8不支持）

  ```scss
  .wrapper {
      position: relative;
      .box {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
      }
  }
  ```

- flex 布局：在父级上

  ```css
  .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
  }
  ```

- 绝对定位水平垂直居中（IE7及之前版本不支持）

  ```scss
  .wrapper {
      position: relative;
      .box {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;   
          margin: auto;
      }
  }
  ```



### 4. 说一下 position 都有哪些，并详细说说它们之间的区别

- static	默认属性，元素默认定位是 static
- fixed    可视窗口定位，网页上应用的广告栏
- relative  相对定位，保留原来位置进行定位 参照元素自身 用于设置参照物
- absolute  绝对定位，脱离原来位置进行定位 相对于自身最近的父级进行定位
- sticky  是一个新的 CSS3 属性，它的表现类似 relative 和 fixed 的合体，在目标区域在屏幕中可见时，它的行为就像 relative，而当页面滚动超出目标区域时，它的表现就像 fixed，它会固定在目标位置。淘宝的侧边栏
- inherit  继承父级的定位

**注意：** position: absolute 和 float 会隐式的改变 display 类型，不论之前是什么类型的元素（display: none 除外），只要设置了 position: absolute 或 float，都会让元素以 display: inline-block 的方式显示，可以设置长宽，默认宽度并不占满父元素，就算是显示的设置 display: inline 或 display: inline-block，仍然无效。



### 5. 说一下css选择器的优先级

!important ---> 行间样式 ---> id ---> class | 属性 | 伪类 ---> 标签 | 伪元素 ---> 通配符



### 6. 关于伪元素你了解多少，请说出五个常用的伪元素，那么伪类呢？也请说出五个常用的伪类

**伪类：** 用于向某些选择器添加特殊的效果

**伪元素：** 用于设置某些元素的特殊效果

**区别：** 伪元素是相对于添加或设置元素，伪类相对于是在元素上添加效果，这俩都不实际存在于 dom 树中用来格式化文档流之外的东西。

伪类则是像真正的类一样发挥着类的作用，没有数量上的限制，只要不是相互排斥的伪类，也可以同时使用在相同的元素上。

**伪元素：** 

- ::first-line
- ::first-letter
- ::before
- ::after
- ::selection

**伪类**：

- :first-child
- :nth-child
- :first-of-type
- :nth-of-type
- :hover
- :active
- :focus
- :disabled
- :checked



### 7. 盒模型都有哪些？

首先我们要区分盒模型和盒子：盒模型有 margin 部分，而盒子不算 margin 部分。

- **w3c 的标准盒模型：** 一个盒子的大小是 width+padding+border，width 是 content 区域，即 width 不包含 padding 和 border。
- **IE6 混杂模式的盒模型：** 一个盒子的大小依旧是由 width，padding，border 组成，但是 width 包含 padding 和 border。



### 8. 两列布局

这是布局中很经典的问题

```html
<div class="wrapper">
    <div class="left">left</div>
    <div class="right">right</div>
</div>
```

**左边固定宽度，右边自适应**

- **float+margin**

  ```css
  .left {
      float: left;
      width: 200px;
      background: red;
  }
  .right {
  	margin-left: 200px;
      background: green;
  }
  ```

- **position: absolute**

  ```css
  .wrapper {
      position: relative;
      width: 100%;
      height: 100px;
      border: 1px solid #000;
  }
  .left {
      position: absolute;
      width: 200px;
      background: red;
  }
  .right {
      position: absolute;
      right: 0;
      left: 200px;
      background: green;
  }
  ```

- **Flex**

  ```css
  .wrapper {
      display: flex;
      width: 100%;
      height: 100px;
      border: 1px solid #000;
  }
  .left {
      width: 200px;
      background: red;
  }
  .right {
      flex: 1;
      background: green;
  }
  ```

- **float**

  ```css
  .wrapper {
      width: 100%;
      height: 100px;
      border: 1px solid #000;
  }
  .left {
      float: left;
      width: 200px;
      background: red;
  }
  .right {
      background: green;
  }
  ```



**右边固定宽度，左边自适应**

- **float+margin**

  ```css
  .left {
      float: right;
      width: 200px;
      background: red;
  }
  .right {
      margin-right: 200px;
      background: green;
  }
  ```

- **position: absolute**

  ```css
  .wrapper {
      position: relative;
  }
  .left {
      position: absolute;
      right: 0;
      width: 200px;
      background: red;
  }
  .right {
      margin-right: 200px;
      background: green;
  }
  ```

- **Flex**

  ```css
  .wrapper {
      display: flex;
  }
  .left {
      flex: 1;
      background: red;
  }
  .right {
      width: 200px;
      background: green;
  }
  ```



### 9. 三列布局

- **传统布局**

  ```html
  <div class="wrapper">
      <div class="left">left</div>
      <div class="right">right</div>   
      <div class="center">center</div>
  </div>
  ```

  ```css
  .left {
      float: left;
      width: 200px;
      background: red;
  }
  .right {
      float: right;
      width: 200px;
      background: green;
  }
  .center {
      margin-left: 200px;
      margin-right: 200px;
      background: orange;
  }
  ```

  

- **圣杯布局**

  ```html
  <div class="wrapper">
      <div class="center">center</div>
      <div class="left">left</div>
      <div class="right">right</div>   
  </div>
  ```

  ```css
  .wrapper {
      box-sizing: border-box;
      width: 100%;
      padding-left: 200px;
      padding-right: 200px;
  }
  .center {
      float: left;
      width: 100%;
      height: 100px;
      background: orange;
  }
  .left {
      float: left;
      position: relative;
      left: -200px;
      width: 200px;
      margin-left: -100%;
      background: red;
  }
  .right {
      position: relative;
      right: -200px;
      float: left;
      width: 200px;
      margin-left: -200px;
      background: green;
  }
  ```

  

- **双飞翼布局**

  ```html
  <div class="wrapper">
      <div class="center">
          <div class="center-box">中间自适应</div>
      </div>
      <div class="left">left</div>
      <div class="right">right</div>   
  </div>
  ```

  ```css
  .wrapper {
  	box-sizing: border-box;
  	width: 100%;
  }
  .center {
  	float: left;
  	width: 100%;
  }
  .center-box {
  	height: 100px;
  	margin: 0 200px;
  	background: orange;
  }
  .left {
  	float: left;
  	width: 200px;
  	margin-left: -100%;
  	background: red;
  }
  .right {
  	float: left;
  	width: 200px;
  	margin-left: -200px;
  	background: green;
  }
  ```



- **Flex**

  Flex 其实是非常简单的一种布局方式，上手快，疗效好。唯一副作用就是兼容性差了一点。

  ```html
  <div class="wrapper">
      <div class="left">left</div>
      <div class="center">center</div>
      <div class="right">right</div>
  </div>
  ```

  ```css
  .wrapper {
  	display: flex;
  	width: 100%;
  }
  .left {
  	width: 200px;
  	background: red;
  }
  .center {
  	flex: 1;
  	background: orange;
  }
  .right {
  	width: 200px;
  	background: green;
  }
  ```

  

### 10. margin 合并和 margin 塌陷

**margin 合并：**

并列结构的话 上下两个 margin 分别有一个 margin-bottom 下边这个元素有一个 margin-top 这样的话会产生一个重叠，取最大的一个 margin 的值作为他们之间的距离

**解决合并外边距的问题：**

在 CSS 当中，相邻的两个盒子（可能是兄弟关系也可能是父子关系）的外边距可以结合成一个单独的外边距。这种合并外边距的方式被称为折叠，并且因而所结合成的外边距称为折叠外边距。按照 BFC 的定义，只有同属于一个 BFC 时，两个元素才有可能发生垂直 Margin 的重叠，这个包括相邻元素、嵌套元素。只要它们之间没有线盒（其实就是非空内容），有间隙（clearance，设置 clear 以闭合相关方向的浮动），没有 padding 和 border 将它们分隔开就会发生 margin 重叠。

因此要解决 margin 重叠问题，只要让它们不在同一个 BFC 就行了，但是对于两个相邻元素来说，意义不大，没有必要给它们加个外壳，但是对于嵌套元素来说就很有必要了，只要把父元素设为 BFC 就可以了。这样子元素的 margin 就不会和父元素的 margin 发生折叠了。

**margin 塌陷：**

因为 CSS 中存在一个 margin collapse，即边界塌陷或者说边界重叠。对于上下两个并列的 div 块而言，上面 div 的 margin-bottom 和下面 div 的 margin-top 会塌陷，也就是会取上下两者 margin 里最大值作为显示值，所以从这个意义上说：CSS 及浏览器的设计者们希望我们在布局时，如果遇到上下两个并排内容块的安排，最好只设置其中每个块上或下 margin 的一处即可。对于父块 DIV 内含块 DIV 的情况，就会按另一条 CSS 惯例来解释了，那就是：对于有块级子元素的元素计算高度的方式，如果元素没有垂直边框和填充，那其高度就是子元素顶部和底部边框边缘之间的距离。

**塌陷解决方式：**

解决父子 DIV 中顶部 margin cllapse 的问题，需要给父 div 设置：

- 边框，当然可以设置边框为透明；
- 为父 DIV 添加 padding，或者至少添加 padding-top；
- 还可以通过 over-flow 来解决，给父 DIV 写入：over-flow: hidden;



### 11. link 和 import 的区别

- link 属于 HTML 标签，而 @import 是 css 提供的
- 页面被加载时，link 会同时被加载，而 @import 引用的 css 会等到页面加载结束后加载
- link 是 HTML 标签，因此没有兼容性，而 @import 只有 IE5 以上才能识别
- link 方式样式的权重高于 @import



## 三、JavaScript

### 1. JavaScript 的基本类型有几种？

JavaScript 中分为七种内置类型，七种内置类型又分为两大类型：基本类型和对象（Object）

基本类型有六种：null，undefined，Boolean，Number，String，Symbol

### 2. 使用 typeof bar === "object" 来确定 bar 是否是对象的潜在陷阱是什么？如何避免这个陷阱？

尽管 typeof bar === "object" 是检查 bar 是否是对象的可靠方法，但在 JavaScript 中 null 也被认为是对象！所以可以用以下方法进行判断：

```js
(bar !== null) && (typeof bar === "object")
```

如果 bar 是一个函数，也会得到 false，所以我们改进一下：

```js
(bar !== null) && ((typeof bar === "object") || (typeof bar === "function"))
```

如果 bar 是数组的话会得到 true，但我们大多数情况希望数组判断为 false，所以最终的代码为：

```js
(bar !== null) && (typeof bar === "object") && (toString.call(bar) !== "[object Array]")
```

### 3. 请写出下面运算结果

```js
  [] + []			// ""(空字符串)
  [] + {}			// "[object Object]"
  {} + []			// 0
  {} + {} 		    // "[object Object][object Object]" (firefox下是NaN)
  true + true 	    // 2
  1 + {a: 1}		// "1[object Object]"
```

### 4. 请描述一下 new 一个对象的过程

新生成了一个对象 ==> 链接到原型 ==> 绑定this ==> 返回新对象

```js
// 代码实现
function create() {
    let obj = new Object();								// 创建一个空的对象
    let Con = [].shift.call(arguments);					 // 获得构造函数
    obj.__proto__ = Con.prototype;						// 链接到原型
    let result = Con.apply(obj, arguments);				 // 绑定 this，执行构造函数
    return typeof result === 'object' ? result : obj;	  // 确保 new 出来的是个对象
}
```

### 5. 介绍一下 JavaScript 原型，原型链，它们有何特点？

每个对象都会在其内部初始化一个属性，就是 prototype(原型)，当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去 prototype 里找这个属性，这个 prototype 又会有自己的 prototype，于是就这样一直找下去，也就是我们平时所说的原型链的概念。

特点：JavaScript 对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本，当我们修改原型时，与之相关的对象也会继承这一改变。

### 6. JavaScript 如何实现继承？

既然要实现继承，那么首先我们得有一个父类，代码如下：

```js
// 定义一个动物类
function Animal(name) {
    // 属性
    this.name = name || 'Animal';
    // 实例方法
    this.sleep = function () {
        console.log(this.name + '正在睡觉!');
    }
}
// 原型方法
Animal.prototype.eat = function (food) {
    console.log(this.name + '正在吃：' + food);
}
```

1. 原型链继承

```js
function Cat() {}
Cat.prototype = new Animal();
Cat.prototype.name = 'cat';
```

2. 构造继承

```js
function Cat(name) {
    Animal.call(this);
    this.name = name || 'Tom';
}
```

3. 实例继承

```js
function Cat(name) {
    var instance = new Animal();
    instance.name = name || 'Tom';
    return instance;
}
```

4. 拷贝继承

```js
function Cat(name) {
    var animal = new Animal();
    for (var p in animal) {
        Cat.prototype[p] = animal[p];
    }
    Cat.prototype.name = name || 'Tom';
}
```

### 7. JavaScript 如何判断函数是 new 调用还是普通调用

第一种方式：通过 instanceof 判断

```js
function Person() {
    if (this instanceof arguments.callee) {
        console.log('new 调用');
    } else {
        console.log('普通调用');
    }
}
let p1 = new Person();			// new 调用
let p2 = Person();				// 普通调用
```

第二种方式：通过constructor

```js
function Person() {
    if (this.constructor === arguments.callee) {
        console.log('new 调用');
    } else {
        console.log('普通调用');
    }
}
let p1 = new Person();			// new 调用
let p2 = Person();				// 普通调用
```

### 8. 以下代码的结果是什么？请解释你的答案。

```js
var fullname = 'John Doe';
var obj = {
    fullname: 'Colin Ihrig',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function () {
            return this.fullname;
        }
    }
}
console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(test());
// 结果是 Aurelio De Rosa 和 John Doe
// 原因是 JavaScript中关键字this所引用的是函数上下文，取决于函数是如何调用的，而不是怎么被定义的。
```

### 9. 以下代码执行结果是什么？

```js
alert(a);
a();
var a = 3;
function a() {
    alert(a);
    alert(1);
}
alert(a);
a = 6;
a();
```

第一次弹出a函数源代码

第二次弹出a函数源代码

第三次弹出1

第四次弹出3

第五次报错

### 10. 创建 10 个 a 标签，点击的时候弹出来对应的序号

```js
for (var i = 0; i < 10; i++) {
    (function (i) {
        var a = document.createElement('a');
        a.innerHTML = i + '<br>';
        document.body.appendChild(a);
        a.addEventListener('click', function (e) {
            e.preventDefault(); // 取消默认事件，指a标签
            alert(i);
        })
    })(i);
}
```

### 11. 请你实现一个深克隆

```js
var deepCopy = function (obj) {
    if (typeof obj !== 'object') return;
    var newObj = obj instanceof Array ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
        }
    }
    return newObj;
}
```

### 12. 谈谈你对模块化开发的理解

所谓的模块化开发就是封装细节，提供使用接口，彼此之间互不影响，每个模块都是实现某一特定的功能。模块化开发的基础就是函数。

模块化的实现 nodejs 中的 module.exports 与 require

require.js 中的 AMD 规范

sea.js 中的 CMD 规范

es6 中的 export 与 import

### 13. 请问如何解决在滚动事件中需要做个复杂计算或者实现一个按钮的防连续点击操作？

使用防抖或者节流来实现

```js
// 防抖
function debounce(func, wait, immediate) {
    var timeout, result;
    var debounced = function () {
        var context = this;
        var args = arguments;
        if (timeout) clearTimeout(timeout);
        if (immediate) {
            // 如果已经执行过，不再执行
            var callNow = !timeout;
            timeout = setTimeout(function () {
                timeout = null;
            }, wait);
            if (callNow) result = func.apply(context, args);
        } else {
            timeout = setTimeout(function () {
                func.apply(context, args)
            }, wait);
        }
        return result;
    };
    debounced.cancel = function () {
        clearTimeout(timeout);
        timeout = null;
    }
    return debounced;
}
```

```js
function throttle(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};
    var later = function () {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = null;
        func.apply(context, args);
        if (!timeout) context = args = null;
    };
    var throttled = function () {
        var now = new Date().getTime();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
    };
    return throttled;
}
```

### 14. 为什么 0.1 + 0.2 != 0.3

因为 JS 采用 IEEE 754 双精度版本（64位），并且只要采用 IEEE 754 的语言都有该问题，我们都知道在计算机中都是以二进制来存储的，0.1 和 0.2 的二进制是： 

```js
// (0011) 表示循环
0.1 = 2^-4 * 1.10011(0011)
0.2 = 2^-3 * 1.10011(0011)
```

由于刚才我们说了 JS 采用 IEEE 754 双精度，用 64 位代表一个数，64 位中符号位占 1 位，整数占 11 位，其余 52 位都为小数位。因为 0.1 和 0.2 都是无限循环的二进制，所以在小数位末尾处需要判断是否进位（就和十进制的四舍五入一样）。

所以 2^-4 * 1.10011...001 进位后就变成了 2^-4 * 1.10011(0011 * 12次)010 。那么把这两个二进制加起来会得出2^-2 * 1.10011(0011 * 11次)0011 ，这个值算成十进制是 0.30000000000000004，0.30000000000000004 当然不等于 0.3。

### 15. 请验证用户名，用户名规则，以字母开头中间可以是数字下划线 6-20 个字符

使用正则表达式

```js
/^[a-zA-Z][a-zA-Z0-9_]{5,19}$/
```

### 16. 请模拟实现一个 bind 函数

```js
Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error');
    }
    var _this = this;
    var args = [...arguments].slice(1);
    // 返回一个函数
    return function F() {
        // 因为返回了一个函数，我们可以 new F()，所以需要判断
        if (this instanceof F) {
            return new _this(args, ...arguments);
        }
        return _this.apply(context, args.concat(arguments));
    }
}
```

### 17. ES6 中的 promise 有了解吗？可以说一下它是做什么的吗？

Promise 是 ES6 新增的语法，解决了回调地域的问题。

可以把 Promise 看成一个状态机。初始是 pending 状态，可以通过函数 resolve 和 reject，将状态转变为resolved 或者 rejected 状态，状态一旦改变就不能再次变化。then 函数会返回一个 Promise 实例，并且该返回值是一个新的实例而不是之前的实例。因为 Promise 规范规定除了 pending 状态，其他状态是不可以改变的，如果返回的是一个相同的实例的话，多个 then 调用就失去意义了。

### 18. 红灯三秒亮一次，绿灯两秒亮一次，黄灯一秒亮一次；如何让三个灯不断交替重复亮灯？三个亮灯函数已经存在：

```js
function red() {
    console.log('red   - ', new Date());
}
function green() {
    console.log('green  - ', new Date());
}
function yellow() {
    console.log('yellow - ', new Date());
}
```

主要考察多种回调函数写法

1. callback 实现

```js
function loop() {
	setTimeout(function () {
		red();
		setTimeout(function () {
			green();
             setTimeout(function () {
                 yellow();
                 loop();
             }, 1000)
		}, 2000)
	}, 3000);
}
loop();
```

2. Promise 实现

```js
function tic(timer, callback) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            callback();
            resolve();
        }, timer)
    })
}
var promise = new Promise(function (resolve, reject) { resolve() });
function loop() {
    promise.then(function () {
        return tic(3000, red);
    }).then(function () {
        return tic(2000, green);
    }).then(function () {
        return tic(1000, yellow);
    }).then(function () {
        loop();
    })
}
loop();
```

3. Generator 实现

```js
function* light() {
    yield tic(3000, red);
    yield tic(2000, green);
    yield tic(1000, yellow);
}
function loop(iterator, gen) {
    var result = iterator.next();
    if (result.done) {
        loop(gen(), gen);
    } else {
        result.value.then(function () {
            loop(iterator, gen)
        })
    }
}
loop(light(), light);
```

4. async, await 实现

```js
(async function () {
    while(true) {
        await tic(3000, red);
        await tic(2000, green);
        await tic(1000, yellow);
    }
})();
```



### 19. 数组方法

1. `push()` 将一个或多个元素添加到数组的末尾，并返回该数组的新长度
2. `pop()` 从数组中删除最后一个元素，并返回该元素的值    	
3. `unshift()` 将一个或多个元素添加到数组的开头，并返回该数组的新长度
4. `shift()` 从数组中删除第一个元素，并返回该元素的值
5. `concat()` 合并两个或多个数组，不会更改现有数组，而是返回一个新数组
6. `slice()` 截取数组中一段元素生成一个新数组
7. `splice()` 通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容
8. `reverse()` 将数组中元素的位置颠倒，并返回该数组
9. `sort()` 对数组的元素进行排序，并返回数组。默认排序顺序是将元素转换成字符串进行升序排列
10. `indexOf()` 返回指定元素在数组中的第一个索引，如果不存在，则返回-1
11. `lastIndexOf()` 返回指定元素在数组中的最后一个索引，如果不存在，则返回-1
12. `forEach()` 对数组中的每一项运行给定函数，这个方法没有返回值
13. `map()` 对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组
14. `every()` 对数组中的每一项运行给定函数，如果该函数对每一项都返回 true，则返回 true
15. `filter()` 对数组中的每一项运行给定函数，返回该函数会返回 true 的项组成的数组
16. `some()` 对数组中的每一项运行给定函数，如果该函数对任一项返回 true，则返回 true 
17. `reduce()` 从数组的第一项开始迭代数组的所有项，然后构建一个最终的返回值
18. `reduceRight()` 从数组的最后一项开始迭代数组的所有项，然后构建一个最终的返回值
19. `join()` 将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串，如果数组只有一个项目，那么将返回该项目而不使用分隔符
20. `find()` 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
21. `findIndex()` 返回数组中满足提供的测试函数的第一个元素的索引。否则返回 -1
22. `includes()` 用来判断一个数组是否包含一个指定的值，包含则返回 true，否则返回 false



### 20. 字符串方法

1. `concat()` 将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回
2. `includes()` 判断一个字符串是否包含在另一个字符串中，是返回 true 否则返回 false
3. `indexOf()` 从一个字符串的开头向后搜索给定的子字符串，返回子字符串的第一个索引（如果没有找到返回 -1）
4. `lastIndexOf()` 从一个字符串的末尾向前搜索给定的子字符串，返回子字符串的最后一个索引（如果没有返回 -1）
5. `slice()` 提取某个字符串的一部分，并返回一个新的字符串，且不会改变原字符串
6. `split()` 使用指定的分隔符字符串将一个 String 对象分割成字符串数组
7. `replace()` 返回一个由替换值替换一些或所有匹配的模式后的新字符串
8. `trim()` 从一个字符串的两端删除空白字符



### 21. 数组去重的几种方法

**方法一、利用 ES6 Set 去重**

```js
function unique(ary) {
    return Array.from(new Set(ary));
}
```

`new Set()` 去重并转换成类数组对象，`Array.from()` 将类数组对象或可迭代对象转化为数组



**方法二、利用 for 嵌套 for，然后 splice 去重**

```js
function unique(ary) {
    for (var i = 0; i < ary.length; i++) {
        for (var j = i + 1; j < ary.length; j++) {
            if (ary[i] == ary[j]) {
                ary.splice(j, 1);
                j--;
            }
        }
    }
    return ary;
}
```

双层循环，外层循环元素，内层循环比较值，值相同时删除这个值



**方法三、利用 indexOf 去重**

```js
function unique(ary) {
    var result = [];
    for (var i = 0; i < ary.length; i++) {
        if (result.indexOf(ary[i]) === -1) {
            result.push(ary[i]);
        }
    }
    return result;
}
```

新建一个空的结果数组，for 循环原数组，判断结果数组是否存在当前元素，存在则跳过，不存在则 push 进数组



## 四、网络

### 1. 说一说你知道的 HTTP 状态码

- 2XX 成功
  - 200 OK，表示从客户端发来的请求在服务器端被正确处理
  - 204 No Content，表示请求成功，但响应报文不含实体的主体部分
  - 205 Reset Content，表示请求成功，但响应报文不含实体的主体部分，但是与 204 响应不同在于要求请求方重置内容
  - 206 Partial Content，服务器已经成功处理了部分 GET 请求
- 3XX 重定向
  - 301 Moved Permanently，永久性重定向，请求的资源已被永久的移动到新 URI
  - 302 Found，临时性重定向，表示资源临时被分配了新的 URI
  - 303 See Other，表示资源存在着另一个 URI，应使用 GET 方法定向获取资源
  - 304 Not Modified，如果客户端发送了一个带条件的 GET 请求且该请求已被允许，而文档的内容（自上次访问以来或者根据请求的条件）并没有改变，则服务器应当返回这个状态码。
  - 307 Temporary Redirect，临时重定向，和302含义相同
- 4XX 客户端错误
  - 400 Bad Request，请求报文存在语法错误
  - 401 Unauthorized，当前请求需要用户验证
  - 403 Forbidden，表示对请求资源的访问被服务器拒绝
  - 404 Not Found，表示在服务器上没有找到请求的资源
- 5XX 服务器错误
  - 500 Internal Sever Error，表示服务器端在执行请求时发生了错误
  - 501 Not Implemented，表示服务器不支持当前请求所需要的某个功能
  - 503 Service Unavailable，表明服务器暂时处于超负载或正在停机维护，无法处理请求

### 2. 你是否了解过 websocket？

webSocket 和 http 一样，同属于应用层协议。它最重要的用途是实现了客户端与服务器端之间的全双工通信，当服务器端数据变化时，可以第一时间通知到客户端。

除此之外，它与 http 协议不同的地方还有：

- http 只能由客户端发起，而 webSocket 是双向的。
- webSocket 传输的数据包相对于 http 而言很小，很适合移动端使用
- 没有同源限制，可以跨域共享资源

### 3. 请你手写一下 ajax

实现流程：

1. 创建 XMLHttpRequest 对象，也就是创建一个异步调用对象。
2. 创建一个新的 HTTP 请求，并指向该 HTTP 请求的方法、URL 及验证信息。
3. 设置响应 HTTP 请求状态变化的函数。
4. 发送 HTTP 请求。
5. 获取异步调用返回的数据。
6. 使用 JavaScript 和 DOM 实现局部刷新。

代码实现：

```js
function ajax(options) {
    let url = options.url;
    const method = options.method.toLocaleLowerCase() || 'get';
    const async = options.async != false;  // default is true
    const data = options.data;
    const xhr = new XMLHttpRequest();
    
    if (options.timeout && options.timeout > 0) {
        xhr.timeout = options.timeout;
    }
    return new Promise((resolve, reject) => {
        xhr.ontimeout = () => reject && reject('请求超时');
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                    resolve && resolve(xhr.responseText);
                } else {
                    reject && reject();
                }
            }
        }
        xhr.onerror = err => reject && reject(err);
        
        let paramArr = [];
        let encodeData;
        if (data instanceof Object) {
            for (let key in data) {
                // 参数拼接需要通过 encodeURIComponent 进行编码
                paramArr.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
            }
            encodeData = paramArr.join('&');
        }
        if (method === 'get') {
            // 检测 url 中是否已存在 ？及其位置
            const index = url.indexOf('?');
            if (index === -1) url += '?';
            else if (index !== url.length - 1) url += '&';
            // 拼接 url
            url += encodeData;
        }
        xhr.open(method, url, async);
        if (method === 'get') xhr.send(null);
        else {
            // post 方式需要设置请求头
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8')
            xhr.send(encodeData);
        }
    })
}
```

### 4. http 2.0 对于 http 1.x 有哪些优点？

- 多路复用：多路复用允许同时通过单一的 HTTP/2 连接发起多重的请求-响应消息。由于 http 1.x 的时代中，浏览器向同一域名下发送的 http 请求数量是受限的，当超出数量限制时，请求会被阻塞，大大降低了用户体验。而 HTTP/2 的多路复用允许同时通过单一的 HTTP/2 连接发起多重的请求-响应消息。
- 二进制分帧：HTTP/2 在应用层和传输层之间追加了一个二进制分帧层，最终使得多个数据流共用一个连接，更加高效的使用 tcp 连接。从而使得服务器的连接压力减轻，降低了内存的消耗，增大了网络的吞吐量。
- 首部压缩：HTTP/2 引入了 HPACK 算法对头部进行压缩，大大减小了数据发送的字节数。

### 5. HTTP 的缺点以及 HTTPS

缺点：

- 通信使用明文不加密，内容可能被窃听。
- 不验证通信方身份，可能遭到伪装。
- 无法验证报文完整性，可能被篡改。

HTTPS 就是 HTTP 加上 SSL 加密处理（一般是 SSL 安全通信线路）+ 认证 + 完整性保护

客户端浏览器在使用 HTTPS 方式与 Web 服务器通信时有以下几个步骤：

1. 客户使用 https 的 URL 访问 Web 服务器，要求与 Web 服务器建立 SSL 连接。
2. Web 服务器收到客户端请求后，会生成一对公钥和私钥，并把公钥放在证书中发给客户端浏览器。
3. 客户端浏览器根据双方同意的 SSL 连接的安全等级，建立会话密钥，然后用公钥将会话密钥加密，并传送给服务器。
4. Web 服务器用自己的私钥解密出会话密钥。
5. Web 服务器利用会话密钥加密与客户端之间的通信。

### 6. 请说一下从输入 URL 到页面加载完成的过程

1. 首先做 DNS 查询，如果这一步做了智能 DNS 解析的话，会提供访问速度最快的 IP 地址回来。
2. 接下来是 TCP 握手，应用层会下发数据给传输层，这里 TCP 协议会指明两端的端口号，然后下发给网络层。网络层中的 IP 协议会确定 IP 地址，并且指示了数据传输中如何跳转路由器。然后包会再被封装到数据链路层的数据帧结构中，最后就是物理层面的传输了。
3. TCP 握手结束后会进行 TLS 握手，然后就开始正式的传输数据。
4. 数据在进入服务端之前，可能还会先经过负责负载均衡的服务器，它的作用就是将请求合理的分发到多台服务器上，这时假设服务器端会响应一个 HTML 文件。
5. 首先浏览器会判断状态码是什么，如果是 200 那就继续解析，如果是 400 或 500 就会报错，如果是 300 会进行重定向，这里会有个重定向计时器，避免过多次的重定向，超过次数也会报错。
6. 浏览器开始解析文件，如果是 gzip 格式的话会先解压，然后通过文件的编码格式知道该如何去解码文件。
7. 文件解码成功后会正式开始渲染流程，先会根据 HTML 构建 DOM 树，有 CSS 的话会去构建 CSSOM 树。如果遇到 script 标签的话，会判断是否存在 async 或者 defer，前者会并行进行下载并执行 JS，后者会先下载文件，然后等待 HTML 解析完成后顺序执行，如果以上都没有，就会阻塞住渲染流程直到 JS 执行完毕。遇到文件下载的会去下载文件，这里如果使用 HTTP 2.0 协议的话会极大的提高多图的下载效率。
8. 初始的 HTML 被完全加载和解析后会触发 DOMContentLoaded 事件。
9. CSSOM 树 和 DOM 树构建完成后会开始生成 Render 树，这一步就是确定页面元素的布局、样式等等诸多方面的东西。
10. 在生成 Render 树的过程中，浏览器就开始调用 GPU 绘制，合成图层，将内容显示在屏幕上了。  

### 7. 描述一下三次握手的过程，三次握手的目的

TCP 是一种面向连接的、可靠的、基于字节流的运输层（Transport layer）通信协议。是专门为了在不可靠的互联网络上提供一个可靠的端到端字节流而设计的。每一次 TCP 连接都需要三个阶段：连接建立、数据传送和连接释放。“三次握手”就发生在连接建立阶段。

1. 第一次握手：客户端发送一个 TCP 的 SYN 标志位置 1 的包，指明客户打算连接的服务器的端口，以及初始序号X，保存在包头的序列号（Sequence Number）字段里。
2. 第二次握手：服务器发回确认包（ACK）应答。即 SYN 标志位和 ACK 标志位均为 1 同时，将确认序号（Acknowledgement Number）设置为客户的 ISN 加 1 以及 X+1。
3. 第三次握手：客户端再次发送确认包（ACK），SYN 标志位为 0，ACK 标志位为 1，并且把服务器发来 ACK 的序号字段 +1，放在确定字段中发送给对方。并且在数据段方写 ISN+1。

三次握手的目的：

- 使收发端的数据发送和接收同步
- 协调可以收发的数据量
- 建立虚连接

### 8. 请描述一下四次挥手的过程

所谓四次挥手（Four-Way Wavehand）即终止 TCP 连接，就是指断开一个 TCP 连接时，需要客户端和服务器端总共发送 4 个包以确认连接的断开。由客户端或服务器端任一方执行 close 来触发。

1. 第一次挥手：Client 发送一个 FIN，用来关闭 Client 到 Server 的数据传送，Client 进入 FIN_WAIT_1 状态。
2. 第二次挥手：Server 收到 FIN 后，发送一个 ACK 给 Client，确认序号为收到序号 +1（与 SYN 相同，一个 FIN 占用一个序号），Server 进入 CLOSE_WAIT 状态。
3. 第三次挥手：Server 发送一个 FIN，用来关闭 Server 到 Client 的数据传送，Server 进入 LAST_ACK 状态。
4. 第四次挥手：Client 收到 FIN 后，Client 进入 TIME_WAIT 状态，接着发送一个 ACK 给 Server，确认序号为收到序号 +1，Server 进入 CLOSED 状态，完成四次挥手。

### 9. TCP UDP 的区别？什么时候使用 TCP，什么时候用 UDP？

它们之间有四方面区别：

1. TCP 是基于连接的，可靠性高；UDP 基于无连接，可靠性较低。
2. 由于 TCP 是连接的通信，需要有三次握手、重新确认等连接过程，会有时延，实时性差；同时过程复杂，也使其易于被攻击；而 UDP 无连接，无建立连接的过程，因而实时性较强，也稍安全。
3. 在传输相同大小的数据时，TCP 首部开销 20 字节；UDP 的首部开销小，只有 8 个字节，TCP 报头比 UDP 复杂，故实际包含的用户数据较少。TCP 无丢包，而 UDP 有丢包，故 TCP 的开销大，UDP 开销较小。
4. 每一条 TCP 连接只能是点到点的；UDP 支持一对一，一对多，多对一和多对多的交互通信。

应用方面：

1. 由于 TCP 的实时性差，故对实时性要求高和高速传输的场合需用 UDP。
2. TCP 适用于传输大量数据，对可靠性要求高的环境；而在可靠性要求较低，追求效率时可用 UDP。


### 10. 请说一下 GET 和 POST 的区别

- 从用途来说，GET 和 POST 是 http 请求方式。GET 向特定的资源发出请求。POST 向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。
- 对于数据存放方式而言，要给 GET 加上 request body，给 POST 带上 url 参数，是完全可以的。不同服务器的处理方式也是不同的，有些服务器会读出数据，有些服务器直接忽略，所以，虽然 GET 可以带 request body，但不能保证一定能被接收到。所以采用了 url 的方式。安全不足以作为他们的主要区别，只是因为数据存放位置不同而已。
- 对于数据量来说，数据量太大对浏览器和服务器都是很大负担。业界不成文的规定是，（大多数）浏览器通常都会限制 url 长度在 2K 个字节，而（大多数）服务器最多处理 64K 大小的 url。超过的部分概不处理。所以就有了我们现在知道的数据长度受限的问题。
- 最本质的一点，GET 和 POST 最大的区别主要是 GET 请求是幂等性的。


### 11. cookie 有什么作用？它的缺点是什么？

cookie 可用解决 HTTP 的无状态的问题，与服务器进行交互，作为 http 规范存在。它具有较高的简便性、可扩展性和可用性，也可以通过加密和 SSL 技术来提高其安全性。因此推荐使用 cookie 作为标识而不是身份验证的工具。

缺点有：

1. 大小和数目受限制。浏览器对一个域 cookie 的条目数有上限要求，且每个 cookie 的大小不得超过 4kb。
2. 存在安全性问题，易被人拦截。
3. 需要指定域，不可以跨域。
4. 浪费带宽，因为每次请求一个新的页面，cookie 都会被自动发送过去。
5. 有的移动端浏览器不支持 cookie 或浏览器禁用 cookie。
6. 有些状态不可能保存在客户端。例如：为了防止重复提交表单，我们需要在服务器端保存一个计数器。如果我们把这个计数器保存在客户端，那么它起不到任何作用。


### 12. Cookie 的工作原理？

- 用户首次访问 Web 站点时，Web 服务器对用户一无所知。
- Web 服务器通过 Set-Cookie 首部将 cookie 存放到浏览器中的 cookie 数据库中。cookie 中包含了 N 个键值对，例如 Cookie：id=“1234”。cookie 中可以包含任意信息，但它们通常都只包含一个服务器为了进行跟踪而产生的独特的标识码。
- 将来用户再次访问同一站点，浏览器会从 cookie 数据库中挑中那个服务器设置的 cookie，并在 cookie 请求首部中（Cookie：id=“1234”）将其传回给服务器。
- 服务器可以通过 id=“1234” 这个键值对来查找服务器为其访问积累的信息（购物历史、地址信息等）。



### 13. cookie、sessionStorage、localStorage 的区别

**共同点：** 都是保存在浏览器端，并且是同源的。

**区别：** 

- cookie 数据始终在同源的 http 请求中携带，而 webStorage 不会在请求中携带，仅在本地存储。
- 存储大小区别：cookie 是 4k，webStorage 可以达到 5M。
- 数据有效时间区别：sessionStorage 仅在当前浏览器窗口关闭前有效，localStorage 始终有效，即使窗口或浏览器关闭，除非用户手动删除才会失效，cookie 只在设置的 cookie 过期时间之前一直有效，即使窗口或浏览器关闭
- 作用域区别：sessionStorage 不在不同的浏览器窗口中共享，即使是同一个页面，localStorage 和 cookie 在所有同源窗口是共享的



### 14. cookie、session 的区别

- cookie 存储于浏览器端，而 session 存储于服务器端。
- cookie 的安全性相比于 session 较弱，别人可以分析存放在本地的 cookie 并进行 cookie 欺骗，考虑到安全应当使用 session。
- session 会在一定时间内保存在服务器上，当访问增多时，会比较占用服务器的资源，所以考虑到服务器性能方面，应当使用 cookie。
- cookie 存储容量有限制，单个 cookie 保存数据不能超过 4k，且很多浏览器限制一个站点最多保存 20 个 cookie。而对于 session，其默认大小一般是 1024k。



## 五、浏览器

### 1. js 事件应该很多清楚吧、那 js 事件流了解吗？

- **事件流：** 指从页面中接收事件的顺序，有冒泡流和捕获流

- **事件捕获：** 当鼠标点击或者触发 dom 事件时，浏览器会从根节点开始由外到内进行事件传播。即先触发父元素绑定的事件，再触发子元素绑定的事件。

  事件冒泡与事件捕获相反，由内而外，先触发子元素绑定的事件，再触发父元素绑定的事件。

  dom 标准事件流的触发先后顺序为先捕获再冒泡。`IE10及以下不支持捕获型事件`

  如果给目标节点同时注册冒泡和捕获事件，事件触发会按照注册的顺序执行。



### 2. 事件绑定方法有哪些？

- 直接在 html 标签中绑定事件。但代码耦合严重
- 在 DOM 元素上采用`on+事件名称`的方法绑定
  - 但多个事件处理程序无法同时绑定在一个 DOM 对象上
  - 而且动态生成的 DOM 对象无法绑定事件
  - 当目标元素过多时，需要一一绑定，繁琐且性能差
- 采用 addEventListener 和 attachEvent 函数绑定
  - `addEventListener(event, function, boolean)`函数是 W3C 标准规定的，IE8 及 IE8 以下不支持；boolean 默认值 false：冒泡阶段；true：捕获阶段
  - `attachEvent()`函数是 IE 特有的，IE8 以下浏览器可以使用，可添加多个事件处理函数，只支持冒泡阶段

**兼容各个浏览器的事件绑定和解除：**

```js
// 事件绑定
function addEvent(element, type, handler) {
	if (element.addEventListener) { // 如果支持addEventListener
		element.addEventListener(type, handler, false);
	} else if (element.attachEvent) { // 如果支持attachEvent
		element.attachEvent('on'+type, function() {
			handler.call(element); // 将this指向当前DOM对象
		});
	} else { // 否则使用兼容的onclick绑定
		element['on'+type] = handler;
	}
}
```

```js
// 事件解绑
function removeEvent(element, type, handler) {
	if (element.addEventListener) {
		element.removeEventListener(type, handler, false);
	} else if (element.attachEvent) {
		element.detachEvent('on'+type, handler);
	} else {
		element['on'+type] = null;
	}
}
```

**这两种绑定方式可以给DOM对象绑定多个事件处理程序**

当遇到给多个元素或者给动态生成的元素绑定操作时，可以采用 **事件委托（事件代理）** 的方式绑定在父节点上。

事件委托原理是事件冒泡，有这样一个结构`ul>li`比如给 li 加一个 click 点击事件，那么这个事件就会一层一层的向外冒泡，执行顺序先 li 再 ul。如果我们给外面的 ul 绑定点击事件，那么里面 li 触发点击事件的时候，都会冒泡到外层的 ul 上，触发 ul 上的事件操作程序。这就是事件委托，委托它们父级代为执行事件。

```markdown
适合用事件委托的事件：
	click, mousedown, mouseup, keydown, keyup, keypress。
	
本身没有冒泡的特性，不能使用事件委托的事件：
	focus, blur
```



### 3. 有哪些跨域的解决方案？

因为浏览器出于安全考虑，有同源策略。也就是说如果协议、域名或者端口有一个不同就是跨域，Ajax 请求会失败。

**跨域方式**

- **JSONP**

  原理：Web 页面上调用 js 文件不受跨域影响，凡是具有 src 属性标签都不受同源策略的影响，正是这个特性，我们把资源放到 script 标签里的 src 里面，把数据放到服务器上，并且是 json 格式（js 很容易操作 json）。script 标签中 src 属性的格式是 'url+参数'，比如 url?cd=doJSON，cd 是我们和后台协商好的类似形参的东西，是一个留给我们写处理函数接口，doJSON 就是我们事先定义好的函数，也就是回调函数，所有数据会以参数的形式传递给该函数（json 是一种数据格式，jsonp 是一种约定俗成的非正式传输协议）。

  JSONP 使用简单且兼容老版本浏览器，但是只限于 GET 请求。

- **CORS**

  原理：需要浏览器和后端同时支持。要在服务器端的 response header 里面加一个 Access-Control-Allow-Origin：指定域名（表示所有域名都可以跨域），浏览器端便可以发起 post 的跨域请求。浏览器会自动进行 CORS 通信，实现 CORS 通信的关键是后端，只要后端实现了 CORS，就实现了跨域。

  IE8 和 9 需要通过 XDomainRequest 来实现。它实现了 CORS 的部分规范，只支持 GET/POST 形式的请求。在服务器端，依旧要求在响应报头添加 "Access-Control-Allow-Methods" 标签（这点跟 CORS 一致）。创建一个 XDomainRequest 的实例，调用 open() 方法，再调用 send() 方法，请求返回之后，会触发 load 事件，相应的数据也会保存在 responseText 属性中

- **Document.domain**

  该方式只能用于二级域名相同的情况下，比如 a.test.com 和 b.test.com 适用于该方式。只需要给页面添加 document.domain='test.com' 表示二级域名都相同就可以实现跨域。

  一个网页被攻击，另外一个站点就会引起安全漏洞。

- **postMessage**

  h5 中有一种功能就是跨文档消息传输

  `getMessageHTML.postMessage(message, targetOrigin)`

  getMessageHTML 是接受信息的页面引用，可以是 iframe 的 contentWindow，window.open 的返回值 targetOrigin 是用于限制 getMessageHTML 的，填*的时候不做限制

- **服务器代理**

  服务器不受同源策略的影响，把所有资源放在服务器上，然后让服务器上的网页获取这些资源

  ```js
  // 发送消息端
  window.parent.postMessage('message', 'http://test.com')
  ```

  ```js
  // 接收消息端
  var mc = new MessageChannel();
  mc.addEventListener('message', event => {
  	var origin = event.origin || event.originalEvent.origin;
      if (origin === 'http://test.com') {
          console.log('验证通过')
      }
  })
  ```

- **Iframe**

  `iframe+location.hash:`

  利用 location.hash 来传值，改变 hash 不会刷新页面

  **缺点：** 数据直接暴露在 url 中，数据长度和类型都有限制

  `iframe+window.name:`

  和 location.hash 方法差不多，主页面有一个 iframe，通过修改引入的子页面（同源）来获取 window.name 值来达到跨域。

  **缺点：** 需要借助同源其他子页面



### 4. setTimeout(function(){}, 0) 先执行括号里面的函数还是先执行外部代码？

JS 是门非阻塞单线程语言，因为在最初 JS 就是为了和浏览器交互而诞生的。如果 JS 是门多线程的语言，我们在多个线程中处理 DOM 就可能会发生问题（一个线程中新加节点，另一个线程中删除节点），当然可以引入读写锁解决这个问题。

JS 在执行的过程中会产生执行环境，这些执行环境会被顺序的加入到执行栈中。如果遇到异步的代码，会被挂起并加入到 Task（有多种 task）队列中。一旦执行栈为空，Event Loop 就会从 Task 队列中拿出需要执行的代码并放入执行栈中执行，所以本质上来说 JS 中的异步还是同步行为。虽然 setTimeout 延时为 0，其实还是异步。这是因为 HTML5 标准规定这个函数第二个参数不得小于 4 毫秒，不足会自动增加。



### 5. 比如做个新闻编辑上传功能，有网络的情况下直接提交，没有网络的情况下可以离线保存。如何实现这个功能？

（想要把这道题答好，答案两步。**数据交互，离线缓存**）

- **数据交互** 利用 ajax 实现数据交互即可

- **离线缓存**

  cookie，localStorage，sessionStorage 都可以用于离线缓存数据，那么选择一个合适的来使用就尤为重要了！下面是它们的区别：

  从上表可以看到，cookie 已经不建议用于存储。如果没有大量数据存储需求的话，可以使用 localStorage 和 sessionStorage。对于不怎么改变的数据尽量使用 localStorage 存储，否则可以用 sessionStorage 存储。所以此处可以采用 localStorage 进行存储。



## 六、前端框架

### 1. 请简述一下 MVVM 框架是什么？它和 jQuery 的区别是什么？

MVVM 是 Model-View-ViewModel 的简写。

MVVM 是 Web 前端一种非常流行的开发模式，利用 MVVM 可以使我们的代码更专注于处理业务逻辑而不是像 jQuery 去关心 DOM 操作。目前著名的 MVVM 框架有 vue，angular 等，这些框架各有千秋，但是实现的思想大致上是相同：数据绑定 + 视图刷新。跟 MVC 一样，主要目的是分离视图（View）和模型（Model）。View 可以独立于 Model 变化和修改，一个 ViewModel 可以绑定到不同的 "View" 上，当 View 变化的时候 Model 可以不变，当 Model 变化的时候 View 也可以不变。在 MVVM 中，数据是核心，由于 ViewModel 与 View 之间的双向绑定，操作了 ViewModel 中的数据（当然只能是监控属性），就会同步到 DOM，我们透过 DOM 事件监控用户对 DOM 的改动，也会同步到 ViewModel。



### 2. 你了解前端路由是如何实现的吗？

前端路由本质就是监听 URL 的变化，然后匹配路由规则，显示相应的页面，并且无须刷新。目前单页面使用的路由就只有两种实现方式。

- hash 模式

  hash 路由一个明显的标志是带有 #，我们主要是通过监听 url 中的 hash 变化来进行路由跳转。

  hash 的优势就是兼容性更好，在老版 IE 中都有运行，问题在于 url 中一直存在 # 不够美观，而且 hash 路由更像是 Hack 而非标准。实现代码如下：

  ```js
  class Routers {
      constructor() {
          this.routes = {};
          this.currentUrl = '';
          this.refresh = this.refresh.bind(this);
          window.addEventListener('load', this.refresh, false);
          window.addEventListener('hashchange', this.refresh, false);
      }
      route(path, callback) {
          this.routes[path] = callback || function() {};
      }
      refresh() {
          this.currentUrl = location.hash.slice(1) || '/';
          this.routes[this.currentUrl]{};
      }
  }
  ```

- history 模式

  History API 的出现使得我们的路由更加便捷美观。我们可以直接使用 History API 的方法和属性。代码实现如下：

  ```js
  class Routers {
      constructor() {
          this.routes = {};
          this._bindPopState();
      }
      init(path) {
  	    history.replaceState({path: path}, null, path);
      	this.routes[path] && this.routes[path]();
      }
      route(path, callback) {
          this.routes[path] = callback || function() {};
      }
      go(psth) {
          history.pushState({path: path}, null, path);
          this.routes[path] && this.routes[path]();
      }
      _bindPopState() {
          window.addEventListener('popstate', e => {
              const path = e.state && e.state.path;
              this.routes[path] && this.routes[path]();
          });
      }
  }
  ```



### 3. 什么是虚拟 DOM，解决了什么问题？

在浏览器渲染网页的过程中，加载到 HTML 文档后，会将文档解析并构建 DOM 树，然后将其与解析 CSS 生成的 CSSOM 树一起结合产生 RenderObject 树，然后将 RenderObject 树渲染成页面（当然中间可能会有一些优化，比如 RenderLayer 树）。这些过程都存在于渲染引擎之中，渲染引擎在浏览器中是与 JavaScript 引擎（JavaScriptCore 也好 V8 也好）分离开的，但为了方便 JS 操作 DOM 结构渲染引擎会暴露一些接口供 JavaScript 调用。由于这两块相互分离，通信是需要付出代价的，因此 JavaScript 调用 DOM 提供的接口性能不咋地。各种性能优化的最佳实践也都在尽可能的减少 DOM 操作次数。

而虚拟 DOM 干了什么？它直接用 JavaScript 实现了 DOM 树（大致上）。组件的 HTML 结构并不会直接生成 DOM，而是映射生成虚拟的 JavaScript DOM 结构，又通过在这个虚拟 DOM 上实现了一个 diff 算法找出最小变更，再把这些变更写入实际的 DOM 中。这个虚拟 DOM 以 JS 结构的形式存在，计算性能会比较好，而且由于减少了实际 DOM 操作次数，性能会有较大提升。



### 4. 请详细说下你对 vue 生命周期的理解？

总共分为8个阶段：创建前/后，载入前/后，更新前/后，销毁前/后。

创建前/后：在 beforeCreate 阶段，vue 实例的挂载元素 el 还没有。

载入前/后：在 beforeMount 阶段，vue 实例的 $el 和 data 都初始化了，但还是挂载之前为虚拟的 dom节点，data.message 还未替换。在 mounted 阶段，vue 实例挂载完成，data.message 成功渲染。

更新前/后：当 data 变化时，会触发 beforeUpdate 和 updated 方法。

销毁前/后：在执行 destroy 方法后，对 data 的改变不会再触发周期函数，说明此时 vue 实例已经解除了事件监听以及和 dom 的绑定，但是 dom 结构依然存在。



### 5. 聊聊你对 Vue.js 的 template 编译的理解？

首先，通过 compile 编译器把 template 编译成 AST 语法树（abstract syntax tree 即源代码的抽象语法结构的树状表现形式），compile 是 createCompiler 的返回值，createCompiler 是用以创建编译器的。另外 compile 还负责合并 option。

然后，AST 会经过 generate（将 AST 语法树转化成 render function 字符串的过程）得到 render 函数，render 的返回值是 VNode，VNode 是 Vue 的虚拟 DOM 节点，里面有（标签名、子节点、文本等等）。



### 6. Vue 组件 data 为什么必须是函数？

每个组件都是 `Vue` 的实例，组件共享 `data` 属性，当 `data` 的值是同一个引用类型的值时，改变其中一个会影响其他的



### 7. $route 和 $router 的区别

`$route` 是“路由信息对象”，包括 `path`，`params`，`hash`，`query`，`fullPath`，`matched`，`name` 等路由信息参数。

而 `$router` 是“路由实例”对象包括了路由的跳转方法，钩子函数等。



### 8. 描述一下 React 生命周期

整个 React 生命周期有3个阶段：创建、更新、卸载。

- 第一阶段

  这是虚拟 DOM 创建的阶段，会依次执行 5 个方法，这 5 个方法中除了 render 方法，其余四个方法在整个生命周期中只调用 1 次，而且一定会调用 1 次：

  `getDefaultProps()`

  这个方法在组件实例创建前，也就是构造函数执行前执行，获取父组件传来的参数，你可以在这里编辑参数并返回新的参数作为 props

  `getInitalState()`

  组件创建的一开始会调用这个方法初始化组件的 state

  `componentWillMount()`

  在组件 render 之前执行该方法，可用来修改 state。React 先调用父组件的这个函数，再调用子组件的这个函数

  `render()`

  开始组件渲染函数，返回一个只有一个根节点的虚拟 DOM。该函数中不能同步的修改组件的状态(state)。

  `componentDidMount()`

  在 render 渲染之后，通知组件已经加载完成。React 先调用子组件的这个函数，再调用父组件的这个函数。从这个函数开始，该组件就可以和其他框架交互了。比如设置计时器或者发起网络请求。

- 第二阶段

  此时该组件已经进入了稳定运行阶段，这个阶段组件可以处理用户交互，或者接收事件更新界面。以下方法在整个生命周期中可以执行很多次，也可以一次也不执行。

  `componentWillReceiveProps()`

  当父容器中对应的参数改变将会调用子组件的该函数。新的 props 将会作为参数传递进来，老的 props 可以根据 this.props 来获取。我们可以在该函数中对 state 作一些处理。并且在该函数中更新 state 不会发生二次渲染

  `shouldComponentUpdate()`

  该函数传递过来两个参数，新的 state 和新的 props。state 和 props 的改变都会调到该函数。该函数主要对传递过来的 nextProps 和 nextState 作判断。如果返回 true 则重新渲染（默认都是返回 true），如果返回 false 则不重新渲染。在某些特定条件下，我们可以根据传递过来的 props 和 state 来选择更新或者不更新，从而提高效率。

  `componentWillUpdate()`

  与 componentWillMount 方法类似，在 render 渲染之前被调用。组件上会接收到新的 props 或者 state。这个函数调用之后，就会把 nextProps 和 nextState 分别设置到 this.props 和 this.state 中。

  `componentDidUpdate()`

  与 componentDidMount 方法类似，在 render 渲染之后被调用，真实 DOM 生成之后调用该函数。传递过来的参数是之前的 props 和 state。

- 第三阶段

  这就是消亡的阶段，主要进行内存的清理和释放的工作。这个阶段只有一个方法，该方法在整个生命周期内调用且仅调用一次。

  `componentWillUnmount()`

  当组件要被从界面上移除的时候，就会调用 componentWillUnmount。在这里进行一些相关的销毁操作，比如撤销定时器，事件监听等等。



### 9. 当组件的 setState 函数被调用之后，发生了什么？

React 会做的第一件事就是把你传递给 setState 的参数对象合并到组件原先的 state。这个事件会导致一个 “reconciliation”（调和）的过程。reconciliation 的最终目标就是，尽可能以最高效的方法，去基于新的 state 来更新 UI。为了达到这个目的，React 会构建一个 React 元素树（你可以把这个想象成一个表示 UI 的一个对象）。一旦这个树构建完毕，React 为了根据新的 state 去决定 UI 要怎么进行改变，它会找出这棵新树和旧树的不同之处。React 能够相对精确地找出哪些位置发生了改变以及如何发生了什么变化，并且知道如何只通过必要的更新来最小化重渲染。



## 七、性能


### 1. JS 相关

- 首先你需要了解 js 时间线，看完你就知道了为什么 js 要放到最下面加载
- 懒执行。懒执行就是将某些逻辑延迟到使用时再计算。该技术可以用于首屏优化，对于某些耗时逻辑并不需要在首屏就使用的，就可以使用懒执行。懒执行需要唤醒，一般可以通过定时器或者事件的调用来唤醒。
- 对 DOM 动画使用 CSS 类而不是 JavaScript
- 使用快速 DOM 遍历 document.getElementById()
- 指针引用存储到浏览器内对象中
- 批量更改 DOM，尤其是在更新样式时
- 在将 DOM 添加到页面之前单独构建 DOM
- 在可滚动的 DIV 中使用缓冲的 DOM



### 2. 渲染相关

- 渲染过程优化

```markdown
首先了解一下渲染机制：

	1）处理 HTML 并构建 DOM 树
	
	2）处理 CSS 构建 CSSOM 树
	
	3）将 DOM 与 CSSOM 合并成一个渲染树
	
	4）根据渲染树来布局，计算每个节点的位置
	
	5）调用 GPU 绘制，合成图层，显示在屏幕上
```

在构建 CSSOM 树时，会阻塞渲染，直至 CSSOM 树构建完成。并且构建 CSSOM 树是一个十分消耗性能的过程，所以应该尽量保证层级扁平，减少过度层叠，越是具体的 CSS 选择器，执行速度越慢。

- **重排和重绘（回流）**

  **重绘：** 和回流是渲染步骤中的一小节，但是这两个步骤对于性能影响很大。

  重绘是当节点需要更改外观而不会影响布局的，比如改变 color 就称为重绘

  **回流：** 是布局或者几何属性需要改变称为回流。

  回流必定会发生重绘，重绘不一定会引发回流。回流所需的成本比重绘高的多，改变深层次的节点很可能导致父节点的一系列回流。

  ```markdown
  下列情况会发生重排：
  
      1）页面初始渲染
  	
  	2）添加/删除可见 DOM 元素
  	
  	3）改变元素位置
  	
  	4) 改变元素尺寸（宽、高、内外边距、边框等）
  	
  	5）改变元素内容（文本或图片等）
  	
  	6）改变窗口尺寸
  ```

  不同的条件下发生重排的范围及程度会不同，某些情况甚至会重排整个页面，比如 resize 或者 scroll。

  ```markdown
  减少重排和重绘：
  
  	1）使用 translate 替代 top
  	
  	2）使用 visibility 替换 display: none，因为前者只会引起重绘，后者会引发回流（改变了布局）
  	
  	3）把 DOM 离线后修改，比如：先把 DOM 给 display: none（有一次 Reflow），然后你修改100次，然后再把它显示出来
  	
  	4）不要把 DOM 节点的属性值放在一个循环里当成循环里的变量
  	
  	5）不要使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局
  	
  	6）动画实现的速度的选择，动画速度越快，回流次数越多，也可以选择使用 requestAnimationFrame
  	
  	7）CSS 选择符从右往左匹配查找，避免 DOM 深度过深
  ```

  将频繁运行的动画变为图层，图层能够阻止该节点回流影响别的元素。比如对于 video 标签，浏览器会自动将该节点变为图层。

- **图层**

  一般来说，可以把普通文档流看成一个图层。特定的属性可以生成一个新的图层。不同的图层渲染互不影响，所以对于某些频繁需要渲染的建议单独生成一个新图层，提高性能。但也不能生成过多的图层，会引起反作用。

  ```markdown
  通过以下几个常用属性可以生成新图层：
  
  	1）3D 变换：translate3d、translateZ
  	
  	2）will-change
  	
  	3）video、iframe 标签
  	
  	4）通过动画实现的 opacity 动画转换
  	
  	5）position: fixed
  ```

- **懒加载**

懒加载就是将不关键的资源延后加载，原理就是只加载自定义区域（通常是可视区域，但也可以是即将进入可视区域）内需要加载的东西。对于图片来说，先设置图片标签的 src 属性为一张点位图，将真实的图片资源放入一个自定义属性中，当进入自定义区域时，就将自定义属性替换为 src 属性，这样图片就会去下载资源，实现了图片懒加载。

懒加载不仅可以用于图片，也可以使用在别的资源上。比如进入可视区域才开始播放视频等等。



### 3. 文件优化

- **图片优化**

  1）计算图片大小 

  对于一张 100 * 100 像素的图片来说，图像上有 10000 个像素点，如果每个像素的值是 RGBA 存储的话，那么也就是说每个像素有 4 个通道，每个通道 1 个字节（8 位 = 1 个字节），所以该图片大小大概为 39KB（10000 * 1 * 4 / 1024）。

  但是在实际项目中，一张图片可能并不需要使用那么多颜色去显示，我们可以通过减少每个像素的调色板来相应缩小图片的大小。

  ```markdown
  了解了如何计算图片大小的知识，那么对于如何优化图片，想必大家已经有 2 个思路了：
  
  	a. 减少像素点
  	
  	b. 减少每个像素点能够显示的颜色
  ```

  2）图片加载优化

  ```markdown
  不用图片。很多时候会使用到很多修饰类图片，其实这类修饰图片完全可以用 CSS 去代替。
  
  	b. 对于移动端来说，屏幕宽度就那么点，完全没有必要去加载原图浪费带宽。
  		一般图片都用 CDN 加载，可以计算出适配屏幕的宽度，然后去请求相应裁剪好的图片。
  		
  	c. 小图使用 base64 格式
  	
  	d. 将多个图标文件整合到一张图片中（雪碧图）
  	
  	e. 选择正确的图片格式：
  		对于能够显示 WebP 格式的浏览器尽量使用 WebP 格式。
  		因为 WebP 格式具有更好的图像数据压缩算法，能带来更小的图片体积，而且拥有肉眼识别无差异的图像质量，缺点就是兼容性并不好；
  		小图使用 PNG，其实对于大部分图标这类图片，完全可以使用 SVG 代替；
  		照片使用 JPEG；
  ```

- **其它文件优化**

  ```markdown
  	1）CSS 文件放在 head 中
  	
  	2）服务端开启文件压缩功能
  	
  	3）将 script 标签放在 body 底部，因为 JS 文件执行会阻塞渲染。当然也可以把 script 标签放在任意位置然后加上 defer，表示该文件会并行下载，但是会放到 HTML 解析完成后顺序执行。对于没有任何依赖的 JS 文件可以加上 async，表示加载和渲染后续文档元素的过程将和 JS 文件的加载与执行并行无序进行。
  	
  	4）执行 JS 代码过长会卡住渲染，对于需要很多时间计算的代码可以考虑使用 Webworker。Webworker 可以让我们另开一个线程执行脚本而不影响渲染。
  ```

- **CDN**

  静态资源尽量使用 CDN 加载，由于浏览器对于单个域名有并发请求上限，可以考虑使用多个 CDN 域名。对于 CDN 加载静态资源需要注意 CDN 域名要与主站不同，否则每次请求都会带上主站的 Cookie。



### 4. 网络相关

- **缓存**

  缓存对于前端性能优化来说是个很重要的点，良好的缓存策略可以降低资源的重复加载提高网页的整体加载速度。

  ```markdown
  1）实现强缓存可以通过两种响应头实现：Expires 和 Cache-Control
  
  2）如果缓存过期了，我们就可以使用 Last-Modified 和 If-Modified-Since、Etag 和 If-None-Match 来解决问题。如果缓存有效会返回 304。同样也需要客户端和服务器共同实现。
  
  3）选择合适的缓存策略
  对于大部分的场景都可以使用强缓存配合协商缓存解决，但是在一些特殊的地方可能需要选择特殊的缓存策略
  
  	a. 对于某些不需要缓存的资源，可以使用 Cache-Control: no-store 并配合 Etag 使用，表示该资源不需要缓存
  	
  	b. 对于频繁变动的资源，可以使用 Cache-Control: no-cache 并配合 Etag 使用，表示该资源已被缓存，但是每次都会发送请求询问资源是否更新。
  	
  	c. 对于代码文件来说，通常使用 Cache-Control: max-age=31536000 并配合策略缓存使用，然后对文件进行指纹处理，一旦文件名变动就会立刻下载新的文件。
  ```

- **使用HTTP/2.0**

  因为浏览器会有并发请求限制，在 HTTP / 1.1 时代，每个请求都需要建立和断开，消耗了好几个 RTT 时间，并且由于 TCP 慢启动的原因，加载体积大的文件会需要更多的时间。

  ```markdown
  在 HTTP / 2.0 中引入了多路复用，能够让多个请求使用同一个 TCP 链接，极大的加快了网页的加载速度。并且还支持 Header 压缩，进一步的减少了请求的数据大小。
  
  ```

- **预加载**

  开发中，可能会遇到这样的情况。有些资源不需要马上用到，但是希望尽早获取，这时候就可以使用预加载。

  ```html
  <link rel="preload" href="http://www.aaa.com">
  
  ```

  预加载其实是声明式的 fetch，强制浏览器请求资源，并且不会阻塞 onload 事件，可以使用以下代码开启预加载。

- **预渲染**

  以通过预渲染将下载的文件预先在后台渲染，可以使用以下代码开启预渲染

  ```html
  <link rel="prerender" href="http://www.aaa.com">
  
  ```

  预渲染虽然可以提高页面的加载速度，但是要确保该页面百分百会被用户在之后打开，否则就白白浪费资源去渲染。



### 5. 构建工具

用 webpack 优化项目

- 对于 Webpack4，打包项目使用 production 模式，这样会自动开启代码压缩
- 使用 ES6 模块来开启 tree  shaking，这个技术可以移除没有使用的代码
- 优化图片，对于小图可以使用 base64 的方式写入文件中
- 按照路由拆分代码，实现按需加载
- 给打包出来的文件名添加哈希，实现浏览器缓存文件
