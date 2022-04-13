import { useState, useEffect } from "react";
import { getTime } from "../../utils/time";

import "./time.styles.scss"

const Time = () => {
    const dt = new Date()
    const timeObj = {
        hours: ((dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours()) < 10? "0" + (dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours()) : dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours()),
        minutes: dt.getMinutes(),
        seconds: dt.getSeconds()
    }
    const [time, setTime] = useState(timeObj);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getTime())
            console.log("updated")
        }, 1000)
        return () => clearInterval(interval)
    },[])

    return (
        <div>
            <h1><span className="time">{`${time.hours} : ${time.minutes} : ${time.seconds}`}</span></h1>
        </div>
    )
}

export default Time;