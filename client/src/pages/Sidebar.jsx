import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Sidebar.css'

function Sidebar() {
    const [contactsDropDown, setcontactsDropDown] = useState(false);
    return (
        <div className="container">
            <div className="sidebar-container">
                <h1>Cellar Constitution</h1>

                <NavLink to="/home" className="nav-option">
                    <i className="bi bi-speedometer2"></i>
                    <h3>Dashboard</h3>
                </NavLink>

                <NavLink to="/home/calendar" className="nav-option">
                    <i className="bi bi-calendar3"></i>
                    <h3>Calendar</h3>
                </NavLink>

                {/* <NavLink to='/home/contacts' className="nav-option">
                    <i className="bi bi-person"></i>
                    <h3>Contact</h3>
                </NavLink> */}

                <div className='nav-option dropdown-toggle' onClick={() => setcontactsDropDown(!contactsDropDown)} style={{cursor: 'pointer'}}>
                    <NavLink to='/home/contact' className='nav-option'>
                        <i className="bi bi-person"></i>
                        <h3>Contacts</h3>
                        <i className={`bi ${contactsDropDown ? 'bi-chevron-up' : 'bi-chevron-down'}`} onClick={(e) => {setcontactsDropDown((prev) => !prev)}}></i>
                    </NavLink>
                </div>

                {contactsDropDown && (
                    <div className="sub-menu">
                        <NavLink to="/home/contact/team" className="nav-option sub-option">
                            <h4>Team</h4>
                        </NavLink>
                        <NavLink to="/home/contact/external" className="nav-option sub-option">
                            <h4>External Contacts</h4>
                        </NavLink>
                    </div>
                )}

                <NavLink to='/home/inventory' className="nav-option">
                    <i className="bi bi-fork-knife"></i>
                    <h3>Inventory</h3>
                </NavLink>

                <NavLink to='/home/donations' className="nav-option">
                    <i className="bi bi-bank2"></i>
                    <h3>Donations</h3>
                </NavLink>

                <NavLink to='/' className="nav-option">
                    <i className="bi bi-arrow-bar-left"></i>
                    <h3>Log Out</h3>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar