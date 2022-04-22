import "./images-part-top.styles.scss"

const ImagesPartTop = () => {
    return (
        <div className="container-top">
            <img className="image" src="kaaba.png" />
            <h2 className="middle-text">
                <span className="kalima">لآ اِلَهَ اِلّا اللّهُ مُحَمَّدٌ رَسُوُل اللّهِ</span>
                <br/>
                <span>
                    <span className="masala-text">Mas'Ala -</span> 
                    <span className="masala-content">
                        Kisi Wahabi,Deobandi (Badmazhab) ko uski Namaz, Roza dekh kar ye kehna ke wo Sunni se accha hai. Ye <span className="kufr-text">KUFR</span> hai.
                    </span>
                </span>
            </h2>
            <img className="image" src="prophets-mosque.png" />
        </div>
    )
}

export default ImagesPartTop;