import { useRef } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const aboutref = useRef();
  const skillref = useRef();
  const projectref = useRef();
  const contactref = useRef();
  const scrollSmoothHandler = ref => {
    console.log("Triggered.");
    window.scrollTo({top:ref.current?.offsetTop,behavior:"smooth"})
  };
  const about=()=>{
    scrollSmoothHandler(aboutref);
  }
  const skill=()=>{
    scrollSmoothHandler(skillref);
  }
  const project=()=>{
    scrollSmoothHandler(projectref);
  }
  const contact=()=>{
    scrollSmoothHandler(contactref);
  }

  return (
    <div className="App">
      <Navbar about={about} skill={skill} project={project} contact={contact} />
      <div ref={aboutref}><About id="about"/></div>
      <div ref={skillref}><Skills id="skill" /></div>
      <div ref={projectref}><Projects id="project" /></div>
      <div ref={contactref}><Contact id="contact" /></div>

      
      
      
    </div>
  );
}

export default App;
