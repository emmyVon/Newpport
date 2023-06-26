import React from "react";
import { Avatar, Grid, Heading, VStack,Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profilepic from '../images/foliopic.jpeg'

const greeting = "Hello, I am Pete!";
const bio1 = "Hello I'm OBIEZUO EMMANUEL, frontend developer";
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
    <Grid templateColumns={'1fr 1fr'} alignItems='center'>
    <VStack>
      {/* <Avatar name="avatar" src="https://i.pravatar.cc/150?img=7"/> */}
      {greeting}
      <Heading>
        {bio1}
      </Heading>
      <Heading>
        {bio2}
      </Heading>
    </VStack>
    <Image src={profilepic} borderRadius='50% 50% 0 0' h='20rem' w='20rem'/>
    </Grid>
    
    


  </FullScreenSection>
);

export default LandingSection;
