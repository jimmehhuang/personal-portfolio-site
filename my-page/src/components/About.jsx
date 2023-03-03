import React from 'react'
import utlogo from '../assets/images/utlogo.png'

const About = () => {
  return (
        <div class="p-8">
            <h1 class="font-bold text-3xl p-8 border-2 rounded-xl">About Me!</h1>
            <div class="flex flex-wrap p-8 justify-center">
                <img src={utlogo} class="h-24 w-24" alt='UT logo'/>
                <p class="p-4">I graduated from UT Austin in 2017 with a BA in Sociology. Since then, I mostly
                actually wandered around the medical field- from EMT work, to an internal medicine scribe, to being an ophthalmology technician. 
                I developed an interest in software in 2022 and made the switch by completing the UT Coding Bootcamp!</p>
            </div>
            <div>
                <p>My hobbies include video games, obstacle course races, cooking, 
                and playing the guitar. I also like to travel and explore new places, 
                foods, and sights whenever possible!</p>
            </div>
        </div>
  )
}

export default About