// LoginPage component
import React, {useState} from 'react'
import {useParams, Link} from 'react-router-dom'

const LoginPage = () =>  {
    const {role} = useParams() // get role (admin, staff, volunteer) from the link
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(role, username, password)
    }

    return (
        <div>
            <h1>{role} Login</h1>
            <form onSubmit={handleSubmit}>
                <h3>Organization Email</h3>
                <input type='text' name='email' placeholder='name@yourorganization.org' onChange={(e) => setUsername(e.target.value)}/>
                <h3>Password</h3>
                <input type='text' name='password' onChange={(e) => setPassword(e.target.value)}/>
                <button type='submit'>Log In</button>
            </form>
            <br></br>
            <Link to='/'>Go to a different portal</Link>
        </div>
    )
}

export default LoginPage