import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import ProCard from "./ProCard";

const projects = [
  {
    title: "Shoe E-Commerce",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/e-commerce.jpg"),
    netlink:"https://guileless-alpaca-46d023.netlify.app"
  },
  {
    title: "Shorten-URL",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/shorten-url.jpg"),
    netlink:"https://guileless-alpaca-46d023.netlify.app"
  },
  {
    title: "Easy Banking",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/easy-bank.jpg"),
    netlink:"https://stunning-eclair-0dd058.netlify.app/"
  },{
    title: "Interactive Comment Section",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/comment-section.jpg"),
    netlink:"https://guileless-alpaca-46d023.netlify.app"
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={4}
      alignItems="flex-start"
      spacing={2}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit,minmax(20rem,1fr))"
        gridGap={6}
      >
        {projects.map((project) => (
          <ProCard
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            netlink={project.netlink}

          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
