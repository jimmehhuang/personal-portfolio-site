import React, {useState} from "react";
import utopiatextgame from '../assets/images/utopiatextgame.png'
import playdateapp from '../assets/images/playdateapp.png'
import clashgame from '../assets/images/clashgame.png'
import Projectcard from "./Projectcard";

const Projects = () => {

    const [open, setOpen] = useState(false);

    const projectLinks = [
        {
            src: utopiatextgame,
            repo: 'https://github.com/pariselectra/Group_9_Project_2',
            app: 'https://road-to-utopia.herokuapp.com/',
            title: "Road to Utopia",
            description: "This text-based choose-your-own-adventure game was created using RESTful API's and template engine. Create an account to keep track of how many victories have been achieved!"
        },
        {
            src: playdateapp,
            repo: 'https://github.com/MarkGATX/Playdate-The-App-for-Exhausted-Parents',
            app: 'https://markgatx.github.io/Playdate-The-App-for-Exhausted-Parents/',
            title: "Playdate App",
            description: "Weather app which calls data from a public APIs to determine suggested activites for lost parents with children based on local weather data. Requires weather permissions enabled."
        },
        {
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
            <div class="flex flex-wrap justify-around">
                {projectLinks.map((src, repo, app, title, description) => (
                    <Projectcard {...src} {...repo} {...app} {...title} {...description}/>
                ))}
            </div>
        </div>
    )
}

export default Projects