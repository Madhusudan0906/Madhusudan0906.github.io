import { useRef } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Info from './components/Info';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import {TiArrowUpThick} from "react-icons/ti";
import GithubStats from './components/GithubStats';

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
  const home=()=>{
    window.scrollTo(0,0)
  }
  return (
    <div className="App">
      <Navbar home={home} about={about} skill={skill} project={project} contact={contact} />
      
      <Info />
      <div ref={aboutref}>
        <About id="about"/></div>
      <div ref={skillref}><Skills id="skill" /></div>
      <GithubStats />
      <div ref={projectref}><Projects id="project" /></div>
      <div ref={contactref}><Contact id="contact" /></div>

      
      {/* <h1>Currently under Development !!</h1>
      <h3>Sorry 🙏</h3> */}
      <div className='topArrow' onClick={home} >
        <TiArrowUpThick size='3em' />
      </div>
      
    </div>
  );
}

export default App;
