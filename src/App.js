import './App.css';
import Navbar from './components/Navbar';
import HeroTop from './components/HeroTop';
import ServicesSection from './components/ServicesSection';
import CloudPlatforms from './components/CloudPlatforms';
import IndustriesSection from './components/IndustriesSection';
import TechStackSection from './components/TechStackSection';
import LetsTalk from './components/LetsTalk';
import Clients from './components/Clients';
import Footer from './components/Footer';

function App() {
  return <><Navbar/>
    <HeroTop/>
    <ServicesSection/>
    <CloudPlatforms/>
    <IndustriesSection/>
    <Clients/>
    <TechStackSection/>
    <LetsTalk/>
    <Footer/>
  </>
}

export default App;
