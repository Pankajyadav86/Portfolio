import React from "react";
import Navbar from "./components/Navbar";
import Header1 from "./components/Header1";
import Counter from "./components/Counter";
import ProfileCard from "./components/ProfileCard";
import SkillsSection from "./components/SkillsSection";
import OurProjects from "./components/OurProjects";
import TestimonialSalider from "./components/TestimonialSalider";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

function App(){
  return(
    <div className="App">
      <Navbar/>
      <Header1/>
      <Counter/>
      <ProfileCard/>
      <SkillsSection/>
      <OurProjects/>
      <TestimonialSalider/>
      <Contact/>
      <Footer/>
    </div>
  )
};

export default App;