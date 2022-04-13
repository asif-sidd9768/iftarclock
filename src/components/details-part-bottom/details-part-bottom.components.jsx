import "./details-part-bottom.styles.scss"

const DetailsPartBottom = () => {
    return (
        <div className="bottom-part">
            <div>
                <h3 className="header">
                    <span>Today's date</span>
                </h3>
                <span className="header-content">04/04/1443</span>
            </div>
            <div>
                <h3 className="header">
                    <span className="header-content">Iftar Timing</span>
                </h3>
                <span>06:59</span>
            </div>
            <div>   
                <h3 className="header">
                    <span>Tomorrow Timing</span>
                </h3> 
                <span className="header-content">07:00</span>
            </div>
        </div>
    )
}

export default DetailsPartBottom;