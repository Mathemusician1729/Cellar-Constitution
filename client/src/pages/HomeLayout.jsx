import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import axios from "axios";
import Sidebar from './Sidebar'

function HomeLayout() {
    return( 
      <div className='layout'>
        <Sidebar />
        <main className='content'>
            <Outlet />
        </main>
      </div>
    )
}

export default HomeLayout
