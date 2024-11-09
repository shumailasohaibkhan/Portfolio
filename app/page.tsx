import Image from "next/image";
import Hero from "./components/hero";
import Contect from "./components/contect";
import Project from "./components/project";
import About from "./components/about";
import Skill from "./components/skill";



export default function Home() {
  return (
    <div>
  
    <Hero />
    <About />
    <Project />
    <Contect /> 
    <Skill />
    </div>
  )
    
  }