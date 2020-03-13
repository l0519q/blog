# 基础

## 一、HTML、HTTP、web 综合问题

### 1. 前端需要注意哪些SEO

* 合理的 `title`、`description`、`keywords`：搜索对这三项的权重逐个减小，`title` 值强调重点即可，重要关键词出现不要超过两次，而且要靠前，不同页面 `title` 要有所不同；`description` 把页面内容高度概括，长度合适，不可过分堆砌关键词，不同页面 `description` 有所不同；`keywords` 列举重要关键词即可。
* 语义化的 `HTML` 代码，符合W3C规范：语义化代码让搜索引擎容易理解网页。
* 重要内容 `HTML` 代码放在最前：搜索引擎抓取 `HTML` 顺序是从上到下，有的搜索引擎对抓取长度有限制，保证重要内容一定会被抓取。
* 重要内容不要用 `js` 输出：爬虫不会执行 `js` 获取内容。
* 少用 `iframe`：搜索引擎不会抓取 `iframe` 中的内容。
* 非装饰性图片必须加 `alt`。
* 提高网站速度：网站速度是搜索引擎排序的一个重要指标。  

### 2. `<img>` 的 `title` 和 `alt` 有什么区别

* `title`：通常当鼠标滑动到元素上的时候显示。
* `alt`：是 `<img>` 的特有属性，是图片内容的等价描述，用于图片无法加载时显示、读屏器阅读图片。可提高图片可访问性，除了纯装饰图片外都必须设置有意义的值，搜索引擎会重点分析。  

### 3. HTTP 的几种请求方法用途

* `GET` 方法：发送一个请求来取得服务器上的某一资源。
* `POST` 方法：向 `URL` 指定的资源提交数据或附加新的数据。
* `PUT` 方法：跟 `POST` 方法很像，也是向服务器提交数据。但是，它们之间有不同。`PUT` 指定了资源在服务器上的位置，而 `POST` 没有。
* `HEAD` 方法：只请求页面的首部。
* `DELETE` 方法：删除服务器上的某资源。
* `OPTIONS` 方法：它用于获取当前 `URL` 所支持的方法。如果请求成功，会有一个 `Allow` 的头包含类似 `"GET,POST"` 这样的信息。  

### 4 . 如何进行网站性能优化

* `content` 方面
  - 减少 `HTTP` 请求：合并文件、`CSS` 精灵、`inline Image`
  - 减少 `DNS` 查询：`DNS` 缓存、将资源分布到恰当数量的主机名
  - 减少 `DNS` 元素数量

* `Server` 方面
  - 使用 `CDN`
  - 配置 `ETag`
  - 对组件使用 `Gzip` 压缩

* `Cookie` 方面
  - 减小 `cookie` 大小

* `css` 方面
  - 将样式表放到页面顶部
  - 不使用 `CSS` 表达式
  - 使用 `<link>` 不使用 `@import`

* `JavaScript` 方面
  - 将脚本放到页面底部
  - 将 `javascript` 和 `css` 从外部引入
  - 压缩 `javascript` 和 `css`
  - 删除不需要的脚本
  - 减少 `DOM` 访问

* 图片方面
  - 优化图片：根据实际颜色需要选择色泽、压缩
  - 优化 `css` 精灵
  - 不要在 `HTML` 中拉伸图片  

### 5. HTTP状态码及其含义

* `1XX`：信息状态码
  - `100 Continue` 继续，一般在发送 `post` 请求时，已发送了 `http header` 之后服务端将返回此信息，表示确认，之后发送具体参数信息

* `2XX`：成功状态码
  - `200 OK` 正常返回信息
  - `201 Created` 请求成功并且服务器创建了新的资源
  - `202 Accepted` 服务器已接受请求，但尚未处理

* `3XX`：重定向
  - `301 Moved Permanently` 请求的网页已永久移动到新位置
  - `302 Found` 临时性重定向
  - `303 See Other` 临时重定向，且总是使用 `GET` 请求新的 `URI`
  - `304 Not Modified` 自从上次请求后，请求的网页未修改过

* `4XX`：客户端错误
  - `400 Bad Request` 服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求
  - `401 Unauthorized` 请求未授权
  - `403 Forbidden` 禁止访问
  - `404 Not Found` 找不到与 `URI` 相匹配的资源

* `5XX`：服务器错误
  - `500 Internal Server Error` 最常见的服务器端错误
  - `503 Service Unavailable` 服务器端暂时无法处理请求（可能是过载或维护）  

### 6. 语义化的理解

* 用正确的标签做正确的事。
* `HTML` 语义化就是让页面的内容结构化，便于对浏览器、搜索引擎解析。
* 在没有样式 `CSS` 情况下也以一种文档格式显示，并且是容易阅读的。
* 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。  

### 7. 对浏览器内核的理解

* 主要分成两部分：渲染引擎（ `layout engineer` 或 `Rendering Engine` ）和 `JS` 引擎。
* 渲染引擎：负责取得网页的内容（ `HTML`、`XML`、图像等等）、整理讯息（例如加入 `CSS` 等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。
* `JS` 引擎：解析和执行 `javascript` 来实现网页的动态效果。
* 最开始渲染引擎和 `JS` 引擎并没有区分得很明确，后来 `JS` 引擎越来越独立，内核就倾向于只指渲染引擎。  

