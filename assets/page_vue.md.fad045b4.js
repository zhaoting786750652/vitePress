import{_ as s,o as n,c as a,R as l}from"./chunks/framework.912ee41a.js";const A=JSON.parse('{"title":"vue相关","description":"","frontmatter":{},"headers":[],"relativePath":"page/vue.md","filePath":"page/vue.md","lastUpdated":1685694891000}'),e={name:"page/vue.md"},p=l(`<h1 id="vue相关" tabindex="-1">vue相关 <a class="header-anchor" href="#vue相关" aria-label="Permalink to &quot;vue相关&quot;">​</a></h1><h2 id="vue-通信方式" tabindex="-1">vue 通信方式 <a class="header-anchor" href="#vue-通信方式" aria-label="Permalink to &quot;vue 通信方式&quot;">​</a></h2><ol><li>子组件通过props获取父组件传递过来的参数</li><li>子组件通过$emit触发定义在父组件的事件</li><li>Vue.prototype.$eventbus = new Vue()。定义全局的eventbus,在一个组件里$on,$emit</li><li>Vuex</li><li>$parent,$children</li></ol><h2 id="vue-父子组件的生命周期顺序" tabindex="-1">vue 父子组件的生命周期顺序 <a class="header-anchor" href="#vue-父子组件的生命周期顺序" aria-label="Permalink to &quot;vue 父子组件的生命周期顺序&quot;">​</a></h2><h3 id="同步引入时生命周期顺序为" tabindex="-1">同步引入时生命周期顺序为 <a class="header-anchor" href="#同步引入时生命周期顺序为" aria-label="Permalink to &quot;同步引入时生命周期顺序为&quot;">​</a></h3><p>父组件的beforeCreate、created、beforeMount --&gt; 所有子组件的beforeCreate、created、beforeMount --&gt; 所有子组件的mounted --&gt; 父组件的mounted</p><p>总结：父组件先创建，然后子组件创建；子组件先挂载，然后父组件挂载</p><h3 id="异步引入时生命周期顺序为" tabindex="-1">异步引入时生命周期顺序为 <a class="header-anchor" href="#异步引入时生命周期顺序为" aria-label="Permalink to &quot;异步引入时生命周期顺序为&quot;">​</a></h3><p>父组件的beforeCreate、created、beforeMount、mounted --&gt; 子组件的beforeCreate、created、beforeMount、mounted</p><p>总结：父组件创建，父组件挂载；子组件创建，子组件挂载。</p><h3 id="子组件更新过程" tabindex="-1">子组件更新过程 <a class="header-anchor" href="#子组件更新过程" aria-label="Permalink to &quot;子组件更新过程&quot;">​</a></h3><p>父beforeUpdate-&gt;子beforeUpdate-&gt;子updated-&gt;父updated</p><h3 id="子组件销毁过程" tabindex="-1">子组件销毁过程 <a class="header-anchor" href="#子组件销毁过程" aria-label="Permalink to &quot;子组件销毁过程&quot;">​</a></h3><p>父beforeDestroy-&gt;子beforeDestroy-&gt;子destroyed-&gt;父destroyed</p><h2 id="vue中每个组件都是一个实例-有各自的data-methods" tabindex="-1">vue中每个组件都是一个实例，有各自的data,methods... <a class="header-anchor" href="#vue中每个组件都是一个实例-有各自的data-methods" aria-label="Permalink to &quot;vue中每个组件都是一个实例，有各自的data,methods...&quot;">​</a></h2><ul><li>$el:当前实例的根dom</li><li>$props:当前组件接收到的props对象</li><li>$data:当前实例的data</li><li>$options.data():当前实例的data的初始化值</li></ul><h2 id="重置data" tabindex="-1">重置data <a class="header-anchor" href="#重置data" aria-label="Permalink to &quot;重置data&quot;">​</a></h2><p>Object.assign(this.$data, this.$options.data()) // 重置data</p><h2 id="vue虚拟dom原理" tabindex="-1">vue虚拟dom原理 <a class="header-anchor" href="#vue虚拟dom原理" aria-label="Permalink to &quot;vue虚拟dom原理&quot;">​</a></h2><p>key的作用主要是为了高效的更新虚拟DOM Virual DOM是用JS对象记录一个dom节点的副本，当dom发生更改时候，先用 虚拟dom进行diff算法，算出最小差异，然后再修改真实dom。</p><ul><li>虚拟DOM的缺点：</li></ul><ol><li>代码更多，体积更大</li><li>内存占用增大</li><li>小量的单一的dom修改使用虚拟dom成本反而更高，不如直接修改真实dom快</li></ol><h2 id="vue里的mixin" tabindex="-1">vue里的mixin <a class="header-anchor" href="#vue里的mixin" aria-label="Permalink to &quot;vue里的mixin&quot;">​</a></h2><p>Mixins：在引入组件之后与组件中的对象和方法进行合并，相当于扩展了父组件的对象与方法，</p><ol><li>如果mixin里的方法名和组件本身的方法名同名，则组件本身的方法会覆盖mixin里的。</li><li>组件可以获取到mixin里定义的东西，例如变量，多个组件引入同一个mixin并对mixin里的变量操作时，并不会互相影响，而是独立的</li><li>mixin里和组件里都有created,mounted钩子时，先执行mixin里的，再执行组件里的</li><li>引入方式有两种，全局引入和在vue文件里局部引入</li></ol><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//全局引用  </span></span>
<span class="line"><span style="color:#A6ACCD;">//main.js文件</span></span>
<span class="line"><span style="color:#A6ACCD;">import mixin from &#39;./mixin&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue.mixin(mixin)</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">//在单个vue文件中引用</span></span>
<span class="line"><span style="color:#A6ACCD;">import &#39;@/mixin&#39;; // 引入mixin文件</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">   mixins: [mixin]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//全局引用  Vue.use将混入对象安装到 Vue 实例中，以使其全局可用，</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue.use（</span></span>
<span class="line"><span style="color:#A6ACCD;">  Vue.mixin({</span></span>
<span class="line"><span style="color:#A6ACCD;">     data() {},</span></span>
<span class="line"><span style="color:#A6ACCD;">     created() {}</span></span>
<span class="line"><span style="color:#A6ACCD;">  }),</span></span>
<span class="line"><span style="color:#A6ACCD;">options） //options是一个可选的配置对象</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="vue自定义组件-install" tabindex="-1">vue自定义组件 install <a class="header-anchor" href="#vue自定义组件-install" aria-label="Permalink to &quot;vue自定义组件 install&quot;">​</a></h2><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//注册一个全局组件search-bar</span></span>
<span class="line"><span style="color:#A6ACCD;">import VueSearchBar from &#39;./SearchBar.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const SearchBar = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      install: function (Vue，options) { //install 方法会传入Vue作为第一个参数，options参数可选</span></span>
<span class="line"><span style="color:#A6ACCD;">       //console.log(options.title)      a</span></span>
<span class="line"><span style="color:#A6ACCD;">       // 核心部分，在我们使用Vue.use()时，自动调用的是install，而install导出的必须是组件</span></span>
<span class="line"><span style="color:#A6ACCD;">          Vue.component(&#39;search-bar&#39;, VueSearchBar)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">export default SearchBar</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// main.js文件里 </span></span>
<span class="line"><span style="color:#A6ACCD;">Vue.use(SearchBar，{ title: &#39;a&#39; } )</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="vue-component和vue-extend" tabindex="-1">Vue.component和Vue.extend <a class="header-anchor" href="#vue-component和vue-extend" aria-label="Permalink to &quot;Vue.component和Vue.extend&quot;">​</a></h2><p>Vue提供的创建组件API：Vue.component和Vue.extend， 可以得到它们之间的联系如下：都用于创建组件,Vue.component内部实际上还是调用了Vue.extend</p><p>主要区别如下：创建组件的方式，Vue.extend需要手动执行new运算创建组件，而Vue.component是在$mount阶段自动执行new运算的</p><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import Loading from &#39;./loading.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const LoadingConstructor = Vue.extend(Loading)</span></span>
<span class="line"><span style="color:#A6ACCD;">instance = new LoadingConstructor({</span></span>
<span class="line"><span style="color:#A6ACCD;">    el: document.createElement(&#39;div&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="v-model-sync修饰符区别-v-bind和v-on" tabindex="-1">v-model.sync修饰符区别，v-bind和v-on <a class="header-anchor" href="#v-model-sync修饰符区别-v-bind和v-on" aria-label="Permalink to &quot;v-model.sync修饰符区别，v-bind和v-on&quot;">​</a></h2><p>vue中v-model和.sync修饰符区别:</p><ul><li><p>v-model 默认本质上是触发 :value属性和@input方法</p></li><li><p>.sync针对的是@update事件.一个组件可以多个属性用.sync修饰符，可以同时&quot;双向绑定多个“prop”，v-model一个组件只能有一个。</p></li><li><p>v-bind 指令可以用于响应式地更新 HTML attribute,缩写：</p></li><li><p>v-on它用于监听 DOM 事件，缩写@</p></li><li><p>Vm.$data指的组建中的data</p></li><li><p>Vm.massage指的组建中data中的massage</p></li></ul><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 阻止单击事件继续传播 </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">v-on</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">click</span><span style="color:#A6ACCD;">.</span><span style="color:#C792EA;">stop</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">doThis</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 提交事件不再重载页面 </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">form</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">v-on</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">submit</span><span style="color:#A6ACCD;">.</span><span style="color:#C792EA;">prevent</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">onSubmit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">// 修饰符可以串联 </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">v-on</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">click</span><span style="color:#A6ACCD;">.stop.</span><span style="color:#C792EA;">prevent</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">doThat</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 只有修饰符</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">form</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">v-on</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">submit</span><span style="color:#A6ACCD;">.</span><span style="color:#C792EA;">prevent</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">// 添加事件监听器时使用事件捕获模式 </span></span>
<span class="line"><span style="color:#A6ACCD;">// 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">v-on</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">click</span><span style="color:#A6ACCD;">.</span><span style="color:#C792EA;">capture</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">doThis</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">...</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">// 只当在 event.target 是当前元素自身时触发处理函数, 即事件不是从内部元素触发的</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">v-on</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">click</span><span style="color:#A6ACCD;">.</span><span style="color:#C792EA;">self</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">doThat</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">...</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 点击事件将只会触发一次 </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">v-on</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">click</span><span style="color:#A6ACCD;">.</span><span style="color:#C792EA;">once</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">doThis</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">//在“change”时而非“input”时更新</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#A6ACCD;">.</span><span style="color:#C792EA;">lazy</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">msg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ul><li>.sync 用于父组件直接更新自己本地数据</li></ul><p>子组件触发更新： this.$emit(&#39;update:title&#39;, newTitle) 父组件可以监听那个事件并根据需要更新一个本地的数据 property。$event代表newTitle</p><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">text-document</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">v-bind</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">doc</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">title</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">v-on</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">update</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">doc</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">title </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> $event</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">text-document</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">上面等价于.sync 修饰符：</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">text-document</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">v-bind</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">title</span><span style="color:#A6ACCD;">.</span><span style="color:#C792EA;">sync</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">doc</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">title</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">text-document</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="全局注册组件" tabindex="-1">全局注册组件 <a class="header-anchor" href="#全局注册组件" aria-label="Permalink to &quot;全局注册组件&quot;">​</a></h2><p>// webpack的require.context全局注册组件</p><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const requireComponent = require.context(</span></span>
<span class="line"><span style="color:#A6ACCD;">// 其组件目录的相对路径 </span></span>
<span class="line"><span style="color:#A6ACCD;">&#39;./components&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;"> // 是否查询其子目录 </span></span>
<span class="line"><span style="color:#A6ACCD;"> false,</span></span>
<span class="line"><span style="color:#A6ACCD;"> // 匹配基础组件文件名的正则表达式 </span></span>
<span class="line"><span style="color:#A6ACCD;"> /Base[A-Z]\\w+\\.(vue|js)$/ )</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="render函数" tabindex="-1">render函数 <a class="header-anchor" href="#render函数" aria-label="Permalink to &quot;render函数&quot;">​</a></h2><p>将 h 作为 createElement 的别名是 Vue 生态系统中的一个通用惯例，实际上也是 JSX 所要求的。</p><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Vue.component(&#39;my-item-zh&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">    functional: true,//函数式组件</span></span>
<span class="line"><span style="color:#A6ACCD;">    render: function (h, ctx) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        var item = ctx.props.item;</span></span>
<span class="line"><span style="color:#A6ACCD;">        /*console.log(&#39;item&#39;, item)</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;data&#39;,ctx.data)*/</span></span>
<span class="line"><span style="color:#A6ACCD;">        return h(&#39;li&#39;, ctx.data, [</span></span>
<span class="line"><span style="color:#A6ACCD;">            h(&#39;div&#39;, { attrs: { class: &#39;name&#39; } }, [item.value]),</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        item: { type: Object, required: true }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="vue-directive" tabindex="-1">Vue.directive <a class="header-anchor" href="#vue-directive" aria-label="Permalink to &quot;Vue.directive&quot;">​</a></h2><p>自定义指令，bind只调用一次， inserted插入父节点，update更新，componentUpdated完成更新，unbind解绑时</p><h2 id="vue3-0" tabindex="-1">vue3.0 <a class="header-anchor" href="#vue3-0" aria-label="Permalink to &quot;vue3.0&quot;">​</a></h2><p>声明响应式数据，需要使用 ref,reactive 来一次声明多个变量 费弃beforeCreate、created，改在setup中 组件不再限制 template 中根元素的个数 methods、watch 和 computed在setup中进行，setup return回一个对象</p><h2 id="vue模版编译的过程" tabindex="-1">vue模版编译的过程 <a class="header-anchor" href="#vue模版编译的过程" aria-label="Permalink to &quot;vue模版编译的过程&quot;">​</a></h2><p>解析html字符串（通过正则判断开始标签，结束标签，属性等）=》将html字符串转化为AST语法树（描述节点之间父子关系，节点属性，内容，children等等树形数据）=》将AST语法树生成最终render函数（就是字符串拼接，模版引擎）=》生成虚拟dom（vnode） =》 替换成真实的dom</p><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 举个例子：</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">”app”</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">&lt;p&gt;hello {{name}}&lt;/p&gt;hello</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// render函数 </span></span>
<span class="line"><span style="color:#82AAFF;">_c</span><span style="color:#A6ACCD;">(“div”</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_c</span><span style="color:#A6ACCD;">(“p”</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_v</span><span style="color:#A6ACCD;">(‘hello’</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_s</span><span style="color:#A6ACCD;">(name))  )</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_v</span><span style="color:#A6ACCD;">(‘hello’))</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// _c表示标签，第一个参数是标签名，第二个参数是属性，第三个参数及往后参数是子节点,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//_v表示文本</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//_s表示将变量转化为字符串</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//虚拟节点就是通过_c _v等实现用对象来描述dom的操作</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="什么是-render-函数" tabindex="-1">什么是 render 函数？ <a class="header-anchor" href="#什么是-render-函数" aria-label="Permalink to &quot;什么是 render 函数？&quot;">​</a></h2><ol><li>render 函数 跟 template 一样都是创建 html 模板的，但是有些场景中用 template 实现起来代码冗长繁琐而且有大量重复，这时候就可以用 render 函数。</li><li>当使用render函数描述虚拟DOM时，vue提供一个函数，这个函数是就构建虚拟DOM所需要的工具。官网上给他起了个名字叫createElement。还有约定的简写叫h</li><li>语法：</li></ol><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">render(createElement){ return createElement(&#39;标签名&#39;，&#39;执行的操作&#39;，&#39;展示的内容&#39;) } </span></span>
<span class="line"><span style="color:#A6ACCD;">createElement() 有三个参数:</span></span>
<span class="line"><span style="color:#A6ACCD;">第一个参数，必选，为 HTML 标签或组件或函数；</span></span>
<span class="line"><span style="color:#A6ACCD;">第二个参数，可选，为数据对象，标签属性等；</span></span>
<span class="line"><span style="color:#A6ACCD;">第三个参数，可选，该标签内容或子节点；如果没有内容，则不显示</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">render (h) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   // render方法提供给我们一个h函数，它可以渲染VNode</span></span>
<span class="line"><span style="color:#A6ACCD;">   return h(NoData, { props })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="4"><li>render（）方法干了什么。 代替了<template></template>渲染dom</li></ol><h2 id="vue双向绑定实现" tabindex="-1">vue双向绑定实现 <a class="header-anchor" href="#vue双向绑定实现" aria-label="Permalink to &quot;vue双向绑定实现&quot;">​</a></h2><h3 id="原理-object对象的defineproperty属性-重写data的set和get函数来实现的" tabindex="-1">原理： Object对象的defineProperty属性，重写data的set和get函数来实现的 <a class="header-anchor" href="#原理-object对象的defineproperty属性-重写data的set和get函数来实现的" aria-label="Permalink to &quot;原理： Object对象的defineProperty属性，重写data的set和get函数来实现的&quot;">​</a></h3><p>Object.defineProperty( )是用来做什么的？它可以来控制一个对象属性的一些特有操作，比如读写权、是否可以枚举，这里我们主要先来研究下它对应的两个描述属性get和set。</p><p>通过Object.defineProperty( )对属性设置一个set函数，当数据改变了就会来触发这个函数，所以我们只要将一些需要更新的方法放在这里面就可以实现data更新view了。</p><p>我们所说的数据双向绑定，一定是对于UI控件来说的，非UI控件不会涉及到数据双向绑定。 单向数据绑定是使用状态管理工具（如redux）的前提。如果我们使用vuex，那么数据流也是单项的</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   var obj = </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    val： </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zhao</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;  </span><span style="color:#676E95;font-style:italic;">//赋予初始值</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">;  //定义一个空对象</span></span>
<span class="line"><span style="color:#A6ACCD;">    Object.defineProperty(obj, &#39;val&#39;, </span><span style="color:#89DDFF;">{</span><span style="color:#676E95;font-style:italic;">//定义要修改对象的属性</span></span>
<span class="line"><span style="color:#A6ACCD;">        get: </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        set: </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">newVal</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">             </span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newVal</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//定义val等于修改后的内容</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//让文本框的内容等于val</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//让span的内容等于val</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    document.addEventListener(&#39;keyup&#39;, function (e) </span><span style="color:#89DDFF;">{</span><span style="color:#676E95;font-style:italic;">//当在文本框输入内容时让对象里你定义的val等于文本框的值</span></span>
<span class="line"><span style="color:#A6ACCD;">        obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>`,63),o=[p];function t(r,c,i,y,D,u){return n(),a("div",null,o)}const b=s(e,[["render",t]]);export{A as __pageData,b as default};
