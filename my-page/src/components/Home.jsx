import React from 'react';
import propic from '../assets/images/Mountainpose.jpg'
import reactLogo from '../assets/react.svg'

const Home = () => {
    return (
        <div class="p-10">            
            <h1 class="font-bold text-4xl text-black">Welcome to my page!</h1>
            <h1 class="font-bold text-2xl text-black">My name is Jimmy.</h1>
            <div class="flex justify-center p-8">
                <img src={propic} class="h-72 w-72 rounded-full object-cover object-right"/>
            </div>
            <div class="flex flex-row justify-center">
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" class="h-24 p-5" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} class="h-24 p-5" alt="React logo" />
                </a>
            </div>
            <p class="font-semibold">I created this website using Vite + React and Tailwind CSS!</p>
        </div>
    );
}

export default Home;