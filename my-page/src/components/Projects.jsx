import React from "react";
import utopiatextgame from '../assets/images/utopiatextgame.png'
import playdateapp from '../assets/images/playdateapp.png'
import clashgame from '../assets/images/clashgame.png'

const Projects = () => {
    const projectLinks = [
        {
            id: 1,
            src: utopiatextgame,
            repo: 'https://github.com/pariselectra/Group_9_Project_2',
            app: 'https://road-to-utopia.herokuapp.com/'
        },
        {
            id: 2,
            src: playdateapp,
            repo: 'https://github.com/MarkGATX/Playdate-The-App-for-Exhausted-Parents',
            app: 'https://markgatx.github.io/Playdate-The-App-for-Exhausted-Parents/'
        },
        {
            id: 3,
            src: clashgame,
            repo: 'https://github.com/LilOTechGod/Clash-of-Characters',
            app: 'https://clashofcharacters.herokuapp.com/'
        }
    ]
    return (
        <div>
            <div>
                <p>These are some of my major projects I've worked on/contributed to!</p>
            </div>
            <div>
            {projectLinks.map(({id, src, repo, app}) => (
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                            <a href={repo}>Repo</a></button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                            <a href={app}>App</a></button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Projects