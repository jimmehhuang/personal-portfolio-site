import React from 'react';
import reactLogo from '../assets/react.svg'
import tailwindLogo from '../assets/images/tailwind.png'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

const Home = () => {
    return (
        <div className="p-10">            
            <h1 className="font-bold text-4xl">Welcome!</h1>
            <h2 className="font-bold text-2xl">My name is <span className="font-bold text-2xl text-rose-600">Jimmy.</span></h2>
            <h2 className="text-xl">I'm a full-stack web developer.</h2>
            <div className="text-3xl flex justify-center gap-10">
                <a href="https://www.linkedin.com/in/jimmehhuang/"><AiFillLinkedin/></a>
                <a href="https://github.com/jimmehhuang"><AiFillGithub/></a>
            </div>
            <div className="fixed-bottom-0">
                <div className="flex flex-row items-end justify-center">
                    <a href="https://vitejs.dev" target="_blank">
                        <img src="/vite.svg" className="h-20 p-5" alt="Vite logo" />
                    </a>
                    <a href="https://reactjs.org" target="_blank">
                        <img src={reactLogo} className="h-20 p-5" alt="React logo" />
                    </a>
                    <a href="https://tailwindcss.com/" target="_blank">
                        <img src={tailwindLogo} className="h-20 p-5" alt="Tailwind logo" />
                    </a>
                </div>
                <p className="font-semibold">I created this website using Vite + React and Tailwind CSS!</p>
            </div>
        </div>
    );
}

export default Home;