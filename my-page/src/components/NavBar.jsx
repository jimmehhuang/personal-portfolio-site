import React, {useState} from "react"
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const NavBar = ({updatePage}) => {
    const [nav, setNav] = useState(false);

    const changeNav = () => {
        setNav(!nav);
    }

    const navLinks = [
        {
            id: 0,
            link: 'About'
        },
        {   
            id: 1,
            link: 'Projects'
        },
        {
            id: 2,
            link: 'Experience'
        },
        {
            id: 3,
            link: 'Contact'
        }
    ]
    return (
        <div className='flex justify-between items-center'>
            <a className="p-4" onClick={() => updatePage(0)}>JH</a>
            <ul className="hidden md:flex">
                {navLinks.map(({id, link}) => (            
                    <li key={id} className="p-4" onClick={() => updatePage(id)}>{link}</li>
                    ))}
            </ul>
            <div onClick={changeNav} className="p-2 block md:hidden">
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}                
            </div>
            <div className={!nav ? "fixed right-0 top-12 w-{60%} bg-gray-800 ease-in-out duration-500" : "fixed right-[-100%] top-12 ease-in-out duration-500"}>
               <ul className="p-2">
                {navLinks.map(({id, link}) => (            
                    <li key={id} className="p-4 border-b border-gray-500" onClick={() => updatePage(id)}>{link}</li>
                    ))}
            </ul> 
            </div>            
        </div>
    )
}

export default NavBar;