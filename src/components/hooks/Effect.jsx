import React, { useState, useEffect, use } from 'react'

const Effect = () => {
    console.log("Render");

    const [username, setUsername] = useState('')
    const [products, setProducts] = useState([])
    console.log(products);
    async function fetchData() {
        // console.log("fetching data from database");
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()
        // console.log(data);
        if (Array.isArray(data?.products)) {
            setProducts(data?.products)
        } else {
            alert("api fetch failed")
        }
    }
    // fetchData() In react we never call function directly. Because component re-render

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
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

export default Effect