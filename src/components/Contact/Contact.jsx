import { Heading } from "@chakra-ui/react";
import {AiFillGithub,AiFillPhone} from "react-icons/ai";
import {GrLinkedinOption} from "react-icons/gr";
import styles from "./Contact.module.css"
export default function Contact(){
    return (
        <div className={styles.main}>
            <Heading>Contact Me</Heading>
            <div className={styles.contact}>
            <div className={styles.cicon}>
            <a href="https://github.com/Madhusudan0906" target="_blank">
        <AiFillGithub size="4em"/></a>
        <a href="tel:9893560297" target="_blank"><AiFillPhone size="4em"/></a>
        <a href="https://www.linkedin.com/in/madhusudan-prajapat-918808169/" target="_blank"><GrLinkedinOption size="4em" /></a>
        </div>
        <div>
            <form className={styles.cform}>
                <br/>
                <input type="text" placeholder="Name" /><br/>
                <input type="text" placeholder="Email"/><br/>
                <textarea placeholder="Query"></textarea><br/>
                <input type="submit" style={{width:"100px",backgroundColor:"darkblue",fontSize:"18px",border:"none",borderRadius:"7px",padding:"5px 10px"}}/><br/>
            </form>
        </div>
            </div>
        
        </div>
    );
}