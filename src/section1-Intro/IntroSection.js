import { Parallax } from 'react-scroll-parallax';
import './IntroSection.css';
import MovingWater from './MovingWater'

function IntroSection() {
    return (
        <section id='introSection'>
            <Parallax speed={4} id='sun'></Parallax>
            <Parallax speed={-40} id='mountain1' className='mountain'></Parallax>
            <Parallax speed={-30} id='mountain2' className='mountain'></Parallax>
            <Parallax speed={-28} id='movingWater'>
                <MovingWater />
            </Parallax>
            <Parallax speed={-44}>
                <h1><span><span id='h1LetterA'>A</span>xel</span> <span>Straube</span></h1>
            </Parallax>
            <Parallax id='mountain3' className='mountain'></Parallax>
        </section>
    );
}

export default IntroSection;