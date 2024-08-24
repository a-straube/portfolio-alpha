function FruitProject({ id, title, link, fruitLeft, fruitRight, screenshot }) {
    return (
        <div id={id} className="fruit-project-container">
            <div className="fruit">
                <img src={fruitLeft} alt="Left hand holding fruit" />
                <div className="inside-fruit">
                    <a href={link} target="_blank">
                        <h4>{title}</h4>
                        <img src={screenshot} alt={`Screenshot of ${title} project`} />
                    </a>
                </div>
                <img src={fruitRight} alt="Right hand holding fruit" />
            </div>
        </div>
    )
}

export default FruitProject