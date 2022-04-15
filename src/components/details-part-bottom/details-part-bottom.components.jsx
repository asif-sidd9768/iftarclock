import { iftarTime, hijriDate, tommTime } from "../../utils/extractDetails";

import "./details-part-bottom.styles.scss"

const DetailsPartBottom = () => {
    

    return (
        <div className="bottom-part">
            <div>
                <h3 className="header">
                    <span>Today's date</span>
                </h3>
                <span className="header-content">{hijriDate}</span>
            </div>
            <div>
                <h3 className="header-today">
                    <span >Iftar Timing</span>
                </h3>
                <span className="header-content-today">{iftarTime}</span>
            </div>
            <div>   
                <h3 className="header">
                    <span>Tomorrow Timing</span>
                </h3> 
                <span className="header-content">{tommTime}</span>
            </div>
        </div>
    )
}

export default DetailsPartBottom;