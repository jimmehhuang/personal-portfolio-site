import React, {useState} from "react";

const NavBar = ({updatePage}) => {

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
        <div class='flex justify-between items-center w-full h-20 px-4 bg-gray-600'>
            <p>Jimmy Huang</p>
            <ul class="flex">
                {navLinks.map(({id, link}) => (            
                    <li key={id} class="px-4 cursor-pointer capitalize hover:scale-110" onClick={() => updatePage(id)}>{link}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default NavBar;