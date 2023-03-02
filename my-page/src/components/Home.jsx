import React, {useState} from 'react';
import reactLogo from '../assets/react.svg'

const Home = () => {
    const [count, setCount] = useState(0)
    return (
        <div class="p-10">            
            <h1 class="font-bold text-4xl text-black">Welcome to my page!</h1>
            <div class="p-8 font-serif">
                <button class="border-2 border-black rounded-sm" onClick={() => setCount((count) => count + 1)}>
                    Click Counter : {count}
                </button>
            </div>
                <div class="flex flex-row justify-center">
                    <a href="https://vitejs.dev" target="_blank">
                        <img src="/vite.svg" class="h-32 p-5" alt="Vite logo" />
                    </a>
                    <a href="https://reactjs.org" target="_blank">
                        <img src={reactLogo} class="h-32 p-5" alt="React logo" />
                    </a>
                </div>
                <p class="font-semibold">This website was created using Vite + React for a front-end framework and Tailwind CSS for design.</p>
        </div>
    );
}

export default Home;