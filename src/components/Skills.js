import React from 'react'
import {Box, Card,Image,Text, VStack,Flex} from '@chakra-ui/react'
import js from '../images/js.jpg'
import REACT from '../images/react.jpg'
import Node from '../images/node js.jpg'
import express from '../images/express js.jpg'
import TS from '../images/type.jpg'
import {IoIosCheckmarkCircleOutline} from 'react-icons/io'


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
    <Box display='flex' justifyContent='center' w='100%' gap='2rem' mt='3rem' mb='3rem'>
    {skills.map((skill,index) =>{
        const {logo,name,level} = skill
        return(
            <Card key={index} alignItems='center' gap='2rem' boxSize={{base:'6rem', md:'12rem'}} bg='orange.200'color='whitesmoke' p={4}>
                <VStack>
                <Image src={logo}alt={name} boxSize='5rem'/>
            <Flex placeItems='center' gap={3}><IoIosCheckmarkCircleOutline  style={{fill:'green' }}/>{name}</Flex>
                <Text>{level}</Text>
                </VStack>
            </Card>
        )
    })
    }
</Box>
   
  )
}

export default Skills