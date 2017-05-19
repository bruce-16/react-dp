##目录结构

- containers 里面每一个文件夹都是对应的一个页面,每个文件夹里面可能都存在一个子页面.比如(subPage文件夹)
- components 里面每一个文件夹都是一个组件,每个组件可大可小.
- reducers 放入redux需要的reducers
- actions 放入redux需要的actions,actionTypes
- store 产生redux的sotre的配置文件
- style 样式文件
- App.js 程序主体,比如: redux的store设置,route设置等
- index.js 程序入口,因为组件,使用render方法.
- index.html webpack打包模板

components 文件夹里面放的都是公共组件,containers里面都是私有的.
components 木偶组件, containers 智能组件

- 智能组件: 掌握数据,传递数据
- 木偶组件: 展示数据,接收数据

