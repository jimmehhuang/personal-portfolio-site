import React from 'react'
import utlogo from '../assets/images/utlogo.png'
import propic from '../assets/images/Mountainpose.jpg'

const About = () => {
  return (
        <div className="p-8">
            <h1 className="font-bold text-3xl p-8 rounded-xl">About Me!</h1>
            <div className="justify-center p-8">
                <img src={propic} className="h-48 w-48 rounded-full object-cover"/>
                <p className="text-lg p-4">I graduated from UT Austin with a BA in Sociology. Since then, I mostly
                actually wandered around the medical field- from EMT work, to an internal medicine scribe, to being an ophthalmology technician. 
                I developed a creative interest in software and made the jump in 2022 when I completed the UT Coding Bootcamp!</p>
            </div>
            <div className="">
                <p className="text-xl">My hobbies include video games, obstacle course races, cooking, 
                and playing the guitar. I also like to travel and explore new places, 
                foods, and sights whenever possible!</p>
            </div>
        </div>
  )
}

export default About