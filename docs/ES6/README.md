# ES6

## 1. let 与 const 块级作用域

定义变量用 **let**，常量用 **const**

### let 的使用

- 不能变量声明提升
- 不能重复声明变量

### const 的使用

- 定义的时候要有初始值
- 初始值不能改变（内存地址不能改变）



## 2. 字符串的扩展

### 模板字符串基本语法

- 反引号 ` `` `
- 替换位的使用 `${变量 || js表达式}`

### 字符串拓展方法

- `str.startsWith(searchString, position)` 判断字符串是否以 searchString 开始，position 开始位置默认为0，返回值 `true`或`false`。
-  `str.endsWith(searchString, length)` 判断字符串是否以 searchString 结尾，length 作为 `str` 的长度默认值为`str.length`，返回值 `true`或`false`。
- `str.includes(searchString, position)` 判断字符串中是否包含 searchString 字符串。
- `str.repeat(n)` 重复 n 遍 str。 

```js
let msg = 'hello';
msg.startsWith('e', 1)	// true
msg.endsWith('ll',4)	// true
msg.includes('e',2)		// false
msg.repeat(2)	// 'hellohello'
```



## 3. 数组解构赋值与对象解构赋值

### 数组解构赋值

[a, b, c, ..., n] = array;

```js 
let arr = [1, 2, 3];
let [a, b, c] = arr;	// a = 1; b = 2; c = 3; 一一对应
```

**使用**

- 必须要进行初始化
- 可以在解构中忽略一些项
- 互换两个变量的值

```js
let x = 1;
let y = 2;
[x, y] = [y, x]		// x = 2; y = 1;
```

**默认值**

- 当指定位置的项不存在
- 指定位置的项为 undefined

```js
let [x = 10; y = 20] = [];		// x = 10; y = 20;
let [x = 10; y = 20] = [null];	// x = null; y = 20;
```

### 对象解构赋值

**基本语法**：字面量对象 = 字面量对象

```js
let {name: name1, age: age1} = {name: 'liu', age: 10};		// name1 = liu; age1 = 10;
// 当属性值和属性名相同时可以简写成以下方式，属性值是一个变量
let {name: name, age: age} => let {name, age}
```

**注意：**

- 必须要进行初始化
- 在赋值的时候使用解构赋值

```js
let name1, age1;
({name: name1, age: age1} = {name: 'liu', age: 10});
```

- 解构赋值表达式的值是表达式右侧的值

```js
function fn(value) {
    console.log(name, age);
    console.log(value);
}
let obj = {
    name: 'liu',
    age: 10
}
fn({name, age} = obj);
// 第2行打印结果	liu 10
// 第3行打印结果	{name: 'liu', age: 10}
```

### 混合解构：对象和数组组合使用

```js
// 模式匹配
let [a, b, [c, d]] = [1, 2, []];
let {age: [a, b, c]} = {age: [1, 2, 3]};
```



## 4. ES6参数的处理

### 参数默认值

- 基本使用方法

```js
function value() {
    return 20;
}
function fn(a = value(), b = 2, c = 3) {
    console.log(a, b, c);
}
fn();	// 不传参数走默认值 => 20 2 3
```

- 在默认值中使用其他变量

```js
function fn(a = 1, b = a) {
    console.log(a, b);
}
fn();  // a = 1; b = 1;
```

### 剩余运算符 `...`

- 把散列元素变成一个集合
- 在函数或解构中使用

```js
// 在函数中使用
function add(a, ...arr) {
    console.log(a, arr);
}
add(1, 2, 3);	// 1, [2, 3]

// 在解构中使用
let [a, ...b] = [1, 2, 3];	// a = 1; b = [2, 3];
let {a, b, ...c} = {a: 1, b: 2, c: 3, d: 4};	// a = 1; b = 2; c = {c: 3, d: 4}
```

### 扩展运算符

- 把一个集合变成散列元素
- 函数参数传递，数组和对象的复制

```js
function fn(a, b, c) {
    console.log(a, b, c);
}
fn(...[1, 2, 3]); // a = 1; b = 2; c = 3;
```

### 模拟命名参数

使用对象的解构赋值来模拟命名参数

```js
function fn({start = 1, end = 2} = {}) {
    console.log(start, end);
}
fn();	// start = 1; end = 2;
```

 

## 5. 对数字的操作

### 新的整形字面量

- 二进制
- 八进制

num = 0x10      十六进制

num = 0b100    二进制

num = 0o17      八进制

### 新的 Number 属性

- 以前方法的移植

  `Number.isNaN()` 				是否是非数值

  `Number.isFinite()` 		  是否是有穷数

  `Number.parseFloat()` 	  把字符串解析成浮点数

  `Number.parseInt()` 		  把字符串解析为整数

