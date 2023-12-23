import React from "react";
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import About from "./components/About";
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Experience from "./components/Experience";


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <SocialLinks/>
      <Portfolio/>
      <Experience/>
      <Contact/>
 
    </div>
  );
}

export default App;
