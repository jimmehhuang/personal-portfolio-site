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
        </div>
    )
}

export default Projects