import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className="container">
            <div className="sidebar-container">
                <h1>Cellar Constitution</h1>

                <div className="nav-option">
                    <i className="bi bi-speedometer2"></i>
                    <h3>Dashboard</h3>
                </div>

                <div className="nav-option">
                    <i className="bi bi-calendar3"></i>
                    <h3>Calendar</h3>
                </div>

                <div className="nav-option">
                    <i className="bi bi-person"></i>
                    <h3>Contact</h3>
                </div>

                <div className="nav-option">
                    <i className="bi bi-fork-knife"></i>
                    <h3>Inventory</h3>
                </div>

                <div className="nav-option">
                    <i className="bi bi-arrow-bar-left"></i>
                    <h3>Log Out</h3>
                </div>
            </div>
        </div>
    )
}

export default Sidebar