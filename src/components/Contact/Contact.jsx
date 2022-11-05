import { Heading, useMediaQuery } from "@chakra-ui/react";
import {AiFillGithub,AiFillPhone} from "react-icons/ai";
import {GrLinkedinOption} from "react-icons/gr";
import styles from "./Contact.module.css"
export default function Contact(){
    const [isLargerThan426] = useMediaQuery("(min-width: 426px)");
    return (
        <div className={styles.main}>
            <Heading>Contact Me</Heading>
            <div className={isLargerThan426?styles.contact:styles.contactsm}>
            <div className={isLargerThan426?styles.cicon:styles.ciconsm}>
            <a href="https://github.com/Madhusudan0906" target="_blank">
        <AiFillGithub size="4em"/></a>
        <a href="tel:9893560297" target="_blank"><AiFillPhone size="4em"/></a>
        <a href="https://www.linkedin.com/in/madhusudan-prajapat-918808169/" target="_blank"><GrLinkedinOption size="4em" /></a>
        </div>
        <div>
            <form className={isLargerThan426?styles.cform:styles.cformsm}>
                <br/>
                <input type="text" placeholder="Name" /><br/>
                <input type="text" placeholder="Email"/><br/>
                <textarea placeholder="Query"></textarea><br/>
                <input type="submit" style={isLargerThan426?{width:"20%",backgroundColor:"darkblue",fontSize:"18px",border:"none",borderRadius:"7px",padding:"5px 10px"}:{width:"30%",backgroundColor:"darkblue",fontSize:"18px",border:"none",borderRadius:"7px",padding:"5px 10px"}}/><br/>
            </form>
        </div>
            </div>
        
        </div>
    );
}