import React, { useEffect, useRef, useState } from "react";
import {AiOutlineMenu,AiOutlineGithub} from 'react-icons/ai'
import {GrTwitter} from 'react-icons/gr'
import {IoMdClose} from 'react-icons/io'
import pic from '../images/foliopic.jpeg';
import { Avatar, Box, Button, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: <AiOutlineGithub/>,
    url: "https://github.com/emmyVon",
  },
  {
    icon: <GrTwitter/>,
    url: "https://twitter.com/emmyobiezuo",
  },
];

const Header = ({menu,setMenu}) => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = (event) => {
      if (scrollPositionY.current < window.scrollY) {
        scrollPositionY.current = window.scrollY;
        navBoxElement.current.style.transform = `translateY(-200px)`; // Hide
      } else if (scrollPositionY.current > window.scrollY) {
        scrollPositionY.current = window.scrollY;
        navBoxElement.current.style.transform = `translateY(0px)`; // Show
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
 

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      w='100vw'
      h='5rem'
      backgroundColor="#18181b"
      zIndex={2}
    >
      <Box color="white" boxSize='90%' marginInline='auto' display='flex' justifyContent='space-between'alignItems='center'  >
         <Avatar boxSize='2rem' display={{base:'block', md:'none'}} src={pic}/>
        <Box
          px={16}
          py={4}
          flex='1'
          pos={{base:'absolute',md:'relative'}}
          justifyContent={{base:'flex-start',md:'space-between'}}
          alignItems={{base:'flex-start',md:'center'}}  
          className={menu? 'nav-link open':'nav-link'}
        >
          <Button variant='outline' color={{base:'black',md:'white'}} size='sm' display={{base:"flex", md:"none"}} onClick={()=>setMenu(false)}><IoMdClose fontWeight='bold'/></Button>
          <nav>
            <HStack
            order={{base:'2',md:'1'}}
              px={8}
              gap={3}
              alignItems='center'
                
            >
              {socials.map((social,index) => {
                const { icon, url } = social
                return (
                  <ul key={index}>
                    <a href={url} style={{fontSize:'2rem'}}>{icon}</a>
                  </ul>
                )
              })}
             
            </HStack>
          </nav>
          <nav>
            <HStack spacing={4}  flexDir={{base:'column',md:'row'}} >
              <a href='#contactme' onClick={()=>handleClick(contactme)} >Contact Me</a>
              <a  href='#projects' onClick={()=>handleClick(project)}>Projects</a>
            </HStack>
          </nav>
        </Box>
        <Button display={['block','none']} colorScheme="#808080" onClick={()=>setMenu(true)}>
           <AiOutlineMenu />
        </Button>
      </Box>
    </Box>
  );
};
export default Header;


// translateY={0}
//       transitionProperty="transform"
//       transitionDuration=".3s"
//       transitionTimingFunction="ease-in-out"