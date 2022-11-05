import { Box, Grid, GridItem, Heading, useMediaQuery } from "@chakra-ui/react";
import styles from "./Skills.module.css";
import { useState, useEffect } from "react";
import db from "./links.json";
export default function Skills() {
    const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)')
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    const [data, setData] = useState({ ...db });
    useEffect(() => {
        console.log(data);
    }, [data]);
    return (
        <div className={styles.main}>
            <Box padding="1% 7%" align="center" marginTop="2%">
                {Object.keys(data).map((keyname, i) => (
                    <div key={i}>
                        <Heading
                            as="h2"
                            style={{
                                textTransform: "capitalize",
                            }}
                        >
                            {keyname}
                        </Heading>
                        <br />
                        <Grid templateColumns={isLargerThan1024?"repeat(6,1fr)":isLargerThan768?"repeat(4,1fr)":"repeat(3,1fr)"} gap={6}>
                            {Object.keys(data[keyname]).map((ke, i) => (
                                <GridItem key={`t${i}`}>
                                    <img
                                        src={data[keyname][ke]}
                                        alt={ke}
                                        style={{
                                            border: "1px solid",
                                            padding: "5px",
                                            borderRadius: "2px",
                                            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                                        }}
                                    />
                                </GridItem>
                            ))}
                        </Grid>
                    </div>
                ))}
            </Box>
        </div>
    );
}
