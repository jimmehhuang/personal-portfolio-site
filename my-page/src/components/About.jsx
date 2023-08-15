import React from 'react'
// import utlogo from '../assets/images/utlogo.png'
import propic from '../assets/images/Mountainpose.jpg'

const About = () => {
  return (
        <div className="p-4 min-h-screen section flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl p-4 rounded-xl">About Me!</h1>
            <div className="flex flex-col md:flex-row justify-center items-center p-8">
                <img src={propic} className="h-32 w-32 rounded-full object-cover md:max-w-48"/>
                <p className="mt-5 text-md p-4 md:p-2 text-rose-100 md:w-1/2 md:ml-12">I'm Jimmy, a graduate of UT Austin turned medical worker turned software developer.                 
                I developed a creative interest in software and made the jump in 2022 when I completed the UT Coding Bootcamp! I strive to continually 
                challenge and grow my skills- whether that means stuffing my brain with code or hammering in practice!</p>
            </div>
            <div className="m-2">
                <p className="items-center text-md md:w-2/4">My hobbies include video games, obstacle course races, cooking, 
                and playing the guitar. I also like to travel and explore new places, 
                foods, and sights whenever possible!</p>
            </div>
            <a href="#Home" className='m-2 h-8 w-36 border-2 rounded-md border-white text-semibold hover:bg-white hover:text-[#032A42]'>
                Return
            </a>
        </div>
  )
}

export default About