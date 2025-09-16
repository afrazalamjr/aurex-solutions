import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, AnnouncementBanner } from './components';
import styles from './style';
import bgImg from './assets/bg.png';

// Import pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import ClientsPage from './pages/Clients';

// Import service pages
import BusinessDevelopment from './pages/services/BusinessDevelopment';
import AIWorkflowAutomation from './pages/services/AIWorkflowAutomation';
import CryptoCoinLaunch from './pages/services/CryptoCoinLaunch';
import Blockchain from './pages/services/Blockchain';

const App = () => {
  return (
    <Router>
      <div
        className='bg-primary w-full overflow-hidden'
        style={{
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: '100vh'
        }}
      >
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
        </div>
        <AnnouncementBanner />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/business-development" element={<BusinessDevelopment />} />
          <Route path="/services/ai-workflow-automation" element={<AIWorkflowAutomation />} />
          <Route path="/services/crypto-coin-launch" element={<CryptoCoinLaunch />} />
          <Route path="/services/blockchain" element={<Blockchain />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/clients" element={<ClientsPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;