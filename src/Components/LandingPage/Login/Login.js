import React from 'react'
import './Login.css'

export default function Login() {
    return (
        <div>
            <form>
                <label>Username</label>
                <input placeholder='username' type='text' name='username'></input>
                <br/>
                <label>Password</label>
                <input placeholder='password' type='text' name='password' type='password'></input>
                <br/>
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}
