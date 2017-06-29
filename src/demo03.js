/*
 JSX 允许直接在模板插入 JavaScript 变量。如果这个变量是一个数组，则会展开这个数组的所有成员
* */
var ary = [
    <div key="d1">第一个节点</div>,
    <div key="d2">第二个节点</div>,
    <div key="d3">第三个节点</div>
];
ReactDOM.render(
    <div>{ary}</div>,
    document.getElementById("container")
);