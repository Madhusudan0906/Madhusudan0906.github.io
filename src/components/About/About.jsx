import { GridItem, Heading, Text,Grid, Box, Image } from "@chakra-ui/react";
import React from "react";
import styles from "./About.module.css"
function About(){
    return (<div className={styles.main}>
        <Heading as="h2">About</Heading>
        <Box padding="5% 2%">
        <Grid templateColumns="38% 58%" gap={2} >
            <GridItem>
                <Image margin="25px" boxSize='80%' object-position="center" onLoad="lazy" style={{borderRadius:"50%",boxShadow: "rgba(200, 200, 200, 0.2) 0px 7px 29px 0px"}} objectFit="cover"
     src="https://avatars.githubusercontent.com/u/103635175?v=4" alt="Madhusudan Prajapat" />
               

            </GridItem>
            <GridItem>
                <Box className={styles.aboutbox}>
                <Text padding="5%" align="justify" color="black">
                    This is Madhusudan Prajapat, who wants an opportunity to show off his skills in coding. He learned his first language in his school which was c++ Then in 11th std he chose IP as an optional Subject in which he learned about Java. <br/>
                    After school, he went into the computer world to learn about hardware and networking. After that he got to know about python so jumped into python full stack web development where he learned about Django. <br/>
                    after learning he started working on it to skill up but he was slow in frontend development that's the reason he did not complete any of his projects complete. Still, when he surfed the internet, he found out about react and then searched for it after some time he knows that he can able to use react in Django as a frontend but he doesn't know about node JS so he started learning by himself from YouTube and udemy. <br/>
                    But he failed. In 2022, he watched a YouTube video where advertisements were from Masai and then surfed Masai's website. After some days of thinking, he decided to join. Then he learned to react and you see this portfolio is also created using react. That's all, thank you.
                </Text>
                </Box>
            </GridItem>
        </Grid>
        </Box>
    
    </div>);
}

export default About;