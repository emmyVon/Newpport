import React from 'react'
import {Box, Card,Image,Text} from '@chakra-ui/react'
import js from '../images/js.jpg'
import REACT from '../images/react.jpg'
import Node from '../images/js.jpg'
import express from '../images/js.jpg'
import TS from '../images/type.jpg'


const skills = [{
    logo:{js},
    name: "HTML,CSS,JAVASCRIPT"
},{
    logo:{REACT},
    name: "REACT"
},{
    logo:{Node},
    name: "NODE JS"
},{
    logo:{express},
    name: " EXPRESS JS"
},{
    logo:{TS},
    name: " EXPRESS JS"
}
]

const Skills = () => {
  return (
    <Box display='flex' placeItems='center' w='85%'>
    {skills.map((skill,index) =>{
        const {logo,name} = skill
        return(
            <Card key={index} alignItems='center' gap='0.7rem' boxSize='5rem'>
                <Image src={logo}/>
                <Text>{name}</Text>
            </Card>
        )
    })
    }
</Box>
   
  )
}

export default Skills