import { Parallax } from 'react-scroll-parallax';
import './IntroSection.css';

function IntroSection() {
    return (
        <section id='introSection'>
            <Parallax speed={-20}>
                <h1>Axel Straube</h1>
            </Parallax>
            <Parallax speed={4} id='sun'></Parallax>
            <Parallax speed={-40} id='mountain1' className='mountain'></Parallax>
            <Parallax speed={-30} id='mountain2' className='mountain'></Parallax>
            <Parallax id='mountain3' className='mountain'></Parallax>
        </section>
    );
}

export default IntroSection;