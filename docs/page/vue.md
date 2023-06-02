# vue相关
## vue 通信方式
1. 子组件通过props获取父组件传递过来的参数
2. 子组件通过$emit触发定义在父组件的事件
3. Vue.prototype.$eventbus = new Vue()。定义全局的eventbus,在一个组件里$on,$emit 
4. Vuex
5. $parent,$children

## vue 父子组件的生命周期顺序
### 同步引入时生命周期顺序为
父组件的beforeCreate、created、beforeMount --> 所有子组件的beforeCreate、created、beforeMount --> 所有子组件的mounted --> 父组件的mounted

总结：父组件先创建，然后子组件创建；子组件先挂载，然后父组件挂载

### 异步引入时生命周期顺序为
父组件的beforeCreate、created、beforeMount、mounted --> 子组件的beforeCreate、created、beforeMount、mounted

总结：父组件创建，父组件挂载；子组件创建，子组件挂载。

### 子组件更新过程
父beforeUpdate->子beforeUpdate->子updated->父updated
### 子组件销毁过程
父beforeDestroy->子beforeDestroy->子destroyed->父destroyed

## vue中每个组件都是一个实例，有各自的data,methods...
+ $el:当前实例的根dom
+ $props:当前组件接收到的props对象
+ $data:当前实例的data
+ $options.data():当前实例的data的初始化值
## 重置data
Object.assign(this.$data, this.$options.data()) // 重置data
 
## vue虚拟dom原理
key的作用主要是为了高效的更新虚拟DOM
Virual DOM是用JS对象记录一个dom节点的副本，当dom发生更改时候，先用
虚拟dom进行diff算法，算出最小差异，然后再修改真实dom。
+ 虚拟DOM的缺点：
1. 代码更多，体积更大
2. 内存占用增大
3. 小量的单一的dom修改使用虚拟dom成本反而更高，不如直接修改真实dom快

## vue里的mixin
Mixins：在引入组件之后与组件中的对象和方法进行合并，相当于扩展了父组件的对象与方法，
1. 如果mixin里的方法名和组件本身的方法名同名，则组件本身的方法会覆盖mixin里的。
2. 组件可以获取到mixin里定义的东西，例如变量，多个组件引入同一个mixin并对mixin里的变量操作时，并不会互相影响，而是独立的
3. mixin里和组件里都有created,mounted钩子时，先执行mixin里的，再执行组件里的
4. 引入方式有两种，全局引入和在vue文件里局部引入

```vue
//全局引用  
//main.js文件
import mixin from './mixin'
Vue.mixin(mixin)
 
//在单个vue文件中引用
import '@/mixin'; // 引入mixin文件
export default {
   mixins: [mixin]
}
//全局引用  Vue.use将混入对象安装到 Vue 实例中，以使其全局可用，
Vue.use（
  Vue.mixin({
     data() {},
     created() {}
  }),
options） //options是一个可选的配置对象
```

## vue自定义组件 install
```vue

//注册一个全局组件search-bar
import VueSearchBar from './SearchBar.vue'
const SearchBar = {
      install: function (Vue，options) { //install 方法会传入Vue作为第一个参数，options参数可选
       //console.log(options.title)      a
       // 核心部分，在我们使用Vue.use()时，自动调用的是install，而install导出的必须是组件
          Vue.component('search-bar', VueSearchBar)
      }
}
export default SearchBar

// main.js文件里 
Vue.use(SearchBar，{ title: 'a' } )
```

 
## Vue.component和Vue.extend
Vue提供的创建组件API：Vue.component和Vue.extend，
可以得到它们之间的联系如下：都用于创建组件,Vue.component内部实际上还是调用了Vue.extend

主要区别如下：创建组件的方式，Vue.extend需要手动执行new运算创建组件，而Vue.component是在$mount阶段自动执行new运算的

```vue

import Loading from './loading.vue'
const LoadingConstructor = Vue.extend(Loading)
instance = new LoadingConstructor({
    el: document.createElement('div')
    })
```

## v-model.sync修饰符区别，v-bind和v-on
vue中v-model和.sync修饰符区别:
+ v-model 默认本质上是触发 :value属性和@input方法
+ .sync针对的是@update事件.一个组件可以多个属性用.sync修饰符，可以同时"双向绑定多个“prop”，v-model一个组件只能有一个。

+ v-bind 指令可以用于响应式地更新 HTML attribute,缩写：
+ v-on它用于监听 DOM 事件，缩写@
+ Vm.$data指的组建中的data
+ Vm.massage指的组建中data中的massage
```vue

// 阻止单击事件继续传播 
 <a v-on:click.stop="doThis"></a>
// 提交事件不再重载页面 
<form v-on:submit.prevent="onSubmit"></form> 
// 修饰符可以串联 
<a v-on:click.stop.prevent="doThat"></a>
// 只有修饰符
<form v-on:submit.prevent></form> 
// 添加事件监听器时使用事件捕获模式 
// 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 
<div v-on:click.capture="doThis">...</div> 
// 只当在 event.target 是当前元素自身时触发处理函数, 即事件不是从内部元素触发的
<div v-on:click.self="doThat">...</div>
// 点击事件将只会触发一次 
<a v-on:click.once="doThis"></a>
//在“change”时而非“input”时更新
<input v-model.lazy="msg">
```

