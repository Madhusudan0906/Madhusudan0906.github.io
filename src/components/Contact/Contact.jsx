import { Box, Heading, Table, Td, Th, Tr, useMediaQuery } from "@chakra-ui/react";
import { AiFillGithub, AiFillPhone } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import styles from "./Contact.module.css";
export default function Contact() {
    const [isLargerThan426] = useMediaQuery("(min-width: 426px)");
    const [isLargerThan768] = useMediaQuery("(min-width: 769px)");
    return (
        <div className={styles.main}>
            <Heading>Contact Me</Heading>
            <div
                className={isLargerThan768 ? styles.contact : styles.contactsm}
            >
                <div
                    className={isLargerThan768 ? styles.cicon : styles.ciconsm}
                >
                    {/* <a href="https://github.com/Madhusudan0906" target="_blank">
                        <AiFillGithub size="4em" />
                    </a>
                    <a href="tel:9893560297" target="_blank">
                        <AiFillPhone size="4em" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/madhusudan-prajapat-918808169/"
                        target="_blank"
                    >
                        <GrLinkedinOption size="4em" />
                    </a> */}
                    {/* <p>Email: prajapatmadhusudan06@gmail.com</p>
                    <p>Mobile: +91 9893560297</p>
                    <p>Github: github.com/Madhusudan0906</p>
                    <p>Linkedin: https://www.linkedin.com/in/madhusudan-prajapat-918808169/</p> */}
                    <Box overflowX={'auto'}>
                    <Table>
                        <Tr>
                            <Th color={'white'}>Email</Th>
                            <Td><a style={{textDecoration:"none"}} href='mailto:prajapatmadhusudan06@gmail.com'>prajapatmadhusudan06@gmail.com</a></Td>
                        </Tr>
                        <Tr>
                            <Th color={'white'}>Mobile</Th>
                            <Td><a style={{textDecoration:"none"}}  href="tel:+919893560297">+91 9893560297</a></Td>
                        </Tr>
                        <Tr>
                            <Th color={'white'}>Github</Th>
                            <Td><a style={{textDecoration:"none"}} target="_blank" rel="noopener noreferrer" href="https://github.com/Madhusudan0906">Github Profile</a></Td>
                        </Tr>
                        <Tr>
                            <Th color={'white'}>LinkedIn</Th>
                            <Td><a style={{textDecoration:"none"}} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/madhusudan-prajapat-918808169/">LinkedIn Profile</a></Td>
                        </Tr>
                    </Table>
                    </Box>
                </div>
                <div>
                    <form
                        className={
                            isLargerThan426 ? styles.cform : styles.cformsm
                        }
                    >
                        <br />
                        <input type="text" placeholder="Name" />
                        <br />
                        <input type="text" placeholder="Email" />
                        <br />
                        <textarea placeholder="Query"></textarea>
                        <br />
                        <input
                            type="submit"
                            style={
                                isLargerThan426
                                    ? {
                                          width: "20%",
                                          backgroundColor: "darkblue",
                                          fontSize: "18px",
                                          border: "none",
                                          borderRadius: "7px",
                                          padding: "5px 10px",
                                      }
                                    : {
                                          width: "30%",
                                          backgroundColor: "darkblue",
                                          fontSize: "18px",
                                          border: "none",
                                          borderRadius: "7px",
                                          padding: "5px 10px",
                                      }
                            }
                        />
                        <br />
                    </form>
                </div>
            </div>
        </div>
    );
}
