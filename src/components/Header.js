import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMenu, AiOutlineGithub } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import pic from "../images/foliopic.jpeg";
import { Avatar, Box, Button, Flex, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: <AiOutlineGithub />,
    url: "https://github.com/emmyVon",
  },
  {
    icon: <GrTwitter />,
    url: "https://twitter.com/emmyobiezuo",
  },
];

const Header = ({ menu, setMenu }) => {
  const handleClick = (e) => {
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    console.log(`triggered ${element}`);
    if (element) {
      const navheight = document.getElementById("nav").getBoundingClientRect().height;
      const position = element.offsetTop - navheight;
      window.scrollTo({ top: position, left: 0, behavior: "smooth" });
    } else {
      console.error(`Element with id ${id} not found`);
    }
    setMenu(false);
  };

  // useEffect(() => {
  //   const handleScroll = (event) => {
  //     if (scrollPositionY.current < window.scrollY) {
  //       scrollPositionY.current = window.scrollY;
  //       navBoxElement.current.style.transform = `translateY(-200px)`; // Hide
  //     } else if (scrollPositionY.current > window.scrollY) {
  //       scrollPositionY.current = window.scrollY;
  //       navBoxElement.current.style.transform = `translateY(0px)`; // Show
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      w="100vw"
      h="5rem"
      backgroundColor="#18181b"
      id="nav"
      zIndex={2}
    >
      <Box
        color="white"
        boxSize="90%"
        marginInline="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Avatar boxSize="3.2rem" display={{ base: "block", md: "none" }} src={pic} />
        <Box
          px={4}
          py={4}
          flex="1"
          pos={{ base: "absolute", md: "relative" }}
          justifyContent={{ base: "flex-start", md: "space-between" }}
          alignItems={{ base: "flex-start", md: "center" }}
          className={menu ? "nav-link open" : "nav-link"}
        >
          <Button
            variant="outline"
            color={{ base: "black", md: "white" }}
            size="sm"
            display={{ base: "block", md: "none" }}
            onClick={() => setMenu(false)}
          >
            <IoMdClose fontWeight="bold" />
          </Button>
          <nav className="menu-icons">
            <HStack px={8} gap={3} alignItems="center">
              {socials.map((social, index) => {
                const { icon, url } = social;
                return (
                  <ul key={index}>
                    <a href={url} target="_blank" style={{ fontSize: "2rem" }} onClick={() => setMenu(false)}>
                      {icon}
                    </a>
                  </ul>
                );
              })}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={4} flexDir={{ base: "column", md: "row" }}>
              <a href="#contactme" onClick={handleClick}>
                Contact Me
              </a>
              <a href="#projects" onClick={handleClick}>
                Projects
              </a>
            </HStack>
          </nav>
        </Box>
        <Button
          display={["block", "block", "none"]}
          colorScheme="#808080"
          onClick={() => setMenu(true)}
        >
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
