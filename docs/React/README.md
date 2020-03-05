# React

## 1. 创建项目并使用

安装 live-server 服务器，在 public 文件夹下开启服务器 

```
live-server public/
```

安装 @babel/core @babel/cli @babel/preset-env @babel/preset-react --save-dev

把 src/app.js 编译到 public/scripts/app.js 并监听

```
npm run babel -- src/app.js -o public/scripts/app.js -w
```

**目录结构**
```
.
├── public
│   ├── scripts
│   │   └── app.js
│   └── index.html
├── src
│   └── app.js
├── .babelrc
├── package-lock.json
└── package.json
```

```html
<!-- public/index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
</head>
<body>
    <div id="app"></div>    
    <script src="./scripts/app.js"></script>
</body>
</html>
```

```jsx
// src/app.js

console.log(React)
console.log(ReactDOM)

const template = (
    <div>
    	<p>这是一个p标签</p>
    	<h1>这是一个h1标签</h1>
	</div>
);

const root = document.getElementById('app');
ReactDOM.render(template, root);
```

```json
// .babelrc

{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

```json
// package.json

{
  "name": "react",
  "version": "1.0.0",
  "description": "this is a demo",
  "main": "index.js",
  "scripts": {
    "babel": "babel"
  },
  "author": "li",
  "license": "ISC",
  "devDependencies": {
    "@babel/cli": "^7.8.4",
    "@babel/core": "^7.8.4",
    "@babel/preset-env": "^7.8.4",
    "@babel/preset-react": "^7.8.3"
  }
}
```



<br>

## 2. JSX 语法 

### 数据渲染

`{}` 变量或 js 表达式   

<br>

### 条件渲染 

```jsx
const user = {
    name: 'li',
    age: 18,
    location: '北京'
}
const showLocation = location => {
    if (location) {
        return <p>location：{location}</p>;
    }
}
const template = (
    <div>
        <h1>{ user.name ? user.name : '保密' }</h1>
        { (user.age && user.age >= 18) && <p>age：{user.age}</p> }
        { showLocation(user.location) }
    </div>
)

const root = document.getElementById('app');
ReactDOM.render(template, root);
```

<br> 

### 事件使用

```jsx
let count = 0;
let myId = 'a';
const addOne = () => {
    count++;
    renderCountApp();
}
const minusOne = () => {
    count--;
    renderCountApp();
}
const reset = () => {
    count = 0;
    renderCountApp();
}

const renderCountApp = () => {
    const template = (
        <div>
            <h1>{count}</h1>
            <button id={myId} className="btn" onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );  
    const root = document.getElementById('app');
    ReactDOM.render(template, root);
}

renderCountApp()
```

```jsx
const obj = {
    title: '帮你决定',
    subtitle: '把你的命运交给电脑吧',
    options: ['option1']
}
const showOptions = options => {
    if (options && options.length > 0) {
        return '这些是options'
    } else {
        return '没有options'
    }
}
const formSubmit = e => {
    e.preventDefault();
    let option = e.target.elements.option.value.trim();
    if (option) {
        obj.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}
const removeAll = () => {
    obj.options = [];
    render();
}
const makeDecision = () => {
    let index = Math.floor(Math.random() * obj.options.length);
    const option = obj.options[index];
    alert(option);
}

const render = () => {
    const template = (
        <div>
            <h1>{obj.title}</h1>
            <p>{obj.subtitle}</p>
            <p>{showOptions(obj.options)}</p>
            <p>{obj.options.length}</p>
            <button disabled={obj.options.length == 0} onClick={makeDecision}>
                随机选择一项
            </button>
            <button onClick={removeAll}>删除所有</button>
            <ol>
                {
                    obj.options.map((option, index) => {
                        return <li key={`option_${index}`}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={formSubmit}>
                <input type="text" name="option"/>
                <button>添加选项</button>
            </form>
        </div>
    );
    const root = document.getElementById('app');
    ReactDOM.render(template, root);
}

render();
```

<br>

### 类组件

```jsx
class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: ['张三', '李四', '王五']
        }
    }
    handleAddOption(option) {
        if (!option) {
            return '选项不能为空';
        } else if (this.state.options.includes(option)) {
            return '不能输入重复的选项';
        } else {
            this.setState(prevState => {
                return {
                    options: prevState.options.concat(option)
                }
            })
        }
    }
    handleRemoveAll() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handlePick() {
        const index = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[index];
        alert(option);
    }
    render() {
        const title = '帮你做决定';
        const subTitle = '把你的命运交给电脑吧';
        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleRemoveAll={this.handleRemoveAll}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}
class Header extends React.Component {
    render() {
        // return jsx语法
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.subTitle}</p>
            </div>
        )
    }
}
class Action extends React.Component {
    render() {
        return (
            <div>
                <button 
                    onClick={this.props.handlePick} 
                    disabled={!this.props.hasOptions}
                >
                    随机输出一个选项
                </button>
            </div>
        )
    }
}
class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleRemoveAll}>删除所有</button>
                {
                    this.props.options.map((option, index) => (
                        <Option option={option} key={`option_${index}`}/>
                    ))
                }
            </div>
        )
    }
}
class Option extends React.Component {
    render() {
        return (
            <div>{this.props.option}</div>
        )
    }
}
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleFormSubmit(e) {
        e.preventDefault();
        const option = e.target.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => {
            return {
                error
            }
        })
        e.target.option.value = '';
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" name="option"/>
                    <button>添加选项</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<MyApp />, document.getElementById('app'));
