import Time from "../time/time.components";
import ImagesPartTop from "../images-part-top/images-part-top.components";
import DetailsPartBottom from "../details-part-bottom/details-part-bottom.components";

import "./everything.styles.scss"

const Everything = () => {
    return (
        <div className="everything-container">
            <ImagesPartTop />
            <div>
                <Time  />
            </div>
            <DetailsPartBottom />
        </div>
    )
}

export default Everything;