### 8. HTML5 有哪些新特性？移除了哪些元素？

* `HTML5` 现在已经不是 `SGML` 的子集，主要是关于图像、位置、存储、多任务等功能的增加。
  - 绘画 `canvas`
  - 用于媒介播放的 `video` 和 `audio` 元素
  - 本地离线存储 `localStorage` 长期存储数据，浏览器关闭后数据不丢失；`sessionStorage` 数据在窗口或浏览器关闭后自动删除
  - 语义化更好的结构元素：`header`、`footer`、`main`、`nav`、`section`、`article`、`aside`
  - 表单控件：`calendar`、`date`、`time`、`email`、`url`、`search`
  - 新的技术：`webworker`、`websocket`、`Geolocation`

* 移除的元素：
  - 纯表现的元素：`basefont`、`big`、`center`、`font`、`strike`
  - 对可用性产生负面影响的元素：`frame`、`frameset`、`noframes`

* 支持 `HTML5` 新标签：
  - `IE6/IE7/IE8` 支持通过 `document.createElement` 方法产生的标签
  - 可以利用这一特性让这些浏览器支持 `HTML5` 新标签
  - 浏览器支持新标签后，还需要添加标签默认的样式  

### 9. HTML5 的离线存储怎么使用，工作原理

* 在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件。
* 原理：`HTML5` 的离线存储是基于一个新建的 `.appcache` 文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，这些资源就会像 `cookie` 一样被存储下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。
* 如何使用：
  - 页面头部像下面一样加入一个 `manifest` 的属性
  - 在 `cache.manifest` 文件编写离线存储的资源
  - 在离线状态时，操作 `window.applicationCache` 进行需求实现 

```json
CACHE MANIFEST
#v0.11
CACHE:
js/app.js
css/style.css
NETWORK:
resourse/logo.png
FALLBACK:
/offline.html
```

<br>

### 10. 浏览器是怎么对 HTML5 的离线储存资源进行管理和加载的

* 在线的情况下，浏览器发现 `html` 头部有 `manifest` 属性，它会请求 `manifest` 文件，如果是第一次访问 `app`，那么浏览器就会根据 `manifest` 文件的内容下载相应的资源并且进行离线存储。如果已经访问过 `app` 并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的 `manifest` 文件与旧的 `manifest` 文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。
* 离线的情况下，浏览器就直接使用离线存储的资源。  

### 11. cookie、sessionStorage 和 localStorage 的区别

* `cookie` 是网站为了标识用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。`cookie` 数据始终在同源的 `http` 请求中携带（即使不需要），即会在浏览器和服务器间来回传递。`sessionStorage` 和 `localStorage` 不会自动把数据发给服务器，仅在本地保存。
* 存储大小：
  - `cookie` 数据大小不能超过 4k；
  - `sessionStorage` 和 `localStorage` 虽然也有存储大小的限制，但比 `cookie` 大得多，可以达到 5M 或更大。

* 有效时间：
  - `localStorage` 存储持久数据，浏览器关闭后数据不丢失除非用户主动删除数据；
  - `sessionStorage` 数据在当前浏览器窗口关闭后自动删除；
  - `cookie` 在设置的 `cookie` 过期时间之前一直有效，即使窗口或浏览器关闭。

* 作用域：
  - `sessionStorage` 不在不同的浏览器窗口共享，即使是同一个页面；
  - `localStorage` 和 `cookie` 在所有同源窗口都是共享的。  

### 12. cookie 和 session 的区别

* `cookie` 存储于浏览器端，而 `session` 存储于服务器端。
* `cookie` 的安全性相比于 `session` 较弱，别人可以分析存放在本地的 `cookie` 并进行 `cookie` 欺骗，考虑到安全应当使用  `session`。
* `session` 会在一定时间内保存在服务器上，当访问增多时，会比较占用服务器资源，所以考虑到服务器性能方面，应当使用  `cookie`。
* `cookie` 存储容量有限制，单个 `cookie` 保存数据不能超过 4k，且很多浏览器限制一个站点最多保存 20 个 `cookie` 。而对于 `session`，其默认大小一般是 1024k。    

### 13. iframe 有哪些缺点

* `iframe` 会阻塞主页面的 `onload` 事件；
* 搜索引擎的检索程序无法解读这种页面，不利于 `SEO`；
* `iframe` 和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载；
* 使用 `iframe` 之前需要考虑这两个缺点。如果需要使用 `iframe`，最好是通过 `javascript` 动态给 `iframe` 添加 `src` 属性值，这样可以绕开以上两个问题。  

### 14. web 标准以及 w3c 标准是什么

标签闭合、标签小写、不乱嵌套、使用外链 `css` 和 `js`、结构行为表现的分离  

### 15. xhtml 和 html 有什么区别

