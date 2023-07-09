import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import pic from '../images/foliopic.jpeg';
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Avatar, Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
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
      
      backgroundColor="#18181b"
      zIndex={2}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto" display='flex' alignItems='center'>
         <Avatar boxSize='2rem' display={{base:'block', md:'none'}}/>
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          w='100%'
          className="nav-links"
        >
          <nav>
            <HStack
              px={8}
                justifyContent="space-around"
                alignItems="center"
            >
              {socials.map((social,index) => {
                const { icon, url } = social
                return (
                  <ul key={index}>
                    <li><a href={url}><FontAwesomeIcon icon={icon} size='2x'/></a></li>
                  </ul>
                )
              })}
             
            </HStack>
            
           
            {/* Add social media links based on the `socials` data */}
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href='#contact-me' onClick={()=>handleClick(contact-me)} >Contact Me</a>
              <a  href='#project' onClick={()=>handleClick(project)}>Projects</a>
              {/* Add links to Projects and Contact me section */}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;


// translateY={0}
//       transitionProperty="transform"
//       transitionDuration=".3s"
//       transitionTimingFunction="ease-in-out"