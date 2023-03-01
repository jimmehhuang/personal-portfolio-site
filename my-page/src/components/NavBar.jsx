import React from "react";

const NavBar = () => {
    const navLinks = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'About'
        },
        {   
            id: 3,
            link: 'Projects'
        },
        {
            id: 4,
            link: 'Experience'
        },
        {
            id: 5,
            link: 'Contact'
        }
    ]
    return (
        <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
            <p>Jimmy Huang</p>
            <ul className="flex">
                {navLinks.map(({id, link}) => (            
                    <li key={id} className="px-4 cursor-pointer capitalize hover:scale-110" >{link}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default NavBar;