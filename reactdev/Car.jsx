import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car(){
    const [car, setCar] = setState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
})

    const updateColor = () => {
        setCar (previousState => {
            return {...previousState, color:'red'}
        })
    }

    return (
    <>
        <h1>My {car.brand}</h1>
        <p>Its a {car.color} {car.model} from {car.year}.</p>
        <button type='button' onClick = {updateColor}>Red</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Car />)


// function Car(props){
//     return <h2>I am a {props.brand}!</h2>
// }

// function Garage(){
//     return(
//         <>
//             <h1>The car in my garage!</h1>
//             <Car brand='Toyota' />
//         </>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<Garage/>)
