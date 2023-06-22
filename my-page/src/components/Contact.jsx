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
        </div>
    )
}

export default Contact