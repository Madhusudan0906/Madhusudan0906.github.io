import { Box, Grid,GridItem, Heading } from "@chakra-ui/react";
import styles from "./Skills.module.css";
export default function Skills(){
    return (<div className={styles.main}> 
    <Heading as='h2'>Skills</Heading>
    <Box padding="1%" align="center" marginTop="2%">
        <Grid templateColumns='repeat(4,1fr)' gap={6}>
            <GridItem>
    <img width="50%" style={{height:"50%"}} src="https://masai-website-images.s3.ap-south-1.amazonaws.com/html_5_e17a3be25f.svg" alt="HTML" />

            </GridItem>
            <GridItem>
    <img width="50%" style={{height:"50%"}} src="https://masai-website-images.s3.ap-south-1.amazonaws.com/css_3_3dbbdc86b6.svg" alt="CSS" />

            </GridItem>
            <GridItem>
            <img width="50%" style={{height:"50%"}} src="https://masai-website-images.s3.ap-south-1.amazonaws.com/javascript_96690a83df.svg" alt="JS" />

            </GridItem>
            <GridItem>
            <img width="50%" style={{height:"50%"}} src="https://masai-website-images.s3.ap-south-1.amazonaws.com/react_fd582ea59b.svg" alt="React JS" />

            </GridItem>
            <GridItem>
            <img width="50%" style={{height:"50%"}} src="https://masai-website-images.s3.ap-south-1.amazonaws.com/redux_f650f4cdbb.svg" alt="Redux" />

            </GridItem>
            <GridItem>
            <img width="50%" style={{height:"50%"}} src="https://masai-website-images.s3.ap-south-1.amazonaws.com/mongodb_8a65496daa.svg" alt="MongoDB" />

            </GridItem>
            <GridItem>
            <img width="50%" style={{height:"50%"}} src="https://masai-website-images.s3.ap-south-1.amazonaws.com/nodejs_07d5eaa3a7.svg" alt="NodeJS" />

            </GridItem>
            <GridItem>
            <img width="45%" style={{height:"60%"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png" alt="Python" />

            </GridItem>
        </Grid>
        </Box>
    </div>);
}