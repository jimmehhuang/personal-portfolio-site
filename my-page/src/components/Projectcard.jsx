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
        <div className="relative p-5 justify-around">
            {projectLinks.map(({id, src, repo, app, title, description}) => (
                <div key={id} className='group p-2 relative'>
                    <img src={src} alt={src} className='h-32 rounded-md group-hover:brightness-50'></img>
                    <div className='absolute top-2 invisible group-hover:visible'>
                        <p>{title}</p>
                        <p>{description}</p>
                        <div className='flex flex-row justify-center gap-6 border-white'>
                            <a href={app} className='border-2 p-2 rounded-lg hover:text-black hover:bg-white'>App</a>
                            <a href={repo} className='border-2 p-2 rounded-lg hover:text-black hover:bg-white'>Repo</a>
                        </div>            
                    </div>
                </div>                
            ))}      
        </div>
  )
}

export default Projectcard