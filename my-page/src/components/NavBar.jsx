import React, {useState} from "react"
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const NavBar = ({updatePage}) => {
    const [nav, setNav] = useState(true);

    const changeNav = () => {
        setNav(!nav);
    }

    const navLinks = [
        {
            id: 0,
            link: 'Home'
        },
        {
            id: 1,
            link: 'About'
        },
        {   
            id: 2,
            link: 'Projects'
        },
        // {
        //     id: 3,
        //     link: 'Experience'
        // },
        {
            id: 3,
            link: 'Contact'
        }
    ]
    return (
        <header className='flex justify-between items-center bg-gray-700 text-white'>
            <button className="p-4 font-semibold md:text-xl" onClick={() => {updatePage(0); setNav(true);}}>JH</button>
            <ul className="hidden md:flex">
                {navLinks.map(({id, link}) => (            
                    <li key={id} className="p-4 cursor-pointer" onClick={() => updatePage(id)}>{link}</li>
                    ))}
            </ul>
            <div onClick={changeNav} className="p-2 block md:hidden">
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}                
            </div>
            <div className={!nav ? "fixed right-0 top-12 w-{60%} bg-gray-900 ease-in-out duration-500" : "fixed right-[-100%] top-12 ease-in-out duration-500"}>
               <ul className="p-2">
                {navLinks.map(({id, link}) => (            
                    <li key={id} className="p-4 border-b border-gray-500" onClick={() => {updatePage(id); changeNav();}}>{link}</li>
                    ))}
                </ul> 
            </div>            
        </header>
    )
}

export default NavBar;