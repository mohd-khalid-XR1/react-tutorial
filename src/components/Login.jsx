import React from 'react'

const Login = () => {

    const submit = (e) => {
        e.preventDefault()
        // console.log(e);
        const formData = new FormData(e.target)
        // console.log("name", formData.get("name"));
        // console.log("color", formData.get("color"));
    }
    return (
        <form onSubmit={submit}>
            <input type="text" name='name' />
            <input type="color" name='color' />
            <button type="submit">submit</button>
        </form>
    )
}

export default Login