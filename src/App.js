import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import IntroSection from './section1-Intro/IntroSection';
import AboutMeSection from './section2-About/AboutMeSection';
import ProjectsSection from './section3-Projects/ProjectsSection';
import { ParallaxProvider } from 'react-scroll-parallax';
import './global-styles.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Scroll() {
  const main = useRef();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('.box');
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 150,
          scrollTrigger: {
            trigger: box,
            start: 'bottom bottom',
            end: 'top 20%',
            scrub: true,
            // markers: true,
          },
        });
      });
    },
    { scope: main }
  );

  return (
    <ParallaxProvider>
      <IntroSection />
      <AboutMeSection />
      <ProjectsSection />
      <div className="section flex-center column" ref={main}>
        <div className="box gradient-blue">box</div>
        <div className="box gradient-blue">box</div>
        <div className="box gradient-blue">box</div>
      </div>
      <section className="section"></section>
    </ParallaxProvider>
    
  );
}
