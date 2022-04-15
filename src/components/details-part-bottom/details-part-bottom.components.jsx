import timetable from "../../utils/timetable";

import "./details-part-bottom.styles.scss"

const DetailsPartBottom = () => {
    const dt = new Date()
    // console.log(timetable[String(dt.toLocaleDateString())])
    // const todayDetail = timetable[String(dt.toLocaleDateString())]
    // const iftarTime = todayDetail["iftar-time"]
    // const hijriDate = todayDetail["hijri-date"]
    // const tommTime = timetable[`${dt.getDate() + 1}/${dt.getMonth() + 1}/${dt.getFullYear()}`]["iftar-time"]

    return (
        <div className="bottom-part">
            <div>
                <h3 className="header">
                    <span>Today's date</span>
                </h3>
                <span className="header-content">abc</span>
            </div>
            <div>
                <h3 className="header-today">
                    <span >Iftar Timing</span>
                </h3>
                <span className="header-content-today">abc</span>
            </div>
            <div>   
                <h3 className="header">
                    <span>Tomorrow Timing</span>
                </h3> 
                <span className="header-content">abc</span>
            </div>
        </div>
    )
}

export default DetailsPartBottom;