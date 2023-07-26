import React from 'react'
import {Box, Card,Image,Text, VStack,Flex, Grid, Heading} from '@chakra-ui/react'
import js from '../images/js.jpg'
import REACT from '../images/react.jpg'
import Node from '../images/node js.jpg'
import express from '../images/express js.jpg'
import TS from '../images/type.jpg'
import {IoIosCheckmarkCircleOutline} from 'react-icons/io'
import FullScreenSection from './FullScreenSection'


const skills = [{
    logo:js,
    name: "HTML,CSS,JAVASCRIPT",
    level:"Experienced"
},{
    logo:REACT,
    name: "REACT",
    level:"Experienced"
},{
    logo:Node,
    name: "NODE JS",
    level:"Intermediate"
},{
    logo:express,
    name: " EXPRESS JS",
    level: "Basic"
},{
    logo:TS,
    name: "TypeScript",
    level:'Intermediate'
}
]

const Skills = () => {
  return (
    //  flexDirection={{base:'column', md:'row'}}
    <VStack bg='#1E3E73' py={8}>
        <Heading color='white'>Skills</Heading>
    <Grid templateColumns='repeat(auto-fit,minmax(6rem,1fr))' alignItems='center' gap='0.7rem'justifyContent='center' maxW='11920px' marginInline={'auto'} w={{base:'98vw',md:'90vw'}}>
    {skills.map((skill,index) =>{
        const {logo,name,level} = skill
        return(
            <Card key={index} alignItems='center' boxSize={{base:'6rem', md:'12rem'}} bg='#86AD88'color='whitesmoke' p={4}>
                <VStack>
                <Image src={logo}alt={name} boxSize={['3rem', '5rem']}/>
            <Flex placeItems='center' fontSize={['8px','8px']} gap={[1,3]}><IoIosCheckmarkCircleOutline  style={{fill:'green' }}/>{name}</Flex>
                <Text>{level}</Text>
                </VStack>
            </Card>
        )
    })
    }
</Grid>
</VStack>
   
  )
}

export default Skills