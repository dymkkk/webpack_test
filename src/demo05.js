

var NoteList = React.createClass({
    render:function(){
       return <div onClick={this.say}>
           {
               React.Children.map(this.props.children,function(v){
                   return <div>{v}</div>
               })
           }
       </div>
    },
    say:function(){
        console.log(this.props);
    }
});

ReactDOM.render(
    <NoteList>
        <span>00</span>
        <span>11</span>
        <span>22</span>
    </NoteList>,
    document.getElementById('container')
);