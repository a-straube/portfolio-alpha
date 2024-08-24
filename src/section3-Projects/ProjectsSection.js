import FruitProject from './FruitProject';
import imgs from '.././img/imgs';

function ProjectSection() {
    return (
        <section>
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
        </section>
    );
}

export default ProjectSection