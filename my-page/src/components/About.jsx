import React from 'react'
import utlogo from '../assets/images/utlogo.png'
import propic from '../assets/images/Mountainpose.jpg'

const About = () => {
  return (
        <div class="p-8">
            <h1 class="font-bold text-3xl p-8 rounded-xl">About Me!</h1>
            <div class="grid grid-cols-4 justify-center p-8">
            <p class="col-start-2 text-xl p-4">I graduated from UT Austin with a BA in Sociology. Since then, I mostly
                actually wandered around the medical field- from EMT work, to an internal medicine scribe, to being an ophthalmology technician. 
                I developed a creative interest in software and made the jump in 2022 when I completed the UT Coding Bootcamp!</p>
                <img src={propic} class="h-72 w-72 rounded-full col-start-3 object-cover object-right"/>
            </div>
            <div class="grid grid-cols-3">
                <p class="text-xl col-start-2">My hobbies include video games, obstacle course races, cooking, 
                and playing the guitar. I also like to travel and explore new places, 
                foods, and sights whenever possible!</p>
            </div>
        </div>
  )
}

export default About