import ImagesPartTop from "../images-part-top/images-part-top.components";
import Time from "../time/time.components";

import "./eid.styles.scss"

const Eid = () => {
    return (
        <div className="eid" style={{padding: "30px"}}>
            <ImagesPartTop />
            <div className="content-container">
                <h2 className="chand-mubarak-text">
                    Chand Mubarak
                    <img src="moon.png" className="moon-image" alt="moon"/> 
                </h2>
                <h2 className="blessing-text">The month of blessings has ended...</h2>
            </div>
        </div>
    )
}

export default Eid;