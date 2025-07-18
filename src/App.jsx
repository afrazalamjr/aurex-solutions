import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import styles from './style';
import bgImg from './assets/bg.png';

// Import pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import ClientsPage from './pages/Clients';

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
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/clients" element={<ClientsPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;