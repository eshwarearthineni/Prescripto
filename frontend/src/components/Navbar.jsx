import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (   
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400'>
        <img src={assets.logo} alt=''/>
        <ul>
            <NavLink>
                <li>Home</li>
                <hr />
            </NavLink>

            <NavLink>
                <li>All Doctors</li>
                <hr />
            </NavLink>

            <NavLink>
                <li>Abouts</li>
                <hr />
            </NavLink>

            <NavLink>
                <li>Contacts</li>
                <hr />
            </NavLink>

        </ul>
        <div>
            <button>Create Accounts</button>
        </div>


    </div>
  )
}

export default Navbar;