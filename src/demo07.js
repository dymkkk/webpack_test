var MyCom = React.createClass({
    clickHandler:function(){
        console.log("=====================");
        console.log(this.refs.myDom);
        this.refs.myDom.style.opacity = 0.2;
    },
    render:function(){
        return(
        <div>
            <p ref='myDom'>Hello</p>
            <p onClick = {this.clickHandler}>World</p>
        </div>
        )
    }
});

ReactDOM.render(
    <MyCom/>,
    document.getElementById('container')
);