- 合理误差范围                 `Number.EPSILON`
- 判断是否为整数             `Number.isInteger()`
- 判断是否为安全整数     `Number.isSageInteger()`

### 新的 Math 方法

`Math.sign()` 判断数字是正数、负数、0 或 NaN



## 6. 箭头函数

**箭头函数：** 语义化的函数

**基本语法：** `() => {}`

**注意的点：**

1. 如果参数只有一个的话，小括号可以省略。
2. 如果参数只有 0 个或 2 个及以上，小括号必须有。
3. 逻辑语句。如果语句只有一条的话，可以省略大括号。但是如果这条语句是 return 语句的话，return 也要省略掉。
4. 如果语句有两条及以上，不可以省略大括号。

**注意：**

1. 箭头函数没有 this 指向，箭头函数里的 this 指向其父级作用域，是不可更改的。
2. 不能使用 arguments。
3. 不能当做构造函数



## 7. ES6 对象的扩展

**新的对象字面量特性**

* 方法的定义

  ```js
  let obj = {
      a: 1,
      show() {
          console.log('show');
      }
  }
  ```

* 属性的简写

  ```js
  let name = 'liu';
  let age = 10;
  let obj = {
      name,
      age
  }
  ```

* 计算属性名

  ```js
  let a = 'name';
  let obj = {
      [a]: 1,
      b: 2
  }
  ```

<br/>

**新的对象方法**

* `Object.is()` 判断两个值是否是相同的值

  ```js
  console.log(Object.is(NaN, NaN));	// true
  console.log(NaN === NaN);	// false
  
  console.log(Object.is(-0, +0));	   // false
  console.log(-0 === +0);	   // true
  
  function isEq(a, b) {
      // NaN
      if (a !== a) {
          return b !== b;
      }
      // +0 -0
      if (1/a !== 1/b) {
          return b !== b;
      }
  }
  ```

* `Object.setPrototypeOf()` 设置一个指定的对象的原型到另一个对象或 null

  ```js
  let obj = {
      a: 1,
      b: 2
  }
  let obj1 = {
      c: 3
  }
  // 把obj1设置成obj的原型
  Object.setPrototypeOf(obj, obj1);
  ```

* `Object.assign()` 用于将所有可枚举属性的值从一个或多个源对象复制到目标对象，它将返回目标对象

  ```js
  let obj1 = {
      a: 1
  }
  let obj2 = {
      b: 2
  }
  let obj3 = {
      c: 3
  }
  // 第一个参数为目标对象
  Object.assign(obj1, obj2, obj3)
  ```

  注意：

  1. 复制对象属性，自身的可遍历的属性
  2. 复制是一个对象一个对象复制的
  3. 是浅拷贝

  ```js
  // 使用场景1 对象的复制
  let obj = {
      a: 1,
      b: 2
  }
  let obj1 = Object.assign({}, obj);
  
  // 使用场景2 原型方法的添加
  function Person() {
      this.name = 'luwei'
  }
  Object.assign(Person.prototype, {
      eat() {
          
      },
      walk() {
  
      }
  })
  
  // 使用场景3 函数默认参数
  const DEFAULTS = {
      a: 1,
      b: 2
  }
  function fn(options) {
      let realOptions = Object.assign({}, DEFAULTS， options);
  }
  ```

<br/>

**对象的遍历**

`Object.keys(obj)` 返回可枚举的属性名数组

`Object.values(es2017)` 返回可枚举的属性值数组

`Object.entries(es2017)` 返回可枚举的键值对数组



## 8. 类的基础使用语法

**类的声明：** 基本的类声明

类声明以 **class** 关键字开始，然后是类的名字，剩余部分是对象字面量的简写

```js
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log(`我叫${this.name}`);
    }
}
```



**类语法注意事项**

1. 类声明不会被提升
2. 类声明中的代码都自动运行在严格模式下
3. 调用类必须使用 new
4. 类中所有的方法都是不可枚举的
5. 类中的方法是不能用 new 调用的
6. 在类的方法中重写类名报错

```js
const Dog = (function () {
    'use strict';
    const Dog = function (name, age) {
        if (!(this instanceof Dog)) {
            throw new Error('必须用new去调用方法');
        }
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(Dog.prototype, 'bark', {
        value: function () {
            if (this instanceof Dog.prototype.bark) {
                throw new Error('不能使用new调用');
            }
            console.log(`我叫${this.name}`);
        },
        enumerable: false
    })
    return Dog;
})()
```

类为一等公民，可以作为参数传给函数，能作为函数返回值，能给变量赋值



静态方法 `static` 关键字

```js
class Dog {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log(`我叫${this.name}`);
    }
    static showInfo() {
        console.log('这是一条狗');
    }
}
```



