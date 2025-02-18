// checking how many cars in garage

function Garage(props){
    const cars = props.cars

    return(
    <>
        <h1>Garage</h1>
        {cars.length > 0 &&
        <h2>
            You have {cars.length} cars in your garage.
        </h2>
    }
    </>
    )
}

const cars=['Ford', 'BMW', 'Audi', 'Toyota'];
const root = reactDOM.createRoot(document.getElementById('root'))
root.render(<Garage cars={cars}/>)