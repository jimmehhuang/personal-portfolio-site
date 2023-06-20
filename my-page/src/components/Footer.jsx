import React from 'react'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='text-2xl mt-10 section'>
        <p>Feel free to contact me!</p>
        <div className="text-2xl flex justify-center gap-10">
            <a href="https://www.linkedin.com/in/jimmehhuang/"><AiFillLinkedin/></a>
            <a href="https://github.com/jimmehhuang"><AiFillGithub/></a>
        </div>
    </footer>
  )
}

export default Footer