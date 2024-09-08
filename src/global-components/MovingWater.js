import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './MovingWater.css';

function MovingWater({ id }) {
    useGSAP(() => {
        gsap.to('.water-row--odd', {
            duration: 25,
            x: 250,
            repeat: -1,
            repeatDelay: 0,
            ease: "sine.inOut",
            yoyo: true,
        })
        gsap.to('.water-row--even', {
            duration: 25,
            x: -250,
            repeat: -1,
            repeatDelay: 0,
            ease: "sine.inOut",
            yoyo: true,
        })
    })

    return (
        <div id={id}>
            <div className='water-row water-row--odd'></div>
            <div className='water-row water-row--even'></div>
            <div className='water-row water-row--odd'></div>
            <div className='water-row water-row--even'></div>
            <div className='water-row water-row--odd'></div>
            <div className='water-row water-row--even'></div>
            <div className='water-row water-row--odd'></div>
            <div className='water-row water-row--even'></div>
            <div className='water-row water-row--odd'></div>
        </div>
    )
}

export default MovingWater