import { Heading,Box, useMediaQuery } from "@chakra-ui/react";
import Card from "./Card";
import styles from "./Projects.module.css";
export default function Projects(){
    const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)')
    return (<div className={styles.main}>
    <Heading as="h2">Projects</Heading>
    <Box className={isLargerThan1024?styles.projectLg:styles.projectSm}>
        <Card
        key="1"
        image="https://camo.githubusercontent.com/5c6d595ed809cada4b95b2db7c87fd54ffd7870bd8863320e39a3df26463e761/68747470733a2f2f692e706f7374696d672e63632f46524e35683362302f53637265656e73686f742d3334352e6a7067" 
        title="Hello Bonsai Clone"
        code="https://github.com/PRASHANT7277/Hellobonsai-clone"
        web="https://hellobonsai.vercel.app/"
        techStack={["react","express","mongodb","node","html","css","chakra-ui","heroku","vercel"]}
        >
            Hello Bonsai is a freelancing management app. It offers freelance proposals and contracts. It handles your freelance invoices and payments. It helps you with tracking your expenses.
        </Card>
        <Card
        key="2"
        image="/images/urbancompany.png" 
        title="Urban Company Clone"
        code="https://github.com/Madhusudan0906/descriptive-neck-7504"
        web="https://celebrated-begonia-b260fc.netlify.app/"
        techStack={["html","css","js","netlify"]}
        >
            Urban Company is Asia's largest online home services platform. Launched in 2014,The platform helps customers book reliable & high quality services.
        </Card>
        <Card
        key="3"
        image="/images/thehindu.JPG" 
        title="The Hindu Clone"
        code="https://github.com/GaneshGanta/unit-2-construct-week-1_The-Hindu"
        web="https://fluffy-quokka-ee2774.netlify.app/"
        techStack={["html","css","js","netlify"]}
        >
            The Hindu is an English-language, Indian daily newspaper owned by The Hindu Group, headquartered in Chennai, Tamil Nadu. It began as a weekly in 1878 and became a daily in 1889.
        </Card>
        <Card
        key="4"
        image="/images/thehindu.JPG" 
        title="Big Basket Clone"
        code="https://github.com/Madhusudan0906/busy-fact-4985"
        web="https://busy-fact-4985-big-baske-clone.netlify.app/"
        techStack={["html","css","js","react","react-slick","chakra-ui","Ant Design","heroku","JSON-Serevr","netlify"]}
        >
            Big Basket is one of the largest online grocery super market in India. It was founded in 2011.
            BigBasket is a delivery platform but as a business it is spread out into everything from procurement to supply chain and logistics as well as in consumer services through subscription-based delivery and also somewhat into the foodtech category thanks to some local shops selling specialty items.
        </Card>
    </Box>
    
    </div>);
}