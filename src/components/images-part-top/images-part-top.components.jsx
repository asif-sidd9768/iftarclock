import "./images-part-top.styles.scss"

const ImagesPartTop = () => {
    return (
        <div className="container-top">
            <img className="image" src="kaaba.png" />
            <h2>
                <span className="kalima">لآ اِلَهَ اِلّا اللّهُ مُحَمَّدٌ رَسُوُل اللّهِ</span>
            </h2>
            <img className="image" src="prophets-mosque.png" />
        </div>
    )
}

export default ImagesPartTop;