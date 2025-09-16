import React from 'react';
import { 
  Billing, 
  Business, 
  CardDeal, 
  Clients, 
  CTA, 
  FeatureGrid,
  Hero, 
  SectionHeading,
  Stats, 
  Testimonials,
  TrustedPartners,
  ValueProposition
} from '../components';
import styles from '../style';

const Home = () => {
  return (
    <>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>      
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <TrustedPartners/> */}
          <ValueProposition/>
          
          <SectionHeading 
            title="Our Services" 
            subtitle="Comprehensive solutions to transform your business and drive growth"
          />
          <FeatureGrid/>
          
          <SectionHeading 
            title="Client Testimonials" 
            subtitle="What our satisfied clients say about working with us"
          />
          <Testimonials/>
          
          <SectionHeading 
            title="Our Clients" 
            subtitle="Trusted by innovative companies worldwide"
          />
          <Clients/>
          
          <CTA/>
        </div>
      </div>
    </>
  );
};

export default Home;