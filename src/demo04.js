/*
 React 允许将代码封装成组件（component），然后像插入普通 HTML 标签一样，在网页中插入这个组件。React.createClass 方法就用于生成一个组件类
 所有组件类都必须有自己的 render 方法，用于输出组件
 组件不能输出两个或以上的顶层标签
* */
var HelloMessage = React.createClass({
   render:function(){
       return <div>Hello {this.props.name}<div>test</div></div>
   }
});

ReactDOM.render(
    <HelloMessage name ="丁月明"/>,
    document.getElementById('container')
);