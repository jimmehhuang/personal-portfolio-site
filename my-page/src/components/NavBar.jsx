import React, {useState} from "react"
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const NavBar = ({updatePage}) => {
    const [nav, setNav] = useState(true);

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
            <button className="p-4 font-semibold md:text-xl" onClick={() => updatePage(0)}>JH</button>
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