```

<br>

### 函数组件

```jsx
class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: props.options
        }
    }
    handleRemoveOption(option) {
        this.setState(prevState => ({
            options: prevState.options.filter(item => item != option)
        }))
    }
    handleAddOption(option) {
        if (!option) {
            return '选项不能为空';
        } else if (this.state.options.includes(option)) {
            return '不能输入重复的选项';
        } else {
            this.setState(prevState => ({
                    options: prevState.options.concat(option)
                }))
        }
    }
    handleRemoveAll() {
        this.setState(() => ({
                options: []
            }))
    }
    handlePick() {
        const index = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[index];
        alert(option);
    }
    render() {
        const subTitle = '把你的命运交给电脑吧';
        return (
            <div>
                <Header subTitle={subTitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleRemoveAll={this.handleRemoveAll} 
                    handleRemoveOption={this.handleRemoveOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}
MyApp.defaultProps = {
    options: ['张三', '李四', '王五']
}

const Header = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    )
}
Header.defaultProps = {
    title: '帮你做决定'
}
const Action = props => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>
                随机输出一个选项
            </button>
        </div>
    )
}
const Options = props => {
    return (
        <div>
            <button onClick={props.handleRemoveAll}>删除所有</button>
            {
                props.options.map((option, index) => (
                    <Option 
                        handleRemoveOption={props.handleRemoveOption} 
                        option={option} key={`option_${index}`}
                    />
                ))
            }
        </div>
    )
}
const Option = props => {
    return (
        <div>
            {props.option}
            <button onClick={() => {
                props.handleRemoveOption(props.option);
            }}>remove</button>
        </div>
    )
}
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleFormSubmit(e) {
        e.preventDefault();
        const option = e.target.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({
                error
            }))
        if (!error) {
            e.target.option.value = '';
        } 
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" name="option"/>
                    <button>添加选项</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<MyApp />, document.getElementById('app'));
```

<br>

### 生命周期的使用

只有类组件有生命周期

```jsx
class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: props.options
        }
    }
    // 加载组件时调用
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({
                    options
                }))
            }
        } catch (e) {
            // 什么都不做
        }
    }
    // 数据更新时调用
    componentDidUpdate(prevProps, prevState) {
        if (this.state.options.length !== prevState.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    // 卸载组件时调用
    componentWillUnmount() {
        console.log('卸载')
    }
    handleRemoveOption(option) {
        this.setState(prevState => ({
            options: prevState.options.filter(item => item !== option)
        }))
    }
    handleAddOption(option) {
        if (!option) {
            return '选项不能为空';
        } else if (this.state.options.includes(option)) {
            return '不能输入重复的选项';
        } else {
            this.setState(prevState => ({
                    options: prevState.options.concat(option)
                }))
        }
    }
    handleRemoveAll() {
        this.setState(() => ({
                options: []
            }))
    }
    handlePick() {
        const index = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[index];
        alert(option);
    }
    render() {
        const subTitle = '把你的命运交给电脑吧';
        return (
            <div>
                <Header subTitle={subTitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleRemoveAll={this.handleRemoveAll} 
                    handleRemoveOption={this.handleRemoveOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}
MyApp.defaultProps = {
    options: []
}

const Header = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    )
}
Header.defaultProps = {
    title: '帮你做决定'
}
const Action = props => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>
                随机输出一个选项
            </button>
        </div>
    )
}
const Options = props => {
    return (
        <div>
            <button onClick={props.handleRemoveAll}>删除所有</button>
            {props.options.length === 0 && <p>请添加一个选项</p>}
            {
                props.options.map((option, index) => (
                    <Option 
                        handleRemoveOption={props.handleRemoveOption} 
                        option={option} key={`option_${index}`}
                    />
                ))
            }
        </div>
    )
}
const Option = props => {
    return (
        <div>
            {props.option}
            <button onClick={() => {
                props.handleRemoveOption(props.option);
            }}>remove</button>
        </div>
    )
}
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleFormSubmit(e) {
        e.preventDefault();
        const option = e.target.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({
                error
            }))
        if (!error) {
            e.target.option.value = '';
        }      
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" name="option"/>
                    <button>添加选项</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<MyApp />, document.getElementById('app'));
