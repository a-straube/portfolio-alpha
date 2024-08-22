import Carousel from 'react-bootstrap/Carousel';

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
                <div id="deskItems"></div>
            </div>
        </section>
    );
}

export default AboutMeSection