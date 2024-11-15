import { Parallax } from 'react-scroll-parallax';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './IntroSection.css';
import MovingWater from '../global-components/MovingWater'

function IntroSection() {
    useGSAP(() => {
        gsap.to('#cloud1', {
            duration: 8,
            x: -15,
            y: -5,
            scale: 0.92,
            repeat: -1,
            repeatDelay: 0,
            ease: "power1.in",
            yoyo: true,
        })
        gsap.to('#cloud2', {
            duration: 15,
            x: 60,
            y: -15,
            scale: 0.85,
            repeat: -1,
            repeatDelay: 0,
            ease: "power1.in",
            yoyo: true,
        })
        gsap.to('h1', {
            duration: 1000,
            backgroundPositionX: '1000%',
            repeat: -1,
            yoyo: true,
        })
    })

    return (
        <section id='introSection'>
            <Parallax speed={4} id='sun'></Parallax>
            <Parallax speed={-40} id='mountain1' className='mountain'></Parallax>
            <Parallax speed={-34} id='mountain2' className='mountain'></Parallax>
            <Parallax speed={-28} id='movingWater'>
                <MovingWater />
            </Parallax>
            <Parallax speed={-300}>
                <h1><span><span id='h1LetterA'>A</span>xel</span> <span>Straube</span></h1>
            </Parallax>
            <Parallax speed={-30} id='h2'>
                <h2><span id="cloud1">Front-End</span> <span id="cloud2">Developer</span></h2>
            </Parallax>
            <Parallax speed={-8} id='mountain3' className='mountain'></Parallax>
            <Parallax speed={-2} id='mountain4' className='mountain'></Parallax>
        </section>
    );
}

export default IntroSection;