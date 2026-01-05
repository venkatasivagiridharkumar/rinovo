import './App.css';
import {Routes,Route} from "react-router";
import Navbar from './components/Navbar';
import HeroTop from './components/HeroTop';
import ServicesSection from './components/ServicesSection';
import CloudPlatforms from './components/CloudPlatforms';
import IndustriesSection from './components/IndustriesSection';
import TechStackSection from './components/TechStackSection';
import LetsTalk from './components/LetsTalk';
import Clients from './components/Clients';
import Footer from './components/Footer';
import ServicesPage from "./components/ServicesPage"
import ContactPage  from './components/ContactPage';
import AboutPage from './components/AboutPage';
import SolutionsPage from './components/SolutionsPage';
import WorkPage from './components/WorkPage';

function App() {
  return <>
   <Navbar/>
   <Routes>
    <Route path="/" element={<> <HeroTop/>
    <ServicesSection/>
    <CloudPlatforms/>
    <IndustriesSection/>
    <Clients/>
    <TechStackSection/>
    <LetsTalk/></>}/>
   
   <Route path="/services" element={<ServicesPage/>}/>

   <Route path="/contact" element={<ContactPage/>}/>
   <Route path="/solutions" element={<SolutionsPage/>}/>
   <Route path="/work" element={<WorkPage/>}/>
   <Route path="/about" element={<AboutPage/>}/>
    </Routes>
    <Footer/>
  </>
}

export default App;
