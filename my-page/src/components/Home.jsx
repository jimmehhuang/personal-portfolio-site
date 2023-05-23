import React from 'react';
import ExperienceCard from './ExperienceCard'
import reactLogo from '../assets/react.svg'
import tailwindLogo from '../assets/images/tailwind.png'
import {TypeAnimation} from 'react-type-animation'

const Home = () => {
    const buildLogos = [
        {  
            id: 1,
            href: "https://vitejs.dev",
            src: '/vite.svg',
            alt: 'Vite logo'
        },
        {
            id: 2,
            href: "https://reactjs.org",
            src: reactLogo,
            alt: 'React logo'
        },
        {
            id: 3,
            href: 'https://tailwindcss.com/',
            src: tailwindLogo,
            alt: 'Tailwind Logo'
        }
    ]


    return (
        <div className="p-10 mt-10 w-full h-max mx-auto text-center flex flex-col">  
            <TypeAnimation sequence={[
                ' Welcome!', 2000, " Hi!", 2000, " Hello!", 2000, " Hey!", 2000
            ]} speed={30} omitDeletionAnimation={true} cursor={false} repeat={Infinity} className='font-bold text-4xl md:text-7xl'/>          
            <h2 className="font-bold text-2xl md:text-4xl p-2">
                My name is <span className="font-bold text-2xl md:text-4xl text-rose-600">Jimmy.</span>
            </h2>
            <h2 className="text-xl p-2 mt-10">I'm a full-stack web developer.</h2>
            <ExperienceCard/>
            <div className="mt-48">
                <p className="font-semibold">I created this website using Vite + React and Tailwind!</p>
                <div className="flex flex-row justify-center">
                    {buildLogos.map(({id, href, src, alt}) => (
                        <a key={id} href={href} target="_blank">
                            <img src={src} className='h-16 p-5' alt={alt}></img>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;