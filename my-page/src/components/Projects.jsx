import React, {useState} from "react";
import utopiatextgame from '../assets/images/utopiatextgame.png'
import playdateapp from '../assets/images/playdateapp.png'
import clashgame from '../assets/images/clashgame.png'
import Projectcard from "./Projectcard";

const Projects = () => {

    const [open, setOpen] = useState(false);

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
        <div className="section min-h-screen">
            <div className="p-10">
                <h1 className="font-semibold text-2xl">These are some of my major projects I've worked on/contributed to!</h1>
            </div>
            <div className="p-5 flex flex-wrap justify-around gap-10">
                {projectLinks.map((id, src, repo, app, title, description) => (
                    <Projectcard {...id} {...src} {...repo} {...app} {...title} {...description}/>
                ))}
            </div>
        </div>
    )
}

export default Projects