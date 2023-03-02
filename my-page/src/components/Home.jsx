import React, {useState} from 'react';
import reactLogo from '../assets/react.svg'

const Home = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div class="flex flex-row justify-center">
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" class="h-32 p-5" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} class="h-32 p-5" alt="React logo" />
                </a>
            </div>
            <h1 class="font-bold text-4xl text-black">Vite + React!</h1>
            <div class="p-8 font-serif">
                <button class="border-2 border-black rounded-sm" onClick={() => setCount((count) => count + 1)}>
                    Click Counter : {count}
                </button>
                <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
            </div>
                <p>Click on the Vite and React logos to learn more.</p>
        </div>
    );
}

export default Home;