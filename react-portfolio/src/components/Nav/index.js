import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './nav.css'

// Imported Files
import miniLogo from "../../assets/logos/miniLogo.JPG" 

const Nav = () => {
    const navLinkStylesAbout = ({ isActive }) => {
        return {
            color: isActive ? 'red' : 'black',
            fontSize: isActive ? '50px' : '40px'
        }
    }
    const navLinkStylesPortfolio = ({ isActive }) => {
        return {
            color: isActive ? 'blue' : 'black',
            fontSize: isActive ? '50px' : '40px'
        }
    }
    const navLinkStylesContact = ({ isActive }) => {
        return {
            color: isActive ? 'yellow' : 'black',
            fontSize: isActive ? '50px' : '40px'
        }
    }
    const navLinkStylesResume = ({ isActive }) => {
        return {
            color: isActive ? 'green' : 'black',
            fontSize: isActive ? '50px' : '40px'
        }
    }


    return(
        <div className='bg-gray-700 py-4 flex'>
            <img src={miniLogo} className="rounded w-16 ml-4"></img>
            <p className='text-3xl text-pink-500'>Austin Ewell</p>
            <ul className='absolute right-12 text-right'>
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