* 功能上的区别：主要是 `XHTML` 可兼容各大浏览器、手机以及 `PDA`，并且浏览器也能快速正确编译网页。
* 书写习惯的区别：`XHTML` 元素必须被正确嵌套、闭合、区分大小写，文档必须拥有根元素。  

### 16. Doctype 的作用，严格模式与混杂模式如何区分？它们有何意义？

* `<!DOCTYPE>` 声明位于文档中的最前面，处于 `<html>` 标签之前，告知浏览器的解析器用什么文档类型规范来解析这个文档。
* 严格模式的排版和 `js` 运作模式是以该浏览器支持的最高标准运行。
* 在混杂模式中，页面以宽松的向后兼容的方式显示，模拟老式浏览器的行为以防止站点无法工作。`DOCTYPE` 不存在或格式不正确会导致文档以混杂模式呈现。  

### 17. 行内元素有哪些？块级元素有哪些？空(void)元素有哪些？行内元素和块级元素有什么区别？

* 行内元素：`a span img input select strong`
* 块级元素：`div ul ol li dl dt dd h1~h6 p`
* 空元素：`<br> <hr> <img> <input> <link> <meta>`
* 行内元素不可以设置宽高，不独占一行
* 块级元素可以设置宽高，独占一行  

### 18. HTML 全局属性(global attribute)有哪些

* `class`：为元素设置类标识
* `id`：元素 id，文档内唯一
* `data-*`：为元素增加自定义属性
* `draggable`：设置元素是否可拖拽
* `lang`：元素内容的语言
* `style`：行内 `css` 样式
* `title`：元素相关的建议信息  

### 19. Canvas 和 SVG 有什么区别

* `svg` 绘制出来的每一个图形的元素都是独立的 `DOM` 节点，能够方便的绑定事件或用来修改。`canvas` 输出的是一整幅画布。
* `svg` 输出的图形是矢量图形，后期可以修改参数来自由放大缩小，不会失真和锯齿。而 `canvas` 输出标量画布，就像一张图片一样，放大会失真或锯齿。  

### 20. HTML5 为什么只需要写 \<!DOCTYPE HTML>

* `HMTL5` 不基于 `SGML`，因此不需要对 `DTD` 进行引用，但是需要 `doctype` 来规范浏览器的行为。
* 而 `HTML4.01` 基于 `SGML`，所以需要对 `DTD` 进行引用，才能告知浏览器文档所使用的文档类型。    

### 21. 网页验证码是干嘛的，是为了解决什么安全问题

* 区分用户是计算机还是人的公共全自动程序，可以防止恶意破解密码、刷票、论坛灌水。
* 有效防止黑客对某一个特定注册用户用特定程序暴力破解方式进行不断的登陆尝试。  

### 22. viewport

```js
 <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
    // width    设置viewport宽度，为一个正整数，或字符串‘device-width’
    // device-width  设备宽度
    // height   设置viewport高度，一般设置了宽度，会自动解析出高度，可以不用设置
    // initial-scale    默认缩放比例（初始缩放比例），为一个数字，可以带小数
    // minimum-scale    允许用户最小缩放比例，为一个数字，可以带小数
    // maximum-scale    允许用户最大缩放比例，为一个数字，可以带小数
    // user-scalable    是否允许手动缩放
```

***怎样处理移动端 `1px` 被渲染成 `2px` 的问题？***

**局部处理**

* `meta` 标签中的 `viewport` 属性，`initial-scale` 设置为 `1`
* `rem` 按照设计稿标准走，外加利用 `transform` 的 `scale(0.5)` 缩小一半即可

**全局处理**

* `meta` 标签中的 `viewport` 属性，`initial-scale` 设置为 `0.5`
* `rem` 按照设计稿标准走即可  

### 23. 渲染优化

* 禁止使用 `iframe`（阻塞父文档 `onload` 事件）
  - `iframe` 会阻塞主页面的 `onload` 事件
  - 搜索引擎的检索程序无法解读这种页面，不利于 SEO
  - `iframe` 和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载
  - 使用 `iframe` 之前需要考虑这两个缺点，如果需要使用 `iframe`，最好是通过 `javascript` 动态给 `iframe` 添加 `src` 属性值，这样可以绕开以上两个问题
  
* 禁止使用 `gif` 图片实现 `loading` 效果（降低 `CPU` 消耗，提升渲染性能）
* 使用 `CSS3` 代码代替 `js` 动画（尽可能避免重排重绘以及回流）
* 对于一些小图标，可以使用 base64 位编码，以减少网络请求，但不建议大图使用，比较耗费 `CPU` 
  - 小图标优势在于
    - 减少 `HTTP` 请求
    - 避免文件跨域
    - 修改及时生效

* 页面头部的 `<style></style>` `<script></script>` 会阻塞页面（因为 `Renderer` 进程中 `js` 线程和渲染线程是互斥的）
* 页面中空的 `href` 和 `src` 会阻塞页面其它资源的加载（阻塞下载进程）
* 网页 `gzip`，`CDN` 托管，`data` 缓存，图片服务器
* 前端模板 js + 数据，减少由于 `HTML` 标签导致的带宽浪费，前端用变量保存 ajax 请求结果，每次操作本地变量，不用请求，减少请求次数
* 用 `innerHTML` 代替 `DOM` 操作，减少 `DOM` 操作次数，优化 `javascript` 性能
* 当需要设置的样式很多时设置 `className` 而不是直接操作 `style`
* 少用全局变量、缓存 `DOM` 节点查找的结果，减少 `IO` 读取操作
* 图片预加载，将样式表放在顶部，将脚本放在底部 
* 对普通的网站有一个统一的思路，就是尽量向前端优化、减少数据库操作、减少磁盘 `IO`  

### 24. 你做的页面在哪些浏览器测试过，它们的内核分别是什么？

* `IE`：`trident` 内核
* `Firefox`：`gecko` 内核
* `Safari`：`webkit` 内核
* `Opera`：以前是 `presto` 内核，现已改用 Chrome 的 `Blink` 内核
* `Chrome`：`Blink` 内核（基于 `webkit`，Google 和 Opera Software 共同开发）  

### 25. div + css 布局较 table 布局有什么优点？

* 改版的时候更方便，只要改 `css` 文件。
* 页面加载速度更快、结构化清晰、页面显示简洁。
* 表现与结构相分离。
* 易于优化（`SEO`）搜索引擎更友好，排名更容易靠前。  

### 26. 渐进增强和优雅降级之间的不同

* 渐进增强：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。
* 优雅降级：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。

> 区别：优雅降级是从复杂的现状开始，并试图减少用户体验的供给，而渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要。降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带。

### 27. 为什么利用多个域名来存储网站资源会更有效？

* `CDN` 缓存更方便
* 突破浏览器并发限制
* 节约 `cookie` 带宽
* 节约主域名的连接数，优化页面响应速度
* 防止不必要的安全问题  

### 28. 简述一下 src 与 href 的区别

* `src` 用于替换当前元素，`href` 用于在当前文档和引用资源之间确立联系。
* `src` 是 `source` 的缩写，指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求 `src` 资源时会将其指向的资源下载并应用到文档内，例如 `js` 脚本，`img` 图片和 `frame` 等元素。

> `<script src="index.js"></script>` 当浏览器解析到该元素时，会暂停其它资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也是如此，类似于将所指向资源嵌入当前标签内。这也是为什么将 `js` 脚本放在底部而不是头部。

* `href` 是 `Hypertext Reference` 的缩写，指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，如果我们在文档中添加。
* `<link href="common.css" ref="stylesheet"/>` 那么浏览器会识别该文档为 `css` 文件，就会并行下载资源并且不会停止对当前文档的处理。这也是为什么建议使用 `link` 方式来加载 `css`，而不是使用 `@import` 方式。  

### 29. 网页制作会用到的图片格式有哪些？

* `PNG-8`、`PNG-24`、`JPEG`、`GIF`、`SVG`
* **WebP**：`WebP` 格式，谷歌开发的一种旨在加快图片加载速度的图片格式。图片压缩体积大约只有 `JPEG` 的 `2/3`，并能节省大量的服务器带宽资源和数据空间。Facebook Ebay 等知名网站已经开始测试并使用 `WebP` 格式。在质量相同的情况下，`WebP` 格式图像的体积要比 `JPEG` 格式图像小 `40%`。
* **APNG**：全称是 “Animated Portable Network Graphics”，是 `PNG` 的位图动画扩展，可以实现 `PNG` 格式的动态图片效果。04年诞生，但一直得不到各大浏览器厂商的支持，直到得到 `iOS safari 8` 的支持，有望代替 `GIF` 成为下一代动态图标准  

### 30. 从用户刷新网页开始，一次 js 请求一般情况下有哪些地方会有缓存处理？

> `DNS` 缓存，`CDN` 缓存，浏览器缓存，服务器缓存  

### 31. 一个页面上有大量的图片（大型电商网站），加载很慢，有哪些方法优化这些图片的加载，给用户更始的体验。

* 图片懒加载，在页面上的未可视区域可以添加一个滚动事件，判断图片位置与浏览器顶端的距离与页面的距离，如果前者小于后者，优先加载。
* 如果为幻灯片、相册等，可以使用图片预加载技术，将当前展示图片的前一张和后一张优先下载。
* 如果图片为 css 图片，可以使用 `CSS Sprite`、`SVG Sprite`、`Iconfont`、`base64` 等技术。
* 如果图片过大，可以使用特殊编码的图片，加载时会先加载一张压缩得特别厉害的缩略图，以提高用户体验。
* 如果图片展示区域小于图片的真实大小，则应在服务器端根据业务需要先行进行图片压缩，图片压缩后大小与展示一致。  

### 32. web 开发中会话跟踪的方法有哪些

* `cookie`
* `session`
* `url` 重写
* 隐藏 `input`
* `ip` 地址  

### 33. HTTP request 报文结构

1. 首行是 **Request-Line** 包括：**请求方法、请求URI、协议版本、CRLF**
2. 首行之后是若干行**请求头**，包括 **general-header、request-header 或者 entity-header**，每一行以 CRLF 结束
3. 请求头和消息实体之间有一个 **CRLF** 分隔
4. 根据实际请求需要可能包含一个**消息实体**。一个请求报文例子如下：

