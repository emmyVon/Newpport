import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import ProCard from "./ProCard";

import AOS from 'aos'
import 'aos/dist/aos.css'

const projects = [
  {
    title: "Shoe E-Commerce",
    description:
      "A shoe e-commerce site built with React, with ability to display different view of the Product. Well organised Cart and formatted total Price of Goods added to Cart ",
    getImageSrc: () =>
      require("../images/Web capture_19-7-2023_182825_remarkable-churros-670b96.netlify.app.jpeg"),
    netlink: "https://remarkable-churros-670b96.netlify.app/",
    gitlink:"https://github.com/emmyVon/shoe-ecommerce"
  },
  {
    title: "Shorten-URL",
    description:
      "Landing Page for a App that Builds brand, create Shorter links and assisting in making brands publicly recognized",
    getImageSrc: () => require("../images/Web capture_16-7-2023_23116_localhost.jpeg"),
    netlink: "https://gregarious-mooncake-142b52.netlify.app/",
    gitlink:"https://github.com/emmyVon/shortenUrl"
  },
  {
    title: "Easy Banking",
    description:
      "Landing page for a Banking, with well mapped out layout on the essence of the Banking method and why it is top of other banking competitors",
    getImageSrc: () =>
      require("../images/Web capture_19-7-2023_175729_stunning-eclair-0dd058.netlify.app.jpeg"),
    netlink: "https://stunning-eclair-0dd058.netlify.app/",
    gitlink: "https://github.com/emmyVon/easybank"
  },
  {
    title: "Interactive Comment Section",
    description:
      "A Comment Section that can be integrated in many social media Apps, where users can make comments on a post and view others comment on the Post. Allows User to reply comments of other users, Edit or Delete personal comment or reply on the the Post.",
    getImageSrc: () => require("../images/comment-section.jpg"),
    netlink: "https://celadon-pika-5854ad.netlify.app/",
    gitlink:"https://github.com/emmyVon/convoApp"
  },
];

const ProjectsSection = () => {
  // #14532d #3E267A "#4C547E"
  return (
    <FullScreenSection
      backgroundColor= "#2A4365"
      isDarkBackground
      p={8}
      py={24}
      alignItems="center"
      spacing={2}
    >
       <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in" style={{ display:"flex", flexDirection:"Column",alignItems:'center'}}id="projects">
      <Heading as="h1" marginBottom={5} >
        Featured Projects
      </Heading>
      <Box  display="grid" gridTemplateColumns="repeat(auto-fit,minmax(20rem,1fr))" gridGap={6}>
        {projects.map((project) => (
          <ProCard
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            netlink={project.netlink}
            gitlink={project.gitlink}
          />
        ))}
      </Box>
    </div>
    </FullScreenSection>
  );
};

export default ProjectsSection;