+ .sync 用于父组件直接更新自己本地数据

子组件触发更新： this.$emit('update:title', newTitle)
父组件可以监听那个事件并根据需要更新一个本地的数据 property。$event代表newTitle
```vue

<text-document
  v-bind:title="doc.title"
  v-on:update:title="doc.title = $event"
></text-document>
上面等价于.sync 修饰符：
<text-document v-bind:title.sync="doc.title"></text-document>
```

## 全局注册组件
// webpack的require.context全局注册组件
```vue

const requireComponent = require.context(
// 其组件目录的相对路径 
'./components',
 // 是否查询其子目录 
 false,
 // 匹配基础组件文件名的正则表达式 
 /Base[A-Z]\w+\.(vue|js)$/ )

```

## render函数
将 h 作为 createElement 的别名是 Vue 生态系统中的一个通用惯例，实际上也是 JSX 所要求的。
```vue
Vue.component('my-item-zh', {
    functional: true,//函数式组件
    render: function (h, ctx) {
        var item = ctx.props.item;
        /*console.log('item', item)
        console.log('data',ctx.data)*/
        return h('li', ctx.data, [
            h('div', { attrs: { class: 'name' } }, [item.value]),
        ]);
    },
    props: {
        item: { type: Object, required: true }
    }
});
```
 
## Vue.directive
自定义指令，bind只调用一次， inserted插入父节点，update更新，componentUpdated完成更新，unbind解绑时
 
 
## vue3.0
声明响应式数据，需要使用 ref,reactive 来一次声明多个变量
费弃beforeCreate、created，改在setup中
组件不再限制 template 中根元素的个数
methods、watch 和 computed在setup中进行，setup return回一个对象
 
## vue模版编译的过程
解析html字符串（通过正则判断开始标签，结束标签，属性等）=》将html字符串转化为AST语法树（描述节点之间父子关系，节点属性，内容，children等等树形数据）=》将AST语法树生成最终render函数（就是字符串拼接，模版引擎）=》生成虚拟dom（vnode） =》 替换成真实的dom

```vue
// 举个例子：
<div id=”app”><p>hello {{name}}</p>hello</div>
```
```js
// render函数 
_c(“div”, {id:app}, _c(“p”, undefined , _v(‘hello’+ _s(name))  ), _v(‘hello’))
// _c表示标签，第一个参数是标签名，第二个参数是属性，第三个参数及往后参数是子节点,
//_v表示文本
//_s表示将变量转化为字符串
//虚拟节点就是通过_c _v等实现用对象来描述dom的操作
```

## 什么是 render 函数？
1. render 函数 跟 template 一样都是创建 html 模板的，但是有些场景中用 template 实现起来代码冗长繁琐而且有大量重复，这时候就可以用 render 函数。
2. 当使用render函数描述虚拟DOM时，vue提供一个函数，这个函数是就构建虚拟DOM所需要的工具。官网上给他起了个名字叫createElement。还有约定的简写叫h
3. 语法：
```vue
render(createElement){ return createElement('标签名'，'执行的操作'，'展示的内容') } 
createElement() 有三个参数:
第一个参数，必选，为 HTML 标签或组件或函数；
第二个参数，可选，为数据对象，标签属性等；
第三个参数，可选，该标签内容或子节点；如果没有内容，则不显示


render (h) {
   // render方法提供给我们一个h函数，它可以渲染VNode
   return h(NoData, { props })
}
```

4. render（）方法干了什么。 代替了<template></template>渲染dom
 
 
## vue双向绑定实现
### 原理： Object对象的defineProperty属性，重写data的set和get函数来实现的
Object.defineProperty( )是用来做什么的？它可以来控制一个对象属性的一些特有操作，比如读写权、是否可以枚举，这里我们主要先来研究下它对应的两个描述属性get和set。

通过Object.defineProperty( )对属性设置一个set函数，当数据改变了就会来触发这个函数，所以我们只要将一些需要更新的方法放在这里面就可以实现data更新view了。

我们所说的数据双向绑定，一定是对于UI控件来说的，非UI控件不会涉及到数据双向绑定。 单向数据绑定是使用状态管理工具（如redux）的前提。如果我们使用vuex，那么数据流也是单项的
```js

<body>
    <div id="app">
        <input type="text" id="a">
        <span id="b"></span>
    </div>
</body>
<script>
   var obj = {
    val： 'zhao';  //赋予初始值
};  //定义一个空对象
    Object.defineProperty(obj, 'val', {//定义要修改对象的属性
        get: function () {
            return val;
        },
        set: function (newVal) { 
             val = newVal;//定义val等于修改后的内容
            document.getElementById('a').value = val;//让文本框的内容等于val
            document.getElementById('b').innerHTML = val;//让span的内容等于val
        }
 
    });
    document.addEventListener('keyup', function (e) {//当在文本框输入内容时让对象里你定义的val等于文本框的值
        obj.val = e.target.value;
    })
</script>

```
 
