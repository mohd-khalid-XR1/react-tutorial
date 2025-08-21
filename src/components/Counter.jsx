import React from 'react'
import { useState } from 'react'

// Note  : Whenever state changes then component(Counter) will re-render(re-run)
const Counter = () => {

    const [counter, setCounter] = useState(0)
    const [color, setColor] = useState([])
    
    console.log(color);

    const increment = (e) => {
        // setCounter(5)
        // setCounter((prev) => {
        //     console.log(prev)
        //     return prev + 1
        // })
        setCounter((prev) => prev + 1)
    }
    function decrement(e) {
        setCounter((prev) => prev - 1)
    }

    const arr = [1, 'hello', 2, 3, 4, 5]

    const changeColor = (e) => {
        e.preventDefault()
        let form = e.target
        const formData = new FormData(form)
        const colorInput = formData.get("color")
        // console.log(color);
        setColor((prev) => [colorInput, ...prev]) // state updated
        console.log(color);
    }

    return (
        <>
            <h1>State counter</h1>
            <button onClick={increment}>Change State Counter</button>
            <button onClick={decrement}>Decrement Counter</button>
            <h3>Value : {counter}</h3>
            <hr />
            <ul>
                {arr.map((element, index) => {
                    return <li key={element}>Item {element}</li>
                })}
            </ul>
            <hr />
            <form onSubmit={changeColor}>
                <input type="color" name='color' />
                <button type='submit'>submit</button>
            </form>
            <ul>
                {color.map((c) => {
                    return <li key={c}>{c}</li>
                })}
            </ul>
        </>
    )
}

export default Counter