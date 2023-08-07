import React from 'react'
import utopiatextgame from '../assets/images/utopiatextgame.png'
import playdateapp from '../assets/images/playdateapp.png'
import clashgame from '../assets/images/clashgame.png'

const Projectcard = () => {

    const projectLinks = [
        {
            id: 1,
            src: utopiatextgame,
            repo: 'https://github.com/pariselectra/Group_9_Project_2',
            app: 'https://road-to-utopia.herokuapp.com/',
            title: "Road to Utopia",
            description: "This text-based choose-your-own-adventure game was created using RESTful API's and template engine. Create an account to keep track of how many victories have been achieved!"
        },
        {
            id: 2,
            src: playdateapp,
            repo: 'https://github.com/MarkGATX/Playdate-The-App-for-Exhausted-Parents',
            app: 'https://markgatx.github.io/Playdate-The-App-for-Exhausted-Parents/',
            title: "Playdate App",
            description: "Weather app which calls data from a public APIs to determine suggested activites for lost parents with children based on local weather data. Requires weather permissions enabled."
        },
        {
            id: 3,
            src: clashgame,
            repo: 'https://github.com/LilOTechGod/Clash-of-Characters',
            app: 'https://clashofcharacters.herokuapp.com/',
            title: "Clash of Characters",
            description: "A full-stack fighting game app built with integrated front-end and back-end structures: namely React and MongoDB. Currently features AI battles with intended future PvP functionality with account creation."
        }
    ]

    return (
        <div className="relative p-5 flex flex-wrap justify-around">
            {projectLinks.map(({id, src, repo, app, title, description}) => (
                <div key={id} className='group p-2'>
                    <p>{title}</p>
                    <img src={src} alt={src} className='h-32 w-40 rounded-md group-hover:brightness-50'></img>
                    <div className='absolute bottom-0 top-12 invisible group-hover:visible '>
                        <p className='p-4 w-60'>{description}</p>
                        <div className='flex flex-row justify-center gap-6 border-white'>
                            <a href={app} className='border-2 p-2 rounded-lg'>App</a>
                            <a href={repo} className='border-2 p-2 rounded-lg'>Repo</a>
                        </div>            
                    </div>
                </div>                
            ))}      
        </div>
  )
}

export default Projectcard