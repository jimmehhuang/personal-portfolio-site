import React from 'react'
import './App.css'
import './index.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Footer from './components/Footer'
// import ReactFullpage from '@fullpage/react-fullpage'

const anchors = ["firstPage", "secondPage", "thirdPage"]

const App = () => {
  // const [page, setPage] = useState(0)
  // console.log(page);
  return (
      <div className="m-auto text-center text-white bg-gray-950 h-full">
        <NavBar/>
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
  )
//   <ReactFullpage
//   anchors={anchors}
//   navigation
//   navigationTooltips={anchors}
//   navigat
//   sectionsColor={["#7fff00","#00ffff","#29ab87" ]}
//   onLeave={(origin, destination, direction) => {
//     console.log("onLeave event", { origin, destination, direction });
//   }}
//   render={({ state, fullpageApi }) => {
//     console.log("render prop change", state, fullpageApi);

//     return (
//       <div>
//         <div className="section"><h3>Section 1</h3></div>
//         <div className="section"><h3>Section 2</h3></div>
//         <div className="section"><h3>Section 3</h3></div>
//       </div>
//     );
//   }}
// />
}

export default App