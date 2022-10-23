import React from "react";
import styles from "./Navbar.module.css";
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    useMediaQuery,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = (props) => {
    const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
    const [open, setOpen] = useState(false);
    const { about, skill, project, contact, home } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div className={styles.nav}>
            {isLargerThan1024 ? (
                <div className={styles.navAll}>
                    <p onClick={() => home()}>Home</p>
                    <p onClick={() => about()}>About</p>
                    <p onClick={() => skill()}>Skills</p>
                    <p onClick={() => project()}>Projects</p>
                    <p onClick={() => contact()}>Contact Me</p>
                    <p onClick={onOpen}>Resume</p>
                </div>
            ) : open ? (
                <div className={styles.navHam}>
                    <div
                        onClick={() => {
                            setOpen(!open);
                        }}
                        style={{ marginLeft: "95%" }}
                    >
                        <AiOutlineClose size="1em" />
                    </div>

                    <p
                        onClick={() => {
                            home();
                            setOpen(!open);
                        }}
                    >
                        Home
                    </p>
                    <p
                        onClick={() => {
                            about();
                            setOpen(!open);
                        }}
                    >
                        About
                    </p>
                    <p
                        onClick={() => {
                            skill();
                            setOpen(!open);
                        }}
                    >
                        Skills
                    </p>
                    <p
                        onClick={() => {
                            project();
                            setOpen(!open);
                        }}
                    >
                        Projects
                    </p>
                    <p
                        onClick={() => {
                            contact();
                            setOpen(!open);
                        }}
                    >
                        Contact Me
                    </p>
                    <p>Resume</p>
                </div>
            ) : (
                <div
                    onClick={() => {
                        setOpen(!open);
                    }}
                    style={{ marginLeft: "90%" }}
                >
                    <GiHamburgerMenu size="2em" />
                </div>
            )}

            <Modal isOpen={isOpen} onClose={onClose} size="full">
                <ModalOverlay />
                <ModalContent style={{textAlign:"center",backgroundColor:"#553fd1"}}>
                    <ModalHeader>Resume</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody >
                        <Button colorScheme="green" mr={3}>
                        <Link to="/resume/Madhusudan-Prajapat-Resume.pdf" target="_blank" download>Download</Link>
                        </Button>
                        <br/>
                        <br/>
                        <img src="/resume/Madhusudan-Prajapat-Resume.jpg" alt="resume" width="70%" style={{margin:"auto"}}/>
                        <br/>
                        <Button colorScheme="green" mr={3}>
                          <Link to="/resume/Madhusudan-Prajapat-Resume.pdf" target="_blank" download>Download</Link>
                            
                        </Button>
                        <br/><br/>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default Navbar;
