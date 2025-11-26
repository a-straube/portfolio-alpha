import { Parallax } from 'react-scroll-parallax';
import FruitProject from './FruitProject';
import MovingWater from '../global-components/MovingWater';
import imgs from '.././img/imgs';
import './ProjectsSection.css';

function ProjectSection() {
    return (
        <section id="projectsSection">
            <FruitProject
                id="trelloProject"
                title="Trello Project Management Dashboard"
                link="https://a-straube.github.io/trello-project-mgmt-dashboard/"
                fruitLeft={imgs.coconutHandLeft}
                fruitRight={imgs.coconutHandRight}
                screenshot={imgs.trelloScreenshot}
            />
            <FruitProject
                id="mahindraProject"
                title="Archives: Mahindra Build-Your-Own Tractor"
                link="https://web.archive.org/web/20221013003710/https://www.mahindrausa.com/--byo-max-26-xlt-hst"
                fruitLeft={imgs.pineappleHandLeft}
                fruitRight={imgs.pineappleHandRight}
                screenshot="https://web.archive.org/web/20221013003713im_/https://www.mahindrausa.com/images/pages/byo/byo-max-26-xlt-hst.jpg"
            />
            <Parallax id="boat" speed={-700}>
                <div id="sail"></div>
                <div id="sailText"><span>Fruits</span> <span>of my</span> <span>Labor</span></div>
                <img src={imgs.boat} alt="Boat" />
            </Parallax>
            <Parallax speed={-1200}>
                <MovingWater id="projectsWater" />
            </Parallax>
        </section>
    );
}

export default ProjectSection