import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './nav.css'

// Imported Files
import miniLogo from "../../assets/logos/miniLogo.JPG" 

const Nav = () => {

    const navLinkStylesAbout = ({ isActive }) => {
        return {
            color: isActive ? 'red' : 'white'
        }
    }
    const navLinkStylesPortfolio = ({ isActive }) => {
        return {
            color: isActive ? 'blue' : 'white'
        }
    }
    const navLinkStylesContact = ({ isActive }) => {
        return {
            color: isActive ? 'yellow' : 'white'
        }
    }
    const navLinkStylesResume = ({ isActive }) => {
        return {
            color: isActive ? 'green' : 'white'
        }
    }


    return(
        <div className='bg-gray-700 py-4 flex'>
            <img src={miniLogo} className="rounded w-16 ml-4"></img>
            <p className='text-3xl text-pink-500'>Austin Ewell</p>
            <ul className='absolute right-4'>
                <li>
                    <NavLink end to="/" style={navLinkStylesAbout} className='text-3xl'>About</NavLink>
                </li>
                <li>
                    <NavLink to="Portfolio" style={navLinkStylesPortfolio} className='text-3xl'>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="Contact" style={navLinkStylesContact} className='text-3xl'>Contact</NavLink>
                </li>
                <li>
                    <NavLink to="Resume" style={navLinkStylesResume} className='text-3xl'>Resume</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav;