import { useEffect, useState } from "react";
import { getTime, getTimeLeft } from "../../utils/time";

import "./time.styles.scss";

const Time = (_props) => {
	const timeObj = {
		hours: "",
		minutes: "",
		seconds: "",
	};
	const [time, setTime] = useState(timeObj);

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(getTime());
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	const timeLeft = getTimeLeft();

	return (
		<div className="time-section">
			<div className="current-time">
				<span className="label">Current Time</span>
				<span className="value">{`${time.hours}:${time.minutes}:${time.seconds}`}</span>
			</div>

			<div className="countdown-card">
				{timeLeft.seconds > 0 ? (
					<>
						<span className="iftar-label">Iftar in</span>
						<div className="timer-display">
							<div className="timer-unit">
								<span className="timer-value">{timeLeft.hours}</span>
								<span className="timer-label">hours</span>
							</div>
							<span className="timer-separator">:</span>
							<div className="timer-unit">
								<span className="timer-value">{timeLeft.minutes}</span>
								<span className="timer-label">minutes</span>
							</div>
							<span className="timer-separator">:</span>
							<div className="timer-unit">
								<span className="timer-value">{timeLeft.seconds}</span>
								<span className="timer-label">seconds</span>
							</div>
						</div>
					</>
				) : (
					<div className="iftar-started">
						<span className="iftar-label">Blessed Iftar</span>
						<span className="start-text">Start Iftar</span>
					</div>
				)}
			</div>
		</div>
	);
};

export default Time;
