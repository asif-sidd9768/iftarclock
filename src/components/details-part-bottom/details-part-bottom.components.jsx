import "./details-part-bottom.styles.scss"

const DetailsPartBottom = () => {
    return (
        <div className="bottom-part">
            <div>
                <h3 className="header">
                    <span>Today's date</span>
                </h3>
                <span className="header-content">11/09/1443</span>
            </div>
            <div>
                <h3 className="header-today">
                    <span >Iftar Timing</span>
                </h3>
                <span className="header-content-today">06:59</span>
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