import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import Skills from './components/Skills'
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [openMenu,setOpenMenu] = useState(false)
  return (
    <ChakraProvider>
      <AlertProvider>
         <Header menu={openMenu} setMenu={setOpenMenu} />
          <main className={openMenu?'mainPlus':''}>
          <LandingSection />
          <Skills/>
          <ProjectsSection /> 
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
