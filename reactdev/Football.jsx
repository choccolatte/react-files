function Football(){
    const shoot = (a, b) =>{
        alert(b.type)
    /* here, b represents the react event that triggered the function,
    in this case the 'click' event.
    */
    }

return (
    <button onClick={(event) => shoot('Goal!!!', event)}>Take the Shot</button>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Football />)