function Car(props){
    return <h2>I am a {props.brand}!</h2>
}

function Garage(){
    return(
        <>
            <h1>The car in my garage!</h1>
            <Car brand='Toyota' />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Garage/>)
