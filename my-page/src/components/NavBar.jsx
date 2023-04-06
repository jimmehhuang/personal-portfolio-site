import React, {useState} from "react"
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const NavBar = ({updatePage}) => {
    const [nav, setNav] = useState(false);

    const changeNav = () => {
        setNav(!nav);
    }

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
            <a className="p-4" onClick={() => updatePage(0)}>JH</a>
            <ul className="hidden md:flex">
                {navLinks.map(({id, link}) => (            
                    <li key={id} className="p-4" onClick={() => updatePage(id)}>{link}</li>
                    ))}
            </ul>
            <div onClick={changeNav} className="block md:hidden">
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}                
            </div>
            <div className={!nav ? "fixed left-0 top-0 w-{60%} bg-gray-800 ease-in-out duration-500" : "fixed left-[-100%] ease-in-out duration-500"}>
                <a className="p-4" onClick={() => updatePage(0)}>JH</a>
               <ul className="pt-16">
                {navLinks.map(({id, link}) => (            
                    <li key={id} className="p-4 border-b border-gray-500" onClick={() => updatePage(id)}>{link}</li>
                    ))}
            </ul> 
            </div>
            
        </div>
    )
}

export default NavBar;