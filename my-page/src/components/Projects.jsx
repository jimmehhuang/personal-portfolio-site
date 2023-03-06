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
        <div>
            <div class="p-10">
                <h1 class="font-semibold text-2xl">These are some of my major projects I've worked on/contributed to!</h1>
            </div>
            <div class="flex flex-wrap justify-around p-10">
                {projectLinks.map(({id, src, repo, app, title, description}) => (
                <div key={id} class='shadow-md shadow-black rounded-lg hover:scale-105 group overflow-hidden'>
                    <img src={src} alt={src} class='h-32 rounded-md'/>
                    <div class='flex items-center justify-center invisible group-hover:visible'>
                        <p>{title}</p>
                        <p>{description}</p>
                        <button class='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                            <a href={repo}>Repo</a>
                        </button>
                        <button class='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                            <a href={app}>App</a>
                        </button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Projects