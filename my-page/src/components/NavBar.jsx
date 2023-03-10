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
        <div className='navbar bg-rose-600 font-semibold text-white'>
            <div>
                <a className="btn btn-ghost" onClick={() => updatePage(0)}>JH</a>
            </div>
            <div tabIndex={0} className="collapse">
                <RxHamburgerMenu className="collapse-title"/>
                <ul className="collapse-content flex flex-col">
                {navLinks.map(({id, link}) => (            
                    <li key={id} className="px-4 cursor-pointer capitalize hover:scale-110" onClick={() => updatePage(id)}>{link}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default NavBar;