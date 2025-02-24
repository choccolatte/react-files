class Header extends React.Component{
    constructor(props){
        super(props)    
        this.state = {favoriteColor : 'red'}
    }

    changeColor = () => {
        this.setState({favoriteColor: 'black'})
    }

    render(){
        return(
            <div>
                <h1>Fav Color: {this.state.favoriteColor}</h1>
                <button type = 'button' onClick={this.changeColor}>Change Color</button>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Header />)