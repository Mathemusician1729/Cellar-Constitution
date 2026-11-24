// homepage component
import React from 'react'
import {Link} from 'react-router-dom'

const Homepage = () =>  {
    return (
        <div className='home'>
            <h1>Welcome to Cellar Constitution</h1>
            <h2>All your needs all in one place! (replace with a way better hook)</h2>
            <h3>Administrator</h3>
            <Link to='/login/Admin' className='button'>Administrator Login</Link>
            <br></br>
            <Link to ='/' className='button'>Register your Organization</Link>
            <h3>Staff</h3>
            <Link to='/login/Staff' className='button'>Staff Login</Link>
            <h3>Volunteer</h3>
            <Link to='/login/Volunteer' className='button'>Volunteer Login</Link>
            <br></br>
            <Link to ='/' className='button'>Signup to Volunteer</Link>
        </div>
    )
}

export default Homepage