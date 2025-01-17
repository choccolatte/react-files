ReactDOM.render(
    <div>
    <HelloWorld greetPerson='Batman'/>
    <HelloWorld greetPerson='Supes'/>
    </div>,
    document.querySelector('#container')
);

var HelloWorld = React.createClass({
    render:function(){
        return (
            <p>Hello, {this.props.greetPerson}!</p>
        )
    }
})