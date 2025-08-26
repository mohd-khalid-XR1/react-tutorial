import React, { useState } from 'react'
import { useEffect } from 'react'

const Effect2 = () => {
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    async function fetchData() {
        // console.log("fetching data from database");
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()
        // console.log(data);
        if (Array.isArray(data?.products)) {
            setProducts(data?.products)
            setTimeout(() => {
                setName("product fetched")
            }, 5000)
        } else {
            alert("api fetch failed")
        }
    }
    // fetchData() In react we never call function directly. Because component re-render

    useEffect(() => {
        fetchData()
        // console.log("mount : mount means when component is visible to ui");
    }, [])

    useEffect(() => {
        console.log("Render when some State change");
    }, [count, name])


    return (
        <div>
            <h2>name : {name}</h2>
            <h2>count : {count}</h2>
            <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
            {products.map((product, index) => {
                const { price, returnPolicy } = product
                return <div key={product.id}>
                    <img src={product.thumbnail} alt={product.title} height={200} />
                    <h1>{product.title}</h1>
                    <span>{"Rs " + price}</span>
                    <p>Return Policy : {returnPolicy}</p>
                    <p>{product.description}</p>
                </div>
            })}
        </div>
    )
}

export default Effect2