import React from 'react'
import { NavLink } from 'react-router-dom'

// Imported Files
import miniLogo from "../../assets/logos/miniLogo.JPG" 

const Nav = () => {
    const navLinkStylesAbout = ({ isActive }) => {
        return {
            color: isActive ? 'red' : 'black',
            fontSize: isActive ? '50px' : '40px',
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }
    const navLinkStylesPortfolio = ({ isActive }) => {
        return {
            color: isActive ? 'blue' : 'black',
            fontSize: isActive ? '50px' : '40px',
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }
    const navLinkStylesContact = ({ isActive }) => {
        return {
            color: isActive ? 'yellow' : 'black',
            fontSize: isActive ? '50px' : '40px',
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }
    const navLinkStylesResume = ({ isActive }) => {
        return {
            color: isActive ? 'green' : 'black',
            fontSize: isActive ? '50px' : '40px',
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }

    return(
        <div className='bg-gray-700 py-4 flex'>
            <div className='w-1/12'>
                <img src={miniLogo} className="rounded w-16 ml-4"></img>
            </div>
            <p className='text-5xl text-white mx-auto w-5/12'>Austin Ewell</p>
            <ul className='absolute right-12 text-right w-4/12'>
                <li>
                    <NavLink end to="/" style={navLinkStylesAbout}>About</NavLink>
                </li>
                <li>
                    <NavLink to="Portfolio" style={navLinkStylesPortfolio}>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="Contact" style={navLinkStylesContact}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to="Resume" style={navLinkStylesResume}>Resume</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav;