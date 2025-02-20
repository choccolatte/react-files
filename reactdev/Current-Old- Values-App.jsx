import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function RenderApp(){
    const [inputValue, setInputValue] = useState('')
    const previousInputValue = useRef('')

    useEffect(() => {
        previousInputValue.current = inputValue
    }, [inputValue])

    return(
    <>
        <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <h2>Current Value: {inputValue}</h2>
        <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RenderApp />);