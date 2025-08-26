import React, { useState } from 'react'
import { useRef } from 'react'
import './Ref.css'


const Ref = () => {

    const [active, setActive] = useState('')
    const containerRef = useRef(null)
    console.log(containerRef);
    const changeStyle = () => {
        setActive("green")
    }

    const changeStyleUsingRef = () => {
        if (containerRef.current) {
            console.log(containerRef.current);
            containerRef.current.style.backgroundColor = 'pink'
            containerRef.current.classList.add("trojan")
        }
    }

    return (
        <div>
            <div className={`box ${active}`}></div>
            <button onClick={changeStyle}>change style</button>
            <section className="container" ref={containerRef}></section>
            <button onClick={changeStyleUsingRef}>change style using use Ref</button>
        </div>
    )
}

export default Ref