```
GET /Protocols/rfc2616/rfc2616-sec5.html HTTP/1.1
Host: www.w3.org
Connection: keep-alive
Cache-Control: max-age=0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36
Referer: https://www.google.com.hk/
Accept-Encoding: gzip,deflate,sdch
Accept-Language: zh-CN,zh;q=0.8,en;q=0.6
Cookie: authorstyle=yes
If-None-Match: "2cc8-3e3073913b100"
If-Modified-Since: Wed, 01 Sep 2004 13:24:52 GMT

name=qiu&age=25
```

<br>

### 34. HTTP response 报文结构

* 首行是状态行包括：**HTTP版本、状态码、状态描述**，后面跟一个 CRLF
* 首行之后是**若干行响应头**，包括：**通用首部、响应首部、实体首部**
* 响应首部和响应实体之间用一个 **CRLF** 空行分隔
* 最后是一个可能的**消息实体**。响应报文例子如下：

```
HTTP/1.1 200 OK
Date: Tue, 08 Jul 2014 05:28:43 GMT
Server: Apache/2
Last-Modified: Wed, 01 Sep 2004 13:24:52 GMT
ETag: "40d7-3e3073913b100"
Accept-Ranges: bytes
Content-Length: 16599
Cache-Control: max-age=21600
Expires: Tue, 08 Jul 2014 11:28:43 GMT
P3P: policyref="http://www.w3.org/2001/05/P3P/p3p.xml"
Content-Type: text/html; charset=iso-8859-1

{"name": "qiu", "age": 25}
```

  <br>

## 二、CSS 

### 1. css sprite 是什么，有什么优缺点

* 概念：将多个小图片拼接到一个图片中。通过 `background-position` 和元素尺寸调节需要显示的背景图案。
* 优点：
  - 减少 `HTTP` 请求数，极大地提高页面加载速度
  - 增加图片信息重复度，提高压缩比，减少图片大小
  - 更换风格方便，只需在一张或几张图片上修改颜色或样式即可实现

* 缺点：
  * 图片合并麻烦
  * 维护麻烦，修改一个图片可能需要重新布局整个图片、样式  

### 2. `display: none;` 与 `visibility: hidden;` 的区别

* 联系：它们都能让元素不可见
* 区别：
  * `display: none;` 会让元素完全从渲染树中消失，渲染的时候不占据任何空间；`visibility: hidden;` 不会让元素从渲染树中消失，元素继续占据空间，只是内容不可见。
  * `display: none;` 是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示；`visibility: hidden;` 是继承属性，子孙节点消失由于继承了 `hidden`，通过设置 `visibility: visible;` 可以让子孙节点显示。
  * 修改常规流中元素的 `display` 通常会造成文档重排；修改 `visibility` 属性只会造成本元素的重绘。
  * 读屏器不会读取 `display: none;` 元素内容；会读取 `visibility: hidden;` 元素内容。    

### 3. `link` 与 `@import` 的区别

* `link` 是 HTML 方式，`@import` 是 CSS 方式
* `link` 最大限度支持并行下载，`@import` 过多嵌套导致串行下载，出现 `FOUC`（文档样式短暂失效）
* `link` 可以通过 `rel="alternate stylesheet"` 指定候选样式
* 浏览器对 `link` 支持早于 `@import`，可以使用 `@import` 对老浏览器隐藏样式
* `@import` 必须在样式规则之前，可以在 css 文件中引用其它文件
* 总体来说：`link` 优于 `@import`  

### 4. 什么是 FOUC？如何避免

* `Flash Of Unstyled Content`：用户定义样式表加载之前浏览器使用默认样式显示文档，用户样式加载渲染之后再重新显示文档，造成页面闪烁。
* 解决方法：把样式表放到文档的 `head`  

### 5. 如何创建块级格式上下文(block formatting context)，BFC 有什么用

* 创建规则：
  * 根元素
  * 浮动元素（`float` 不取值为 `none`）
  * 绝对定位元素（`position` 取值为 `absolute` 或 `fixed`）
  * `display` 取值为 `inline-block`、`table-cell`、`table-caption`、`flex`、`inline-flex` 之一的元素
  * `overflow` 不取值为 `visible` 的元素

* 作用：
  * 可以包含浮动元素
  * 不被浮动元素覆盖
  * 阻止父子元素的 `margin` 折叠  

### 6. 清除浮动的几种方式

* 父级 `div` 定义 `height`
* 结尾处加空 `div` 标签 `clear: both;`
* 父级 `div` 定义伪元素 `::after` 和 `zoom`
* 父级 `div` 定义 `overflow: hidden;`
* 父级 `div` 也浮动，需要定义宽度
* 结尾处加 `br` 标签 `clear: both;`
* 比较好的是第 3 种，好多网站都这么用  

### 7. 为什么要初始化 CSS 样式？

