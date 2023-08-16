import React, {useState} from "react"
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
// import {Collapse} from 'react-collapse'

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
            <p className="p-4 font-semibold text-xl">Jimmy Huang</p>
            <ul className="hidden md:flex">
                {navLinks.map(({id, link}) => (            
                    <li key={id} className="p-4 cursor-pointer">
                        <a href={`#${link}`}>{link}</a>
                    </li>
                    ))}
            </ul>
            {/* <button onClick={changeNav} className="p-4 block md:hidden">
                {!nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}                
            </button>
            <div className={!nav ? "fixed top-24 w-full bg-green-950 ease-in-out duration-500" : "fixed top-[-100%] w-full ease-in-out duration-500"}>
               <ul className="p-2">
                {navLinks.map(({id, link}) => (            
                    <li key={id} className="p-2 hover:scale-105" onClick={() => changeNav()}>
                        <a href={`#${link}`}>{link}</a>
                    </li>
                    ))}
                </ul>                 
            </div> */}
            <details className="shadow rounded">
                <summary onClick={changeNav} className="p-4 md:hidden flex flex-wrap cursor-pointer">
                    {!nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}
                </summary>
                <ul className="p-2">
                {navLinks.map(({id, link}) => (            
                    <li key={id} className="p-2 hover:scale-105" onClick={() => changeNav()}>
                        <a href={`#${link}`}>{link}</a>
                    </li>
                    ))}
                </ul> 
            </details>            
        </header>
    )
}

export default NavBar;