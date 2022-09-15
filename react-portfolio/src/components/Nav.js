import React from 'react'

// Imported Files
import miniLogo from "../assets/logos/miniLogo.JPG" 

const Nav = () => {
    return(
        <div className='bg-gray-700 py-4 flex'>
            <img src={miniLogo} className="rounded w-16 ml-4"></img>
            <p className='text-3xl text-pink-500'>Austin Ewell</p>
        </div>
    )
}

export default Nav;