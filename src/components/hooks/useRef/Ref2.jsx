import React, { useRef, useState } from 'react'

const Ref2 = () => {
    const [isVisible, setIsVisible] = useState(true)
    let a = 0 // re-initialises when component is re-render
    // console.log("render");
    const name = useRef(0)
    console.log(name.current);
    const increment = () => {
        a++
        // console.log(a);
        if (name.current === 0 || name.current) {
            name.current = name.current + 1
            console.log(name.current);
        }
    }

    return (
        <div>
            {/* <p>count : {name.current}</p> ❎ */}
            <button onClick={increment}>increment</button>
            <button onClick={() => setIsVisible(false)}>isVisible</button>
        </div>
    )
}

export default Ref2