import React, { useState } from 'react'

const FormWithState = () => {

    console.log("Render");
    let s = ''
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNo, setPhoneNo] = useState(91)
    const [username, setUsername] = useState('hamza')


    const changeTitle = (e) => {
        // console.log(e.target.value);
        setUsername(e.target.value)
    }

    const changeNumber = (e) => setPhoneNo(e.target.value)

    const submit = (e)=>{
        e.preventDefault()
        console.log(username);
        console.log(phoneNo);
        console.log(email);
        console.log(address);

    }

    return (
        <>
            <form onSubmit={submit}>
                <label htmlFor="">username</label>
                <input type="text" onChange={changeTitle} value={username} />
                <br />
                <label htmlFor="" >Phone No</label>
                <input type="number" onChange={changeNumber} value={phoneNo} />
                <label htmlFor="">email</label>
                <input type="email" onChange={(e) => {
                    setEmail(e.target.value)
                    console.log("change email");
                }} />
                <label htmlFor="">Address</label>
                <input type="text" onChange={(e) => setAddress(e.target.value)} />
                <button>submit</button>
            </form>

            <div>User name : {username}</div>
        </>

    )
}

export default FormWithState