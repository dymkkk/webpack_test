var MyCom = React.createClass({
    getDefaultProps:function(){
        return {
            "title":"我是默认值啊!"
        }
    },
    PropTypes:{
        title:React.PropTypes.string.isRequired
    },
    render:function(){
        return <div>Hello {this.props.title}</div>
    }
});

var num = 123;
ReactDOM.render(
    <MyCom/>,
    document.getElementById('container')
);