* 因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对 `CSS` 初始化往往会出现浏览器之间的页面显示差异。
* 当然，初始化样式会对 `SEO` 有一定的影响，但鱼和熊掌不可兼得，但力求影响最小的情况下初始化  

### 8. display 有哪些值

* `block` 转换成块级元素
* `inline` 转换成行内元素
* `inline-block` 转换成行级块元素，像行内元素一样显示，内容像块类元素一样显示
* `none` 设置元素不可见
* `table` 此元素会作为块级表格来显示
* `list-item` 像块级元素一样显示，并添加样式列表标记
* `inherit` 规定应该从父元素继承 `display` 属性的值  

### 9. CSS 优先级算法如何计算

* 优先级就近原则，同权重情况下样式定义最近者为准
* 载入样式以最后载入的定位为准
* 优先级为：`!important > id > class > tag`  

### 10. 谈谈浮动和清除浮动

浮动的框可以向左或向右移动，直到它的外边缘碰到包含框或另一个浮云框的边框为止。由于浮动框不在文档的普通流中，所以文档的普通流的块框表现得就像浮动框不存在一样。浮动的块框会漂浮在文档普通流的块框上。  

### 11. position 有哪些值

* `absolute`：生成绝对定位的元素，相对于 `static` 定位以外的第一个父元素进行定位
* `fixed`：生成绝对定位的元素，相对于浏览器窗口进行定位
* `relative`：生成相对定位的元素，相对于其正常位置进行定位
* `static`：默认值。没有定位，元素出现在正常的流中
* `inherit`：规定从父元素继承 `position` 属性的值  

### 12. display: inline-block 什么时候不会显示间隙？

* 移除空格
* 使用 `margin` 负值
* 使用 `font-size: 0;`
* `letter-spacing`
* `word-spacing`  

### 13. PNG/GIF/JPG 的区别及如何选

* `GIF`
  * 8 位像素，256 色
  * 无损压缩
  * 支持简单动画

* `JPEG`
  * 颜色限于 256
  * 有损压缩
  * 可控制压缩质量
  * 不支持透明
  * 适合照片

* `PNG`
  * 有 `PNG8` 和 `truecolor PNG`
  * `PNG8` 类似 `GIF` 颜色上限为 256，文件小，支持 `alpha` 透明度，无动画
  * 适合图标、背景、按钮  

### 14. 行内元素 float: left 后是否变为块级元素？

> 行内元素设置成浮动之后变得更加像是 `inline-block`（行内块级元素，设置成这个属性的元素会同时拥有行内和块级的特性，最明显的不同是它的默认宽度不是 `100%`），这时候给行内元素设置 `padding-top` 和 `padding-bottom` 或者 `width`、`height` 都是有效果的。  

### 15. 在网页中应该使用奇数还是偶数的字体？为什么？

偶数字号相对更容易和 web 设计的其它部分构成比例关系  

### 16. 如果需要手动写动画，你认为最小时间间隔是多久，为什么？

多数显示器默认频率是 `60Hz`，即 `1` 秒刷新 `60` 次，所以理论上最小时间间隔为 `1/60 * 1000ms = 16.7ms`  

### 17. CSS 在性能优化方面的实践

* `css` 压缩与合并、`Gzip` 压缩
* `css` 文件放在 `head` 里，不要用 `@import`
* 尽量用缩写、避免用滤镜、合理使用选择器  

### 18. CSS3 动画

* 依靠 `CSS3` 中提出的三个属性：`transition`、`transform`、`animation`
* `transition`：定义了元素在变化过程中是怎么样的，包含 `transition-property`、`transition-duration`、`transition-timing-function`、`transition-delay`。
* `transform`：定义元素的变化结果，包含 `rotate`、`scale`、`skew`、`translate`。
* `animation`：定义了动作的每一帧（`@keyframes`）有什么效果，包括 `animation-name`、`animation-duration`、`animation-timing-function`、`animation-delay`、`animation-iteration-count`、`animation-direction`  

### 19. base64 的原理及优缺点

* 优点可以加密，减少了 `HTTP` 请求
* 缺点是需要消耗 `CPU` 进行编解码  

### 20. 几种常见的 CSS 布局

**流体布局**

``` html
<div class="container">
    <div class="left"></div>
    <div class="right"></div>
    <div class="main"></div>
</div>
```

``` css
.left {
    float: left;
    width: 100px;
    height: 200px;
    background: red;
}
.right {
    float: right;
    width: 200px;
    height: 200px;
    background: blue;
}
.main {
  	height: 200px;
    margin-left: 120px;
    margin-right: 220px;
    background: green;
}
```

  <br>

**圣杯布局**

``` html
<div class="container">
    <div class="main"></div>
    <div class="left"></div>
    <div class="right"></div>
</div>
```

``` css
.container {
    margin-left: 120px;
    margin-right: 220px;
}
.main {
    float: left;
    width: 100%;
    height: 300px;
    background: green;
}
.left {
  	float: left;	
    position: relative;
    left: -120px; 
  	width: 100px;
    height: 300px;
    margin-left: -100%;
    background: red;
}
.right {
  	float: right;
    position: relative;
    right: -220px;
    width: 200px;
    height: 300px;    
    margin-left: -200px;
    background: blue;
}
```

  <br>