## 9. 类的继承

class 继承 extends、super 的使用

```js
class Animal {
	constructor(name) {
        this.name = name;
        this.thirsty = 100;
        this.food = [];
    }
    drink() {
        return this.thirsty -= 10;
    }
    eat(item) {
        this.food.push(item);
    }
}
class Dog extends Animal {
	constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
}
```



**继承内置构造函数**

```js
class moviesList extends Array {
    constructor(name, ...movies) {
        super(...movies);
        this.name = name;
    }
    add(movie) {
        this.push(movie);
    }
    topStar(limit) {
        return this.sort((a, b) => {return a.star > b.star ? -1 : 1}).slice(0, limit);
    }
}
var movies = new moviesList('我最喜欢的电影',
	{name: '泰坦尼克号', star: 9},
	{name: '盗梦空间', star: 8.5},
    {name: '霸王别姬', star: 9.5},
    {name: '无双', star: 7.5},
)   
```



## 10. ES6 中的模块化

立即执行函数去写一个模块的问题

1. 没有完全解决全局变量污染
2. 需要考虑 script 加载顺序

模块化基本语法：ES6 中只是定义了语法，没有定义加载方式

导出：export

导入：import



**导入导出基本语法**

```js
// add.js
function add(a, b) {
    console.log(a + b);
}
var a = 1;
export {add, a}

// jian.js
export function jian(a, b) {
    console.log(a - b);
}
```

```html
<script type="module">
	import {add, a} from './add.js';
	import {jian} from './jian.js';
    console.log(a);
    add(1, 2);
    jian(2, 1);
</script>
```



**重命名**

```js
// add.js
function add(a, b) {
    console.log(a + b);
}
var a = 1;
export {add as add1, a}
```

```html
<script type="module">
	import {add1 as add, a} from './add.js';
    console.log(a);
    add(1, 2);
</script>
```



**默认导出：** 是匿名函数，导入可以随便取个名字

```js
export default function jian(a, b) {
    console.log(a - b);
}
```

```html
<script type="module">
	import min from './jian.js';
	min(2, 1);
</script>
```



**需要导出的对象有很多，按下面的写法**

```html
<script type="module">
	import * as obj from './add.js';
	obj.add(1, 2);
</script>
```



## 11. ES6 对数组的扩展

**创建数组**

`Array.of()` 创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型

`Array.from(arrayLike, callback)` 从一个类似数组或可迭代对象中创建一个新的数组实例

```js
let myP = document.getElementsByTagName('p');
let myPArr = Array.from(myP, (item) => {
	return item.textContent;
});
function add() {
	return Array.from(arguments).reduce((acc, cur) => acc + cur, 0);
}
console.log(add(1, 2, 3, 4, 5));
```



**数组新方法**

`arr.find(callback)` 返回数组中满足提供的测试函数的第一个元素的值，否则返回 undefined

`arr.findIndex(callback)` 返回数组中满足提供的测试函数的第一个元素的索引，否则返回 -1

callback 接收 3 个参数对（当前遍历的元素，索引，数组本身）

`arr.fill(value, start, end)` 用一个固定值填充一个数组中从起始索引到终止索引内的全部元素，不包括终止索引，3 个参数分别是（用来填充数组元素的值，起始索引，终止索引）

`arr.copyWithin(target, start, end)` 浅复制数组的一部分到同一数组中的另一个位置并返回它，不会改变原数组的长度，从 start 索引开始到 end 索引结束（不包括 end 这个位置的元素）复制序列到 target 索引位置

`arr.some(callback)` 测试是否至少有一个元素可以通过被提供的函数方法，有返回 true，没有返回 false

`arr.every(callback)` 测试一个数组内的所有元素是否都能通过指定函数的测试，是返回 true，否返回 false

`arr.includes(valueToFind)` 用来判断一个数组是否包含一个指定的值，包含返回 true，否则返回 false



## 12. 迭代器 Iterator

迭代器是统一的接口，它是一个对象，对象里面有 next 方法，每次调用这个方法就会输出数据结构的成员，第一次输出第一个成员，第二次输出第二个，以此类推，输出成员的形式为 `{value: 值, done: true|false}`

默认迭代器 `Symbol.iterator`

**迭代器使用场景**

* for of 循环
* 数组新增方法

```js
let colors = ['red', 'yellow', 'blue'];
// 索引和值
for (let [index, value] of colors.entries()) {
    console.log(index, value);
}
// 索引
for (let index of colors.keys()) {
    console.log(index);
}
// 值
for (let value of colors.values()) {
    console.log(value);
}
```

* 解构赋值
* `...` 运算符：扩展运算符



## 13. 生成器 Generator

