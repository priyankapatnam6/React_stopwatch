import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects'

function App() {
  const[load,setLoad]=useState(true)
  return (
        <Router>
     <div className="App" id={load ? "no-scroll" : "scroll"}  style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        {/* <ScrollToTop /> */}
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/About" element={<About />} />
         <Route path='/Skills' element={<Skills />} />
         <Route path='/Contact' element={<Contact />} />
         <Route path='/Projects' element={<Projects />} />

    
       </Routes>      
          <Footer />
      </div>
      </Router>

  );
}

export default App;
// ---------------------------------
// import React, { useState, useEffect } from "react";
// import Preloader from "../src/components/Pre";
// import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Projects from "./components/Projects/Projects";
// import Footer from "./components/Footer";
// import Resume from "./components/Resume/ResumeNew";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate
// } from "react-router-dom";
// import ScrollToTop from "./components/ScrollToTop";
// import "./style.css";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./Components/Navbar";


// const Error = (props) => {
//   return (
//     <div>
//       <div className="page_not_found">
//         <i
//           className="fa fa-ban"
//           aria-hidden="true"
//           style={{ fontSize: "100px" }}
//         ></i>
//         <br />
//         <br />
//         <h2 style={{ textTransform: "capitalize" }}>This page is under maintainance</h2>
//       </div>
//     </div>
//   );
// };

// function App() {
//   const [load, upadateLoad] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       upadateLoad(false);
//     }, 1200);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <Router>
//       <Preloader load={load} />
//       <div className="App" id={load ? "no-scroll" : "scroll"}  style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//         <Navbar />
//         <ScrollToTop />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* <Route path="/project" element={<Projects />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/resume" element={<Resume />} />
//           <Route exact path="/notfound" element={<Error />} />
//           <Route path="*" element={<Navigate to="/"/>} /> */}
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

