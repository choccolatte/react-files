var Buttonify = React.createClass({
    render:function(){
        <div>
            <button type={this.props.behavior} > {this.props.children}</button>
        </div>
    }
})

// calling the component -
ReactDOM.render(
    <div>
        <Buttonify behavior='Submit'>SEND DATA</Buttonify> 
    </div>,
    document.querySelector('#container')
);