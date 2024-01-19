import { Heading, Text } from "@chakra-ui/react"
import FullScreenSection from "./FullScreenSection"
import { Fade } from "react-reveal"

const AboutMe = ()=>{
    return(
        <FullScreenSection  justifyContent="center"
    alignItems="center"
    isDarkBackground
    minH={'50vh'}
    backgroundColor="#2A4365"
    >
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in" style={{ display:"flex", flexDirection:"Column",alignItems:'center'}} >
         
        <Heading>About Me</Heading>
        <Text fontWeight={300} fontSize={'1.6rem'}>
            I am a Frontend Developer with a passion for developing innovative Websites that depicts the efficiency and effectiveness of organization success. My Love for the Technical field ignite my drive to acquire a skill in Web development, i do not consider myself as self-made rather i see myself as self-motivated because i learnt from the Very Best Online while constantly pushing myself.I'm Confident in my skills, as well as willing to learn inorder to improve myself. I'm Well-versed in technology and writing code to create systems that are reliable and user-friendly.I am skilled in converting design mockups into responsive web pages and implementing cross-browser compatibility. I am also experienced in optimizing web applications for fast loading times and accessibility compliance.  I am passionate about creating elegant solutions to complex problems and look forward to collaborating with like-minded individuals in the industry.
        </Text>
        </div>


        </FullScreenSection>

    )
}


export default AboutMe