function Car(props){
    return <h2>I am a {props.brand.model}!</h2>
}

function Garage(){
    const carInfo = {
        name:'Toyota',
        model:'Camry'
    }
    return (
        <>
          <h2>What car is in my garage?</h2>
            <Car brand={ carInfo } />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Garage />)
