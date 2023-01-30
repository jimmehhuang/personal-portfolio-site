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
            <div>
                <p>Skills</p>
                <p>These are some of the technologies I've worked with.</p>
                {skillIcons.map(({id, src, title}) => (
                    <div key={id} className>
                        <img src={src} alt={`${title}`} className/>
                    </div>
                ))}
            </div>
            <div>
                <p>Where have I worked?</p>
            </div>
        </div>
    )
}

export default Experience;