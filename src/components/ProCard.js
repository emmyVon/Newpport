import {Card,CardBody,Image,Heading,HStack,Text, Button, VStack, ButtonGroup, Link} from '@chakra-ui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ProCard = ({ title, description, imageSrc,netlink}) => {
  
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Card bg='#0005'className='procard' pos='relative'>
      <Image src={imageSrc}  objectFit='contain' h='20rem'className='cardimg'/>
      <ButtonGroup pos='absolute' top='40%'spacing={8} className='probtn' display='none'>
        <Link color='white'>GitHub</Link>
        <Link color='white'href={netlink} isExternal>Netlify</Link>
      </ButtonGroup  >
      <CardBody bg='white' alignItems='center' justifyContent='center' h='100%'>
          <Heading fontSize='1.7rem'>{title}</Heading>
    <Text >{description}</Text>    
      </CardBody>
    </Card>
   
  );
};

export default ProCard;


//  <Card>
//     
    
//     
    
//   </Card>