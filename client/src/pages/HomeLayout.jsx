import React from 'react';
import {Outlet} from "react-router-dom";
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
