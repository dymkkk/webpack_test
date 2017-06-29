/*
* 上面代码体现了 JSX 的基本语法规则：遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；遇到代码块（以 { 开头），就用 JavaScript 规则解析
* */
var names = ['AAAA','BBBB','CCCC'];
ReactDOM.render(
    <div>
        {
            names.map(function(name){
                return <div>Hello ,{name}</div>
            })
        }
    </div>,
    document.getElementById("container")
);