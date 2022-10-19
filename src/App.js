import { Divider } from '@chakra-ui/react';
import { useRef } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Info from './components/Info';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const aboutref = useRef();
  const skillref = useRef();
  const projectref = useRef();
  const contactref = useRef();
  const scrollSmoothHandler = ref => {
    window.scrollTo({top:ref.current?.scrollIntoView(false),behavior:"smooth"})
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
      <Divider/>
      <Info />
      <Divider/>
      <div ref={aboutref}>
        <About id="about"/></div>
        <Divider/>
      <div ref={skillref}><Skills id="skill" /></div>
      <Divider/>
      {/* <div ref={projectref}><Projects id="project" /></div>
      <Divider/>
      <div ref={contactref}><Contact id="contact" /></div> */}

      
      {/* <h1>Currently under Development !!</h1>
      <h3>Sorry 🙏</h3> */}
  
      
    </div>
  );
}

export default App;
