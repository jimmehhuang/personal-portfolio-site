// import React, {useState} from 'react'
// import NavBar from './components/NavBar'
// import Home from './components/Home'
// import About from './components/About'
// import Contact from './components/Contact'
// import Experience from './components/Experience'
// import Projects from './components/Projects'


// function App() {
//   //const [state, setState] = useState(false);

//   return (
//     <div class="bg-black">
//       <header>
//         <p>test one two</p>
//         <NavBar/>        
//       </header>
//       <div>
//         <Home/>
//         {/* <About/>
//         <Experience/>
//         <Contact/>
//         <Projects/> */}
//       </div>
//     </div>
//   );
// }

// export default App;
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="m-auto text-center">
      <div class="flex flex-row justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="h-32 p-5 hover:shadow-red-500" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} class="h-32 p-5 hover:shadow-red-500 rotate-90 duration-300" alt="React logo" />
        </a>
      </div>
      <h1 class="font-bold text-4xl text-black">Vite + React!</h1>
      <div class="p-8 font-serif">
        <button class="border-2 border-black rounded-sm" onClick={() => setCount((count) => count + 1)}>
          Click Counter : {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and React logos to learn more.
      </p>
    </div>
  )
}

export default App
