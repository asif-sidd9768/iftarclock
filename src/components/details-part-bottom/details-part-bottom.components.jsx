import { TIMINGS } from "../../utils/timetable";
import "./details-part-bottom.styles.scss";

const DetailsPartBottom = () => {
	const d = new Date();
	const options = { month: "2-digit", day: "2-digit", year: "numeric" };
	const date = d.toLocaleDateString("en-GB", options);
	return (
		<div className="bottom-part">
			<div>
				<h3 className="header">
					<span>Today's date</span>
				</h3>
				{/*                 <span className="header-content">{addLeadingZero(dt.iDate())}/{dt.format('iMM')}/{dt.iYear()}</span> */}
				<span className="header-content">29/10/1446</span>
			</div>
			<div>
				<h3 className="header-today">
					<span>Iftar Timing</span>
				</h3>
				<span className="header-content-today">
					{TIMINGS[date].todayTiming}
				</span>
			</div>
			<div>
				<h3 className="header">
					<span>Tomorrow Timing</span>
				</h3>
				<span className="header-content">{TIMINGS[date].tomorrowTiming}</span>
			</div>
		</div>
	);
};

export default DetailsPartBottom;
