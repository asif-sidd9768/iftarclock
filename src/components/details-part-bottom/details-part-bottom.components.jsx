import "./details-part-bottom.styles.scss"

const DetailsPartBottom = () => {
    return (
        <div className="bottom-part">
            <div>
                <h3>
                    <span>Today's date</span>
                </h3>
                <span>04/04/1443</span>
            </div>
            <div>
                <h3>
                    <span>Iftar Timing</span>
                </h3>
                <span>06:59</span>
            </div>
            <div>   
                <h3>
                    <span>Tomm Timing</span>
                </h3> 
                <span>07:00</span>
            </div>
        </div>
    )
}

export default DetailsPartBottom;