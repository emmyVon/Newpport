import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import Skills from './components/Skills'
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { useState,useEffect } from "react";
import {motion, useAnimation} from "framer-motion"
import AboutMe from "./components/AboutMe";

function App() {
  const [openMenu,setOpenMenu] = useState(false);
  const controls = useAnimation();
  useEffect(()=>{
    controls.start({opacity:1, y:0})
  },[controls])
  const handleScroll = ()=>{
    const scrollY = window.scrollY;
    if(scrollY > 100){
      controls.start({opacity:1,y:0})
    }
  }
  useEffect(()=>{window.addEventListener('scroll',handleScroll);
return ()=>window.removeEventListener('scroll',handleScroll);},[])
  return (
    <ChakraProvider>
      <AlertProvider>
         <Header menu={openMenu} setMenu={setOpenMenu} />
          <motion.main initial={{opacity:0,y:0}} animate={controls} className={openMenu?'mainPlus':''}>
          <LandingSection />
          <AboutMe/>
          <Skills/>
          <ProjectsSection /> 
          <ContactMeSection />
          <Footer />
          <Alert />
        </motion.main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
