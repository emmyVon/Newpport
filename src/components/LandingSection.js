import React from "react";
import { Avatar, Grid, Heading, VStack,Image,Box, HStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profilepic from '../images/foliopic.jpeg'
import { motion, transform } from "framer-motion";

const greeting = "Hello, I am Pete!";
const bio1 = "Hello I'm OBIEZUO EMMANUEL,frontend developer".split("")
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Grid templateColumns={'1fr 1fr'} alignItems='center'gap={6}>
      <VStack>
        <motion.div 
        animate={{x:0, opacity:1}}
        initial={{x:-600,opacity:0.3}}
        transition={{type:"spring", duration:3, ease:"easeIn"}}

        >
             <HStack>{bio1.map((word,index)=>{
          return(
          <Heading key={index}>{word}</Heading>
          )
        })}
        </HStack>
        </motion.div>
       <motion.div initial={{y:100, opacity:0}} animate={{y:0,opacity:1}} transition={{delay:3.2}}>
          <Heading>
          {bio2}
        </Heading>
       </motion.div>
       
      </VStack>
    <Box position='relative' h='20rem' display={{base:'none',md:'inline-block'}} >
      <Image src={profilepic} borderRadius='50% 50% 0 0' h='20rem' w='20rem' position='absolute' zIndex='1'transition='6s ease-out' _hover={{left:'2rem', top:'-3rem'}}/>
      <Box boxSize='20.2rem'  borderRadius='50% 50% 0 0' left='2rem' top='-3rem' pos='absolute' border='2px solid red'/>
    </Box>
    
    </Grid>
    
    


  </FullScreenSection>
);

export default LandingSection;