基础语法：`function* fn() {} ` `yiled` 暂停

next 方法传参

```js
function* fn() { // 指针          
	yield 'luwei';            
	yield 'cc';           
	yield 'ice';
}
const people = fn();

function* fn(x) { // 指针           
	var y = yield (x + 2); // y = 6
	var z = yield (y / 3); // z = 10
	return (x + y + z);
}
const it = fn(4);
console.log(it.next());
console.log(it.next(6));
console.log(it.next(10));
```



## 14. Promise

**创建 pending 状态的 Promise 对象**

```js
const p = new Promise(() => {
	console.log(111);
});
```



**Promise 的三个状态**

1. pending
2. 成功
3. 失败

```js
// Promise 占位符 对未来的值进行操作了
const p = new Promise((resolved, rejected) => {
    setTimeout(function () {      
    	resolved(1000);
    	// rejected(new Error("失败了"));
    }, 1000);
});
p.then(function (val) {
    console.log(val)
}, function (err) {
    console.log(err);
})

// 创建一个已处理的promise
const p1 = Promise.resolve();
const p2 = Promise.reject();
```



**链式调用 Promise，解决回调地域的问题**

```js
const p = new Promise((resolved, rejected) => {
    setTimeout(function () {      
    	resolved(1000);
    }, 1000);
});

// p.then返回的Promise对象 它看回调函数的返回值
// 如果return值不是Promise对象的话就是成功状态
p.then(function (val) {
    console.log(val);
	return new Promise((resolved, rejected) => {
        setTimeout(() => {
            rejected(11);
        }, 2000);
    });
}, function (err) {
    console.log(err);
}).then(function (val) {
    console.log(val);
}, function () {
    console.log(222);
})
```

```js
// 回调地域 回调金字塔
function fakeAjax(ms, val) {
    return new Promise((resolved, rejected) => {
        setTimeout(function () {
            resolved(val);
        }, ms);
    })
}
fakeAjax(1000, 10).then(val => {
    console.log(val);
    return fakeAjax(2000, 20);
}, () => {}).then(val => {
	console.log(val);
	return fakeAjax(3000, 30);
}).then(val => {
	console.log(val);
})
```



**响应多个 Promise 对象**

`Promise.all` 都成功走成功的回调函数，有一个失败就走失败的回调函数

`Promise.race` 看反应最快的那个请求

```js
function fakeAjax(ms, val, flag) {
	return new Promise((resolved, rejected) => {
		setTimeout(function () {
			if (flag) {
				resolved(val);
			} else {
				rejected(val);
			}
		}, ms);
	})
}
var p1 = fakeAjax(1000, 10, true);
var p2 = fakeAjax(2000, 20, true);
var p3 = fakeAjax(1500, new Error("出错了"), false);
Promise.all([p1, p2, p3]).then(function (val) {
	console.log(val);
}, function (err) {
	console.log(err);
})
Promise.race([p1, p2, p3]).then(function (val) {
	console.log(val);
}, function (err) {
	console.log(err);
})
```


**手写 Promise**
```js
function promise(fn) {
	this.state = 'pending';
	this.value = undefined;
	this.onResolvedArr = [];
	this.onRejectedArr = [];
	const resolved = value => {
		if (this.state === 'pending') {
			this.state = 'resolved';
			this.value = value;
			this.onResolvedArr.forEach(fn => {
				fn(this.value);
			})
		}
	}
	const rejected = error => {
		if (this.state === 'pending') {
			this.state = 'rejected';
			this.value = error;
			this.onRejectedArr.forEach(fn => {
				fn(this.value);
			})
		}
	}
	fn(resolved, rejected);
}
		
promise.prototype.then = function (onResolved, onRejected) {
	if (this.state === 'resolved') {
		return promise2 = new promise((resolved, rejected) => {
			const x = onResolved(this.value);
			if (x instanceof promise) {
				x.then(resolved, rejected);
			} else {
				resolved(x);
			}
		})
	} else if (this.state === 'rejected') {
		return promise2 = new promise((resolved, rejected) => {
			const x = onRejected(this.value);
			if (x instanceof promise) {
				x.then(resolved, rejected);
			} else {
				resolved(x);
			}
		})
	} else if (this.state === 'pending') {
		return promise2 = new promise((resolved, rejected) => {
			this.onResolvedArr.push(function () {
				const x = onResolved(this.value);
				if (x instanceof promise) {
					x.then(resolved, rejected);
				} else {
					resolved(x);
				}
			})
			this.onRejectedArr.push(function () {
				const x = onRejected(this.value);
				if (x instanceof promise) {
					x.then(resolved, rejected);
				} else {
					resolved(x);
				}
			})
		})
	}
}
```