function Car(props){
    return <h2>I am a {props.brand}!</h2>
}

function Garage(){
    const carName = 'Toyota' // defining the variable here
    return(
        <>
            <h1>The car in my garage!</h1>
            <Car carName='Toyota' /> // passing defined variable here
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Garage/>)
