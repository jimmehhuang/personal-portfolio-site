import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import ReactFullpage from '@fullpage/react-fullpage'

const anchors = ["Home", "About", "Projects", "Contact"]

const App = () => {

  return (
    <body className='fullpage'>
      {/* <NavBar/> */}
      <ReactFullpage
      licenseKey={'gplv3-license'}
        anchors={anchors}
        navigat
        sectionsColor={["#003927", "#05285E", "#330557", "#120120"]}
        onLeave={(origin, destination, direction) => {
          console.log("onLeave event", { origin, destination, direction });
        }}
        render={({ state, fullpageApi }) => {
          console.log("render prop change", state, fullpageApi);

          return (
            <div className="m-auto text-center text-white bg-gray-950">
              <Home />
              <About />
              <Projects />
              <Contact />
            </div>
          );
        }}
      />
    </body>
  )   
}

export default App