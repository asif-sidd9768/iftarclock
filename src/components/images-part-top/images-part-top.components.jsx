import "./images-part-top.styles.scss"

const ImagesPartTop = () => {
    return (
        <div className="container-top">
            <img className="image" src="kaaba.png" />
            <h2 className="middle-text">
                <span className="kalima">لآ اِلَهَ اِلّا اللّهُ مُحَمَّدٌ رَسُوُل اللّهِ</span>
                {/*<br/>
                <span>
                    <span className="masala-text">Mas'Ala -</span> 
                    <span className="masala-content">
                        
                    </span>
                </span>*/}
            </h2>
            <img className="image" src="prophets-mosque.png" />
        </div>
    )
}

export default ImagesPartTop;