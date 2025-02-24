class Header extends React.Component{
    constructor(props){
        super(props)    
        this.state = {favoriteColor : 'red'}
    }
    
    componentDidMount(){
        setTimeout(() => {
            this.setState({favoritecolor : 'black'})
        }, 1000)
    }

    componentDidUpdate(){
        document.getElementById('mydiv').innerHTML = 'The updated favorite color now is ' + this.state.favoritecolor
    }

    render(){
        return(
            <div>
                <h1>Fav Color: {this.state.favoriteColor}</h1>
                <div id='mydiv'></div>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Header />)