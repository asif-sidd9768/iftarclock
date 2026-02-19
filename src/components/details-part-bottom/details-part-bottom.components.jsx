import { TIMINGS } from "../../utils/timetable";
import "./details-part-bottom.styles.scss";

const DetailsPartBottom = () => {
	const d = new Date();
	const options = { month: "2-digit", day: "2-digit", year: "numeric" };
	const date = d.toLocaleDateString("en-GB", options);

	// Hardcoded for now as per current component logic,
	// but in a real app, this should be calculated from d
	const hijriDate = "29/10/1446";

	return (
		<div className="bottom-part">
			<div className="detail-card">
				<span className="detail-label">Today's Date</span>
				<span className="detail-value">{hijriDate}</span>
				<span className="detail-sub">Hijri Calendar</span>
			</div>

			<div className="detail-card highlighted">
				<span className="detail-label">Iftar Timing</span>
				<span className="detail-value">{TIMINGS[date].todayTiming}</span>
				<span className="detail-sub">Evening</span>
			</div>

			<div className="detail-card">
				<span className="detail-label">Tomorrow</span>
				<span className="detail-value">{TIMINGS[date].tomorrowTiming}</span>
				<span className="detail-sub">Iftar Timing</span>
			</div>
		</div>
	);
};

export default DetailsPartBottom;
