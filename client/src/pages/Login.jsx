// LoginPage component
import React, {useState} from 'react'
import {useParams, Link} from 'react-router-dom'

const LoginPage = () =>  {
    const {role} = useParams() // get role (admin, staff, volunteer) from the link
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [keepSignin, setkeepSignin] = useState(false)
    const [showpassword, setshowpassword] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(role, username, password, keepSignin)
    }

    return (
        <div>
            <title>Log In</title>
            <Link to='/'>Go to a different portal</Link>
            <h1>{role} Login</h1>
            <form onSubmit={handleSubmit}> 
                <h3>Organization Email</h3>
                <input type='text' name='email' placeholder='name@yourorganization.org' onChange={(e) => setUsername(e.target.value)}/>

                <h3>Password</h3>
                <input type='password' name='password' onChange={(e) => setPassword(e.target.value)}/>
                <label>
                    <input type='checkbox' checked={keepSignin} onChange={(e) => setkeepSignin(e.target.checked)}/> Keep me signed in
                </label>
                <br></br>

                <button type='submit'>Log In</button>
            </form>
            <form>
            {role === 'Volunteer' && (
                <p>
                    Not a Volunteer yet? <Link to='/'>Sign up to volunteer</Link>
                </p>
            )}
            {role === 'Admin' && (
                <p>
                    Setting up your food bank for the first time? <Link to='/'>Register your Organization</Link>
                </p>
            )}
            </form>
        </div>
    )
}

export default LoginPage
