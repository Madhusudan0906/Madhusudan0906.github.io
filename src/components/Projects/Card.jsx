import { Heading, useMediaQuery } from "@chakra-ui/react";
import React from "react";

const Card = (props) => {
    const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)')
    return (
        <div
            style={isLargerThan1024?{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gap: "10px",
                backgroundColor: "white",
                color: "black",
                padding: "20px 10px",
                borderRadius:"5px",
            }:{
                display: "flex",
                alignItems:"center",
                flexDirection:"column",
                gap: "10px",
                backgroundColor: "white",
                color: "black",
                padding: "20px 10px",
                borderRadius:"5px",
            }}
        >
            <div>
                <img src={props.image} alt="primage" />
                <div style={{ marginTop: "20px" }}>
                    <a href={props.code} target="_blank" rel="noreferrer">
                        <button
                            style={{
                                border: "1px solid",
                                padding: "2px 10px",
                                borderRadius: "5px",
                                color: "white",
                                backgroundColor: "#2742a3",
                                margin:"10px",
                                
                            }}
                        >
                            Code 
                        </button>
                    </a>
                    <a href={props.web} target="_blank" rel="noreferrer">
                        <button
                            style={{
                                border: "1px solid",
                                padding: "2px 10px",
                                borderRadius: "5px",
                                color: "white",
                                backgroundColor: "#2742a3",
                            }}
                        >
                            Web
                        </button>
                    </a>
                </div>
            </div>
            <div>
                <Heading size="md">{props.title}</Heading>
                <p
                    style={{
                        marginTop: "5px",
                        textAlign: "justify",
                        padding: "5px",
                    }}
                >
                    {props.children}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {props.techStack.map((e) => (
                        <p
                            style={{
                                color: "red",
                                borderRadius: "10px",
                                border: "1px solid red",
                                width: "fit-content",
                                margin: "5px",
                                padding: "0px 5px",
                            }}
                        >
                            {e}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
