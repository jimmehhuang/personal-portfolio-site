import React from 'react';
import reactLogo from '../assets/react.svg'

const Home = () => {
    return (
        <div class="p-10">            
            <h1 class="font-bold text-4xl">Welcome!</h1>
            <h2 class="font-bold text-2xl text-rose-600">My name is Jimmy.</h2>
            <h2 class="text-xl">I'm a full-stack web developer.</h2>
            <div class="flex flex-row items-end justify-center">
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" class="h-20 p-5" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} class="h-20 p-5" alt="React logo" />
                </a>
            </div>
            <p class="font-semibold">I created this website using Vite + React and Tailwind CSS!</p>
        </div>
    );
}

export default Home;