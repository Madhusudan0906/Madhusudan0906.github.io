import { Box, Grid, GridItem, Heading,Image,Text } from '@chakra-ui/react';
import React from 'react';
import styles from "./Info.module.css";
const Info = () => {
  return (
    <div className={styles.main}>
      <Box paddingTop='8%'>
      <Grid templateColumns="48% 48%" gap="2%">
        
        <GridItem padding='1%'>
        <Heading as='h1'>
        Hii there, 👋
        </Heading>
        <Heading as='h1'>
        I am Madhusudan Prajapat
        </Heading>
        <br/>
          
          <hr className={styles.hrline} />
        <Heading as='h1'>
        Full Stack Web Developer
        </Heading>
        <hr className={styles.hrline} />
        <br/>
        <Text fontSize='2xl'>
          Aspiring Full stack web developer, teamworking hardworking and collabrative, skilled person who wants to build amazing projects.
          </Text>
        </GridItem>
        <GridItem>
          <Image loading='lazy' src="https://contentstatic.techgig.com/thumb/msid-89803879,width-720,resizemode-4/How-to-become-a-web-developer-A-complete-guide.jpg?16474" alt="programmer"/>
        

        </GridItem>
      </Grid>
      </Box>
       
        
    
    </div>
  )
}

export default Info