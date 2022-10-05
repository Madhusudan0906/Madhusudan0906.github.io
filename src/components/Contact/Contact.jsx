import { Heading } from "@chakra-ui/react";
import {AiFillGithub,AiFillPhone} from "react-icons/ai";
import styles from "./Contact.module.css"
export default function Contact(){
    return (
        <div className={styles.main}>
            <Heading>Contact Me</Heading>
        <div>
            <a href="https://github.com/Madhusudan0906" target="_blank">
        <AiFillGithub size="3em"/></a>
        <a href="tel:9893560297" target="_blank"><AiFillPhone size="3em"/></a>
        <a href="" target="_blank"></a>
        </div>
        </div>
    );
}