import { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor(){
    const [color, setColor] = useState('red')
    
    return (
    <>
      <h1>This is the color: {color}.</h1>
      <button type = 'button' onClick={()=> setColor('green')}>Turn to Green!</button>
    </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<FavoriteColor />)