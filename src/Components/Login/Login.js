import React from 'react'
import './Login.css'
import {useState} from 'react'

export default function Login() {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('form submitted')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input onChange={handleOnChange} value={username} placeholder='username' type='text' name='username'></input>
                <br/>
                <label>Password</label>
                <input onChange={handleOnChange} value={password} type='password' placeholder='password' type='text' name='password' type='password'></input>
                <br/>
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}