```

<br>

## 3. create-react-app 的使用

创建项目：npx create-react-app my-app

Normalize.css 库把所有浏览器默认样式修改成统一的样式

安装 sass：npm install node-sass --save

<br>

## 4. React-Router 的使用

下载：npm install react-router-dom

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import './styles/styles.scss'

const RootPage = () => (
    <p>我是预算的应用</p>
)
const AddExpensePage = () => (
    <p>我是添加预算的页面</p>
)
const EditExpensePage = props => {
    console.log(props); // history js跳转路由
    return (
        <p>我是编辑预算页面</p>
    )
}
const HelpPage = () => (
    <p>我是帮助页面</p>
)
const NotFoundPage= () => (
    <div>
        404 - <Link to="/">回到首页</Link>
    </div>
)
const Header = () => (
    <header>
        <NavLink exact activeClassName="is-active" to="/">首页</NavLink>
        <NavLink activeClassName="is-active" to="/create">添加预算页面</NavLink>
        <NavLink activeClassName="is-active" to="help">帮助页面</NavLink>
    </header>
)
const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={RootPage}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
) 

ReactDOM.render(routes, document.getElementById('root'))
```

<br>

## 5. Redux 的使用

### Redux 基础使用

```jsx
import {createStore} from 'redux'

// action生成器
const countIncrement = ({increment = 1} = {}) => ({
    type: 'INCREMENT',
    increment
})
const countDecrement = ({decrement = 1} = {}) => ({
    type: 'DECREMENT',
    decrement
})
const countReset = () => ({
    type: 'RESET'
})
const countSet = ({count}) => ({
    type: 'SET',
    count
})

// reducers
// 1 函数是一个纯函数，输出的值只跟输入的值有关
// 2 state action 不能改变 只能读取
// reducer的结合 很多个reducer 数据也有模块化的概念
const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.increment
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrement
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
}

// 初始化的时候执行一次，更新数据的时候执行
const store = createStore(countReducer)

// 获取数据
store.subscribe(() => console.log(store.getState()))

// 更新数据就是让回调函数再执行一遍，并且把类型传过去
// 触发action
store.dispatch(countIncrement())
store.dispatch(countIncrement({increment: 5}))
store.dispatch(countIncrement())

store.dispatch(countReset())

store.dispatch(countDecrement())
store.dispatch(countDecrement({decrement: 10}))
store.dispatch(countDecrement())

store.dispatch(countSet({count: 100}))
```

### 多个 reducer 的使用

```jsx
import {createStore, combineReducers} from 'redux'
import uuid from 'uuid'

// action 生成器
const addExpense = (
    {
        description = '', 
        note = '', 
        createAt = 0, 
        amount = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        createAt,
        amount
    }
})
const removeExpense = ({id}) => ({
    type: 'REMOVE_EXPENSE',
    id
})
const editExpense = (id, update) => ({
    type: 'EDIT_EXPENSE',
    id,
    update
})
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

// reducers
const HandleExpenseReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map(expense => {
                if (expense.id === action.id) {
                    return {...expense, ...action.update}
                } else {
                    return expense;
                }
            })
        default:
            return state;
    }
}
const HandleFiltersReducer = (state = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
}, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state, 
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        default: 
            return state;
    }
}

const store = createStore(combineReducers({
    expenses: HandleExpenseReducer,
    filters: HandleFiltersReducer
}))

store.subscribe(() => console.log(store.getState()))

const obj = store.dispatch(addExpense({description: '买电动车', amount: 2000}));
const obj2 = store.dispatch(addExpense({description: '买课', amount: 5000}));
store.dispatch(removeExpense({id: obj.expense.id}))
store.dispatch(editExpense(obj2.expense.id, {amount: 1000, description: '买所有课程'}))
store.dispatch(setTextFilter('车'))
store.dispatch(sortByDate())
store.dispatch(sortByAmount())
```



