import { Heading, Text, Box, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import styles from "./About.module.css";
function About() {
    const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');
    
    
    return (
        <div className={styles.main}>
            
            <Box padding="5% 2%">
                <div className={isLargerThan1024?styles.stylelg:styles.stylemb} >
                        <div>
                        <img
                            src="https://avatars.githubusercontent.com/u/103635175?v=4"
                            alt="myProfileImage"
                        />
                        </div>
                        <div>
                        <Heading as="h2" style={{marginBottom:"20px"}}>About Me</Heading>
                        <Box className={styles.aboutbox}>
                            <Text padding="5%" align="justify" color="black">
                                Hard Working , team Member and collabrative
                                person who wants to prove himself.
                                <br />
                                by creating amazing projects and change the
                                worlds point of view to see the websites.
                            </Text>
                            {/* This is Madhusudan Prajapat, who wants an opportunity to show off his skills in coding. He learned his first language in his school which was c++ Then in 11th std he chose IP as an optional Subject in which he learned about Java.
After school, he went into the computer world to learn about hardware and networking. After that he got to know about python so jumped into python full stack web development where he learned about Django.
after learning he started working on it to skill up but he was slow in frontend development that's the reason he did not complete any of his projects complete. Still, when he surfed the internet, he found out about react and then searched for it after some time he knows that he can able to use react in Django as a frontend but he doesn't know about node JS so he started learning by himself from YouTube and udemy.
But he failed. In 2022, he watched a YouTube video where advertisements were from Masai and then surfed Masai's website. After some days of thinking, he decided to join. Then he learned to react and you see this portfolio is also created using react. That's all, thank you. */}
                        </Box>
                        </div>
                </div>
                {/* <Grid templateColumns="38% 58%" gap={2}>
                    <GridItem>
                       
                        <img
                            src="https://avatars.githubusercontent.com/u/103635175?v=4"
                            alt="myProfileImage"
                            style={stylem}
                        />
                    </GridItem>
                    <GridItem>
                    
                    </GridItem>
                </Grid> */}
            </Box>
        </div>
    );
}

export default About;
