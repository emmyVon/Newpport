import React from "react";
import { Avatar, Grid, Heading, VStack,Image,Box, HStack, Flex, Button } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profilepic from '../images/foliopic.jpeg'
import { motion, transform } from "framer-motion";


const bio1 = "Hello Im OBIEZUO EMMANUEL,im a front-end developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => {
  const words = bio1.split(' ')
  return(
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    
  >
    <Grid templateColumns={{base:'1fr', md:'1fr 1fr'}} gap='2rem' alignItems={'center'} justifyContent={'center'}>
      <VStack>
        <motion.div 
        animate={{x:0, opacity:1}}
        initial={{x:-500,opacity:0.3}}
        transition={{type:"spring", duration:3, ease:"easeIn"}}

        >
             <HStack>
              {words.map((word,index)=>(
          <Heading fontSize={{base:'0.7rem',md:'1.3rem'}} fontWeight='800' key={index}>{word}</Heading>
          )
        )}
        </HStack>
        </motion.div>
       <motion.div initial={{y:100, opacity:0}} animate={{y:0,opacity:1}} transition={{delay:3.2}}>
          <Heading fontSize={{base:'0.7rem',md:'1.3rem'}}>
          {bio2}
        </Heading>
       </motion.div>
       
       <motion.button initial={{opacity:0}} animate={{y:0,opacity:1}} transition={{delay:3.7}} style={{backgroundColor:"black",padding:"6px",borderRadius:"6px",fontWeight:"300"}}><a href="./CV.pdf" download='./CV.pdf'>Download CV</a></motion.button>
       
      </VStack>
    <Box position='relative' h='20rem' display={{base:'none', lg:'inline-block'}} >
      <Image src={profilepic} borderRadius='50% 50% 0 0' h='20rem' w='20rem' position='absolute' zIndex='1'transition='6s ease-out'  className="propic"/>
      <Box boxSize='20.2rem'  borderRadius='50% 50% 0 0' left='2rem' top='-3rem' pos='absolute' border='2px solid red'/>
    </Box>
    
    </Grid>
    
    


  </FullScreenSection>

)};

export default LandingSection;
