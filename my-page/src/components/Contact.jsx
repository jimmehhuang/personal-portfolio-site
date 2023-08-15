import React from "react";
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

const Contact = () => {
    return (
        <div className="section min-h-screen">
            <h1 className="text-3xl font-semibold p-5">Contact</h1>
            <p className="text-lg">Feel free to shoot me a message!</p>
            <div className="text-3xl flex justify-center gap-8 my-10">
                <a href="https://www.linkedin.com/in/jimmehhuang/"><AiFillLinkedin/></a>
                <a href="https://github.com/jimmehhuang"><AiFillGithub/></a>
            </div>
            <a href="#Home" className='my-2 h-8 w-36 border-2 rounded-md border-white text-semibold hover:bg-white hover:text-[#AF83FF]'>
                Return
            </a>
        </div>
    )
}

export default Contact