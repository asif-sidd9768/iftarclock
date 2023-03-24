// import { iftarTime, hijriDate, tommTime } from "../../utils/extractDetails";
import moment from "moment-hijri";
import { TIMINGS } from "../../utils/timetable";
import "./details-part-bottom.styles.scss"

const DetailsPartBottom = () => {
    const date = new Date()
    return (
        <div className="bottom-part">
            <div>
                <h3 className="header">
                    <span>Today's date</span>
                </h3>
                <span className="header-content">{moment().format('iDD/iMM/iYYYY')}</span>
            </div>
            <div>
                <h3 className="header-today">
                    <span >Iftar Timing</span>
                </h3>
                <span className="header-content-today">{TIMINGS[date.toLocaleDateString()].todayTiming}</span>
            </div>
            <div>   
                <h3 className="header">
                    <span>Tomorrow Timing</span>
                </h3> 
                <span className="header-content">{TIMINGS[date.toLocaleDateString()].tomorrowTiming}</span>
            </div>
        </div>
    )
}

export default DetailsPartBottom;