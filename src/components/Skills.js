import React from 'react'
import {Box, Card,Image,Text, VStack} from '@chakra-ui/react'
import js from '../images/js.jpg'
import REACT from '../images/react.jpg'
import Node from '../images/js.jpg'
import express from '../images/js.jpg'
import TS from '../images/type.jpg'


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
    <Box display='flex' placeItems='center' w='85%' gap='5rem' marginBottom='3rem'>
    {skills.map((skill,index) =>{
        const {logo,name,level} = skill
        return(
            <Card key={index} alignItems='center' gap='2rem' boxSize='9rem' bg='orange.200'color='whitesmoke'>
                <VStack>
                <Image src={logo}alt={name}/>
                <Text>{name}</Text>
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