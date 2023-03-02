import React from "react";
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import javascript from '../assets/images/javascript.png'
import nodejs from '../assets/images/node.png'
import github from '../assets/images/github.png'
import reactimage from '../assets/images/react.png'
import mongoDB from '../assets/images/mongoDB.png'
import mysql from '../assets/images/mysql.png'
import tailwind from '../assets/images/tailwind.png'

const Experience = () => {
    const skillIcons = [
        {
            id: 1,
            src: html,
            title: 'HTML',
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
        },
        {
            id: 4,
            src: nodejs,
            title: 'NodeJS',
        },
        {
            id: 5,
            src: github,
            title: 'GitHub',
        },
        {
            id: 6,
            src: reactimage,
            title: 'ReactJS',
        },
        {
            id: 7,
            src: mongoDB,
            title: 'MongoDB',
        },
        {
            id: 8,
            src: mysql,
            title: 'MySQL',
        },
        {
            id: 9,
            src: tailwind,
            title: 'Tailwind CSS',
        }
    ]

    return (
        <div>
            <p>Skills</p>
            <p>These are some of the technologies I've worked with.</p>
            <div class="flex flex-row justify-center items-center content-center">
                {skillIcons.map(({id, src, title}) => (
                    <img class="object-scale-down h-10 w-12" key={id} src={src} alt={`${title}`}/>
                ))}
            </div>
            <div>
                <p>Where have I worked?</p>
            </div>
        </div>
    )
}

export default Experience;