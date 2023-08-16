import React from 'react'
import utopiatextgame from '../assets/images/utopiatextgame.png'
import playdateapp from '../assets/images/playdateapp.png'
import clashgame from '../assets/images/clashgame.png'

const Projectcard = () => {

    const projectLinks = [
        {
            id: 1,
            src: clashgame,
            repo: 'https://github.com/LilOTechGod/Clash-of-Characters',
            app: 'https://clashofcharacters.herokuapp.com/',
            title: "Clash of Characters",
            description: "Full-stack fighting game"
        },
        {
            id: 2,
            src: playdateapp,
            repo: 'https://github.com/MarkGATX/Playdate-The-App-for-Exhausted-Parents',
            app: 'https://markgatx.github.io/Playdate-The-App-for-Exhausted-Parents/',
            title: "Playdate App",
            description: "Activity app based on local weather data"
        },
        {
            id: 3,
            src: utopiatextgame,
            repo: 'https://github.com/pariselectra/Group_9_Project_2',
            app: 'https://road-to-utopia.herokuapp.com/',
            title: "Road to Utopia",
            description: "Text-based choose-your-own-adventure game"
        }
    ]

    return (
        <ul className="p-5 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {projectLinks.map(({id, src, repo, app, title, description}) => (
                <li key={id} className='p-8 group relative col-span-1'>
                    <div className='w-full relative pb-3/4 flex items-center justify-between aspect-auto'>
                        <img src={src} alt={src} className='absolute top-0 h-full w-full aspect-auto rounded-md group-hover:brightness-50'></img>
                    </div>
                    <div className='absolute m-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 invisible group-hover:visible col-span-1'>
                        <p className='font-semibold'>{title}</p>
                        <p className='truncate'>{description}</p>
                        <div className='flex flex-row justify-center gap-6 border-white'>
                            <a href={app} className='border-2 p-2 rounded-lg hover:text-black hover:bg-white'>App</a>
                            <a href={repo} className='border-2 p-2 rounded-lg hover:text-black hover:bg-white'>Repo</a>
                        </div>            
                    </div>          
                </li>                
            ))}      
        </ul>
  )
}

export default Projectcard