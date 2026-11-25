import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import axios from "axios";

const HomeLayout = () => {
    return( 
      <div style={{display: 'flex'}}>
        <nav style={{width: '200px'}}>
            <title>Home</title>
            <h1>HOMEPAGE DASHBOARD</h1>
            <ul>
                <li><NavLink to='/home'>Dashboard</NavLink></li>
                <li><NavLink to='/home/calendar'>Calendar</NavLink></li>
                <li><NavLink to='/home/contacts'>Contacts</NavLink></li>
                <li><NavLink to='/home/inventory'>Inventory</NavLink></li>
            </ul>
        </nav>
        <main style={{ flex : 1}}>
            <Outlet />
        </main>

      </div>
    )
}

export default HomeLayout
