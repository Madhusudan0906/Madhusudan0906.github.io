import { Heading } from "@chakra-ui/react";
import React from "react";
import styles from "./About.module.css"
function About(){
    return (<div className={styles.main}>
        <Heading as="h2">About</Heading>
        <div>
        <img src="https://avatars.githubusercontent.com/u/103635175?v=4" alt="avatar" style={{borderRadius:"50%",width:"20%",border:"2px solid grey"}}/>

        </div>
        <div>
            <p>
                
            </p>
        </div>
    
    </div>);
}

export default About;