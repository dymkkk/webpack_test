var LikeBtn = React.createClass({
    getInitialState:function(){
        return {liked:false};
    },
    clickHandler:function(){
        this.setState({liked:!this.state.liked});
        console.log(this.state);
    },
    render:function(){
        var text = this.state.liked ? 'like':'has liked';
        return <div onClick = {this.clickHandler}>Hello {text}</div>
    }
});

ReactDOM.render(
    <LikeBtn/>,
    document.getElementById('container')
);