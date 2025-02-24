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

    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById('div1').innerHTML = 'Before the update, the favorite color was ' + prevState.favoritecolor
    }

    componentDidUpdate(){
        document.getElementById('div2').innerHTML = 'The updated favorite color now is ' + this.state.favoritecolor
    }

    render(){
        return(
            <div>
                <h1>Fav Color: {this.state.favoriteColor}</h1>
                <div id='div1'></div>
                <div id='div2'></div>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Header />)