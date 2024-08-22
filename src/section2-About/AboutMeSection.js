import Carousel from 'react-bootstrap/Carousel';
import imgs from '.././img/imgs';

function AboutMeSection() {
    return (
        <section id="aboutMeSection">
            <div id="window"></div>
            <div className="section-content">
                <div id="lamp">Placeholder</div>
                <Carousel>
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
                <div id="deskItems">
                    <img src={imgs.plant1} alt="Picture of houseplant" />
                    <img src={imgs.axelPic} alt="Picture of Axel in front of a piano" />
                    <img src={imgs.plant2} alt="Picture of houseplant" />
                </div>
            </div>
        </section>
    );
}

export default AboutMeSection