import React, {useState} from "react"
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const NavBar = () => {
    const [nav, setNav] = useState(true);

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
            link: 'Contact'
        }
    ]
    return (
        <header className='flex justify-between items-center bg-transparent text-white'>
            <button className="p-4 font-semibold text-xl" onClick={() => {setNav(true);}}>Jimmy Huang</button>
            <ul className="hidden md:flex">
                {navLinks.map(({id, link}) => (            
                    <li key={id} className="p-4 cursor-pointer">{link}</li>
                    ))}
            </ul>
            <div onClick={changeNav} className="p-4 block md:hidden">
                {!nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}                
            </div>
            <div className={!nav ? "fixed top-24 w-full bg-green-950 ease-in-out duration-500" : "fixed top-[-100%] w-full ease-in-out duration-500"}>
               <ul className="p-2">
                {navLinks.map(({id, link}) => (            
                    <li key={id} className="p-2" onClick={() => {changeNav();}}>{link}</li>
                    ))}
                </ul> 
            </div>            
        </header>
    )
}

export default NavBar;