**双飞翼布局**

``` html
<div class="content">
    <div class="main"></div>
</div>
<div class="left"></div>
<div class="right"></div>

```

``` css
.content {
    float: left;
    width: 100%;
}
.main {
    height: 200px;
    margin-left: 110px;
    margin-right: 220px;
    background: green;
}
.main::after {
    content: '';
    display: block;
  	height: 0;
    font-size: 0;        
    clear: both;
  	zoom: 1;
}
.left {
    float:left;
  	width: 100px;
    height: 200px;    
    margin-left: -100%;
    background: red;
}
.right {
    float: right;
  	width: 200px;
    height: 200px;    
    margin-left: -200px;
    background: blue;
}
```

<br>

### 21. 什么是外边距重叠？重叠的结果是什么？

> 外边距重叠就是 margin-collapse

* 在 CSS 当中，相邻的两个盒子（可能是兄弟关系也可能是祖先关系）的外边距可以结合成一个单独的外边距。这种合并外边距的方式被称为折叠，并且因而所结合成的外边距称为折叠外边距。  

**折叠结果遵循下列计算规则：**

* 两个相邻的外边距都是正数时，折叠结果是它们两者之间较大的值。
* 两个相邻的外边距都是负数时，折叠结果是两者绝对值的较大值。
* 两个外边距一正一负时，折叠结果是两者的相加的和。  

### 22. rgba() 和 opacity 的透明效果有什么不同？

* `rgba()` 和 `opacity` 都能实现透明效果，但最大的不同是 `opacity` 作用于元素，以及元素内的所有内容的透明度。
* 而 `rgba()` 只作用于元素的颜色或其背景色。（设置 `rgba` 透明的元素的子元素不会继承透明效果）  

### 23. css 中可以让文字在垂直和水平方向上重叠的两个属性是什么？

* 垂直方向：`line-height`
* 水平方向：`letter-spacing`  

### 24. 如何垂直居中一个浮动元素？	

``` scss
/* 方法一：已知元素的宽高 */

.wrapper {
	position: relative;
	div {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 200px;
		height: 200px;
		margin-top: -100px;	
		margin-left: -100px;
	}
}

/* 方法二 */

.wrapper {
	position: relative;
	div {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		width: 200px;
		height: 200px;
		margin: auto;
	}
}
```

**如何垂直居中一个`<img>`？（用更简便的方法）**

``` css
/**<img>的容器设置如下**/
.container {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}
```

<br>

### 25. px 和 em 的区别

* `px` 和 `em` 都是长度单位，区别是：`px` 的值是固定的，指定是多少就是多少，计算比较容易。`em` 的值不是固定的，并且 `em` 会继承父级元素的字体大小。
* 浏览器的默认字体大小都是 `16px`，所以未经调整的浏览器都符合：`1em=16px`。那么 `12px=0.75em`，`10px=0.625em`。  

### 26. Sass、Less 是什么？大家为什么要使用它们？

* 它们是 `CSS` 预处理器，是 `CSS` 上的一种抽象层。它们是一种特殊的语法/语言编译成 `CSS`。
* 例如 Less 是一种动态样式语言，将 CSS 赋予了动态语言的特性，如变量、继承、运算、函数。`LESS` 既可以在客户端上运行（支持 `IE6`、`Webkit`、`Firefox`），也可以在服务端运行（借助 `Node.js`）  

**为什么要使用它们？**

* 结构清晰，便于扩展。
* 可以方便地屏蔽浏览器私有语法差异。封装对浏览器语法差异的重复处理，减少无意义的机械劳动。
* 可以轻松实现多重继承。
* 完全兼容 CSS 代码，可以方便地应用到老项目中。LESS 只是在 CSS 语法上做了扩展，所以老的 CSS 代码也可以与 LESS 代码一同编译。  

### 27. 知道 css 有个 content 属性吗？有什么作用？有什么应用？

> css 的 `content` 属性专门应用在 `before/after` 伪元素上，用于来插入生成内容。最常见的应用是利用伪元素清除浮动。

``` css
/* 一种常见利用伪元素清除浮动的代码 */
.clearfix::after {
    content: "";  
    display: block;
    clear: both;
}
.clearfix {
    *zoom: 1;
}
```

<br>

### 28. 水平居中的方法

* 元素为行内元素，设置父元素 `text-align: center;`
* 如果元素宽度固定，可以设置左右 `margin` 为 `auto`
* 如果元素为绝对定位，设置父元素 `position` 为 `relative`，元素设置`left: 0; right: 0; margin: auto;`
* 使用 `flex-box` 布局，指定 `justify-content` 属性为 `center`
* `display` 设置为 `table-cell`  

### 29. 垂直居中的方法

* 将显示方式设置为表格，`display: table-cell;` 同时设置 `vertical-align*: middle;`
* 作用 `flex` 布局，设置 `align-items: center;`
* 绝对定位中设置 `top: 0; bottom: 0;` 并设置 `margin: auto;`
* 绝对定位中固定高度时设置 `top: 50%; margin-top` 值为高度一半的负值
* 文本垂直居中设置 `line-height` 为 `height` 值  

