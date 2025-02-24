class Container extends React.Component{
    constructor(props){
        super(props)
        this.state = {show: true}
    }

    delHeader = () => {
        this.setState({show: false})
    }

    render(){
        let myHeader
        if (this.state.show){
            myHeader = <Child />
        }

        return (
            <div>
                {myHeader}
                <button type='button' onClick={this.delHeader}>Delete Header</button>
            </div>
    )
  }
}

class Child extends React.Component{
    componentWillUnmount(){
        alert('the component named "Header" is about to be unmounted.')
    }

    render(){
        return(
            <h1>Hello World!</h1>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Container />)