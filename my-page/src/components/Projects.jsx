import React from "react";
import Projectcard from "./Projectcard";
import ExperienceCard from './ExperienceCard'

const Projects = () => {

    return (
        <div className="section min-h-screen">
            <div className="p-10">
                <h1 className="font-semibold text-2xl">These are some of my major projects I've worked on/contributed to!</h1>
            </div>
            <Projectcard />
            <ExperienceCard/>
        </div>
    )
}

export default Projects