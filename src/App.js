import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import IntroSection from './section1-Intro/IntroSection';
import AboutMeSection from './section2-About/AboutMeSection';
import ProjectsSection from './section3-Projects/ProjectsSection';
import ConnectSection from './section4-Connect/ConnectSection';
import Footer from './section5-Footer-New/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';
import './global-styles.css';

export default function Scroll() {
  return (
    <ParallaxProvider>
      <IntroSection />
      <AboutMeSection />
      <ProjectsSection />
      <ConnectSection />
      <Footer />
    </ParallaxProvider>
  );
}
