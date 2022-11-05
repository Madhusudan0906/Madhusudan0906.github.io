import { Heading, useMediaQuery } from '@chakra-ui/react';
import React from 'react'
import GithubCalender from 'react-github-calendar'
import styles from "./GithubStats.module.css";

const GithubStats = () => {
    const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  return (
    <div className={styles.main}>
        <Heading className={styles.h1}>Github Stats</Heading>
        <GithubCalender username="Madhusudan0906" fontSize={isLargerThan1024?24:14} theme="tokyonight" />

        <img width={500} src="https://github-readme-stats.vercel.app/api?username=Madhusudan0906&show_icons=true&theme=tokyonight" alt="stats" />
        
        <img width={500} src="https://streak-stats.demolab.com?user=Madhusudan0906&theme=tokyonight" alt="streak" />
        
        <img width={400} src="https://github-readme-stats.vercel.app/api/top-langs/?username=Madhusudan0906&theme=tokyonight" alt="usedLangs" />
    </div>
  )
}

export default GithubStats