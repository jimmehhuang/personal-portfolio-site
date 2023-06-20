import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ReactFullpage from '@fullpage/react-fullpage'

const anchors = ["home", "about", "projects", "contact"]

const App = () => {
  // const [page, setPage] = useState(0)
  // console.log(page);
  // return (
  //     <div className="m-auto text-center text-white bg-gray-950 h-full">
  //       <NavBar/>
  //       <Home />
  //       <About />
  //       <Projects />
  //       <Contact />
  //       <Footer />
  //     </div>
  // )
  return (
    <div className='fullpage'>
      {/* <NavBar /> */}
      <ReactFullpage
      licenseKey={'gplv3-license'}
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        navigat
        sectionsColor={["#003927", "#05285E", "#330557", "#120120", ""]}
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
              <Footer />
            </div>
          );
        }}
      />
    </div>
    
  )   
}

export default App