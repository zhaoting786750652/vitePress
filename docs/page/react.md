# react相关
## 单向数据流或数据绑定
prop从父组件传递到子组件。子组件永远不能将 prop 送回父组件。这有助于维护单向数据流
## 勾子函数
```js
Mount—Update—Unmount
constructor
render
componentDidMount ,
shouldComponentUpdate
render,
 componentDidUpdate, 
componentWillUnmount
```

## react通信
+ 父组件向子组件通信——props
+ 子组件向父组件通信—props+回调
+ 跨级组件的通信方式—createContext()
+ Redux
+ 非嵌套关系组件的通信方式—自定义事件通信（发布订阅模式）

```js
// context方式实现跨级组件通信 
// Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据
const BatteryContext = createContext(); // 子组件的子组件
class GrandChild extends Component { 
    render(){ 
        return ( 
            <BatteryContext.Consumer> 
            { color => <h1 style={{"color":color}}>我是红色的:{color} </h1> } 
            </BatteryContext.Consumer> 
        )
    }
} 
 
// 子组件 
const Child = () =>{ 
    return ( <GrandChild/> )
 } 
 
// 父组件
class Parent extends Component {
    state = { color:"red" } 
    render(){ 
        const {color} = this.state
        return ( 
            <BatteryContext.Provider value={color}>
            <Child><Child> 
            </BatteryContext.Provider> 
        ) 
    }
 }
```


## hooks出现的原因
1.类组件内部的逻辑难以实现拆分和复用。class DemoClass extends React.Component

2.轻量、灵活、易于组织和维护、较低的学习成本等

3.函数组件真正地将数据和渲染绑定到了一起
 
## React setState 调用之后发生了什么？是同步还是异步？
（1）React中setState后发生了什么 

在代码中调用setState函数之后，React 会将传入的参数对象与组件当前的状态合并，然后触发所谓的调和过程(Reconciliation)。
经过调和过程，React 会以相对高效的方式根据新的状态构建 React 元素树并且着手重新渲染整个UI界面。 在 React 得到元素树之后，React 会自动计算出新的树与老树的节点差异，然后根据差异对界面进行最小化重渲染。在差异计算算法中，React 能够相对精确地知道哪些位置发生了改变以及应该如何改变，这就保证了按需更新，而不是全部重新渲染。
如果在短时间内频繁setState。React会将state的改变压入栈中，在合适的时机，批量更新state和视图，达到提高性能的效果。

（2）setState 是同步还是异步的

 假如所有setState是同步的，意味着每执行一次setState时（有可能一个同步代码中，多次setState），都重新vnode diff + dom修改，这对性能来说是极为不好的。如果是异步，则可以把一个同步代码中的多个setState合并成一次组件更新。所以默认是异步的，但是在一些情况下是同步的。
setState 并不是单纯同步/异步的，它的表现会因调用场景的不同而不同。在源码中，通过 isBatchingUpdates 来判断setState 是先存进 state 队列还是直接更新，如果值为 true 则执行异步操作，为 false 则直接更新。

+ 异步： 在 React 可以控制的地方，就为 true，比如在 React 生命周期事件和合成事件中，都会走合并操作，延迟更新的策略。
+ 同步： 在 React 无法控制的地方，比如原生事件，具体就是在 addEventListener 、setTimeout、setInterval 等事件中，就只能同步更新
 