// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  // Experience,
  // Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  EarthCanvas,
} from "../components";
import { Canvas } from "@react-three/fiber";
import { buttonHero } from "../constants";

const App = () => {
  return (
      <>
      <div className="relative z-0 bg-primary">
        {/* <StarsCanvas /> */}
        <div className=" bg-cover bg-no-repeat bg-center">
          <Navbar />
          <div className="relative z-0">
            <Hero buttonHero={buttonHero}/>
            <StarsCanvas />
          </div>
        </div>
        <div className="relative z-0">
          <About />
        </div>
        <div className="relative z-0">
          <Works />
        </div>

        {/* <div className="relative z-0">
          <Tech />
        </div> */}

        {/* <Experience /> */}
        {/* <Feedbacks /> */}
        <div className="relative z-0">
      
          <Contact />
          <StarsCanvas />
         
          
        </div>
      </div>
      </>
  );
};

export default App;