### 30. 如何使用 CSS 实现硬件加速？

> 硬件加速是指通过创建独立的复合图层，让 GPU 来渲染这个图层，从而提高性能。

一般触发硬件加速的 `CSS` 属性有 `transform`、`opacity`、`filter`，为了避免 2D 动画在开始和结束的时候的 `repaint` 操作，一般使用 `transform: translateZ(0)`  

### 31. 重绘和回流（重排）是什么，如何避免？

* DOM 的变化影响到了元素的几何属性（宽高），浏览器重新计算元素的几何属性，其它元素的几何属性和位置也会受到影响，浏览器需要重新构造渲染树，这个过程称为重排，浏览器将受到影响的部分重新绘制到屏幕上的过程称为重绘。
* 引起重排的原因有：
  * 添加或者删除可见的 DOM 元素
  * 元素位置、尺寸、内容改变
  * 浏览器页面初始化
  * 浏览器窗口尺寸改变，重排一定重绘，重绘不一定重排  

**减少重绘和重排的方法：**

* 不在布局信息改变时做 `DOM` 查询
* 使用 `cssText` 或者 `className` 一次性改变属性
* 使用 `fragment`
* 对于多次重排的元素，如动画，使用绝对定位脱离文档流，让它的改变不影响到其它元素  

### 32. 说一说 CSS3 的 animation

* css3 的 `animation` 是 css3 新增的动画属性，这个 css3 动画的每一帧是通过 `@keyframes` 来声明的，`@keyframes` 声明了动画的名称，通过 `from`、`to` 或者是百分比来定义。
* 每一帧动画元素的状态，通过 `animation-name` 来引用这个动画，同时 css3 动画也可以定义动画运行的时长、动画开始时间、动画播放方向、动画循环次数、动画播放的方式。
* 这些相关的动画子属性有：`animation-name` 定义动画名、`animation-duration` 定义动画播放的时长、`animation-delay` 定义动画延迟播放的时间、`animation-direction` 定义动画的播放方向、`animation-iteration-count` 定义播放次数、`animation-fill-mode` 定义动画播放之后的状态、`animation-play-state` 定义播放状态如暂停运行等、`animation-timing-function` 定义播放的方式如恒速播放、艰涩播放等。  

### 33. 左边宽度固定，右边自适应

> 左侧固定宽度，右侧自适应宽度的两列布局实现

``` html
<div class="outer">
    <div class="left">固定宽度</div>
    <div class="right">自适应宽度</div>
</div>
```

**方法一：左侧 div 设置成浮动：float: left，右侧 div 宽度会自拉伸适应**

``` css
.outer {
    width: 100%;
    height: 500px;
    background-color: yellow;
}
.left {
    float: left;
    width: 200px;
    height: 200px;
    background-color: red;
}
.right {
    height: 200px;
    background-color: blue;
}
```

**方法二：对右侧 div 进行绝对定位，然后再设置 right: 0，即可实现宽度自适应**

> 绝对定位元素的第一个高级特性就是其具有自动伸缩的功能，当我们将 `width` 设置为 `auto` 的时候（或者不设置，默认为 `auto`），绝对定位元素会根据其 `left` 和 `right` 自动伸缩大小

``` css
.outer {
    position: relative;
    width: 100%;
    height: 500px;
    background-color: yellow;
}
.left {
    width: 200px;
    height: 200px;
    background-color: red;
}
.right {
    position: absolute;   
    top:0;          
    right: 0;
    left: 200px;
    height: 200px;
    background-color: blue;
}
```

**方法三：将左侧 div 进行绝对定位，然后右侧 div 设置 margin-left: 200px**

``` css
.outer {
    position: relative;
    width: 100%;
    height: 500px;
    background-color: yellow;  
}
.left {
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: red;   
}
.right {
    height: 200px;
    margin-left: 200px;
    background-color: blue;    
}
```

**方法四：使用 flex 布局**

``` css
.outer {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 500px;
    background-color: yellow;   
}
.left {
    width: 200px;
    height: 200px;
    background-color: red;
}
.right {
    flex: 1;
    height: 200px;
    background-color: blue;   
}
```

<br>

### 34. 两种以上方式实现已知或者未知宽高的水平垂直居中

```scss
/** 1 **/
.wrapper {
    position: relative;
    .box {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100px;
        height: 100px;
        margin-top: -50px;
        margin-left: -50px;
    }
}

/** 2 **/
.wrapper {
    position: relative;
    .box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

/** 3 **/
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

/** 4 **/
.wrapper {
    display: table;
    .box {
        display: table-cell;
        vertical-align: middle;
    }
}
```

<br>

### 35. 如何实现小于 12px 的字体效果

> `transform: scale()` 这个属性只可以缩放可以定义宽高的元素，而行内元素是没有宽高的，我们可以加上一个 `display: inline-block;`

``` 
transform: scale(0.7);
```

<br>

## 三、JavaScript

### 1. 闭包

