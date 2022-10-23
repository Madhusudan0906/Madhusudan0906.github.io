import { Box, Heading,Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import styles from "./Info.module.css";
const Info = () => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1024px)')
  return (
    <div className={styles.main} >
      <Box paddingTop='8%'>
      
      {isLargerThan1280?<Heading as='h1'>
        Hii there, 👋
        </Heading>:<Heading as='h1' style={{textAlign:"start",marginLeft:"20px"}}>
        Hii there, 👋
        </Heading>}
      
        {isLargerThan1280?<Heading as='h1'>
        I am Madhusudan Prajapat
        </Heading>:<Heading as='h1' style={{textAlign:"start",marginLeft:"20px"}}>
        I am <br/>Madhusudan Prajapat
        </Heading>}
        
        <br/>
          
          <hr className={styles.hrline} />
        <Heading as='h1'>
        Full Stack Web Developer
        </Heading>
        <hr className={styles.hrline} />
        <br/>
        <Text fontSize='2xl' style={{textAlign:"justify"}}>
          Aspiring Full stack web developer, teamworking hardworking and collabrative, skilled person who wants to build amazing projects.
          </Text>
      </Box>
       
        
    
    </div>
  )
}

export default Info