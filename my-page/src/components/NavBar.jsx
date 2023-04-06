import React, {useState} from "react"
import {RxHamburgerMenu} from 'react-icons/rx'

const NavBar = ({updatePage}) => {

    const navLinks = [
        {
            id: 1,
            link: 'About'
        },
        {   
            id: 2,
            link: 'Projects'
        },
        {
            id: 3,
            link: 'Experience'
        },
        {
            id: 4,
            link: 'Contact'
        }
    ]
    return (
        <div className='flex justify-between items-center'>
            <a className="" onClick={() => updatePage(0)}>JH</a>
                <RxHamburgerMenu className=""/>
            <ul className="flex">
                {navLinks.map(({id, link}) => (            
                    <li key={id} className="p-4" onClick={() => updatePage(id)}>{link}</li>
                    ))}
                </ul>
        </div>
    )
}

export default NavBar;