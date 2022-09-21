import React from 'react'
import styles from "./Navbar.module.css";
const Navbar = (props) => {
    const {about,skill,project,contact}=props;

  return (
    <div className={styles.nav} >
        <p onClick={()=>about()}>About</p>
        <p onClick={()=>skill()}>Skills</p>
        <p onClick={()=>project()}>Projects</p>
        <p onClick={()=>contact()}>Contact Me</p>
    </div>
  )
}

export default Navbar