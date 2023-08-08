import React from "react";
import Projectcard from "./Projectcard";
import ExperienceCard from './ExperienceCard'

const Projects = () => {

    return (
        <div className="section min-h-screen">
            <div className="mt-8">
                <h1 className="font-semibold text-2xl">Projects and Skills</h1>
            </div>
            <Projectcard/>
            <ExperienceCard/>
            <a href="#Home" className='my-2 h-8 w-36 border-2 rounded-md border-white text-semibold hover:bg-white hover:text-[#2BC6AA]'>
                Return
            </a>
        </div>
    )
}

export default Projects