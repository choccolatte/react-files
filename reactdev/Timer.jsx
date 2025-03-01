import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer(){
    const [count, setCount] = useState(0)

    useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1)
    }, 1000)
    
    return () => clearTimeout(timer) // clearing the timer
}, [])

    return <h1>Timer reached {count} times!</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Timer />)