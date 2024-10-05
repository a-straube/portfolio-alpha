import Carousel from 'react-bootstrap/Carousel';
import imgs from '.././img/imgs';
import './AboutMeSection.css';

function AboutMeSection() {
    return (
        <section id="aboutMeSection">
            <div className="section-content">
                <div id="lamp">Placeholder</div>
                <Carousel id="book" interval={null} >
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h3>About Me</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <img src={imgs.plant1} id="deskPlant1" alt="Picture of houseplant" />
                <div id="picture">
                    <span id="pictureFrame"><img src={imgs.axelPic} alt="Picture of Axel in front of a piano" /></span>
                </div>
                <img src={imgs.plant2} id="deskPlant2" alt="Picture of houseplant" />
            </div>
        </section>
    );
}

export default AboutMeSection