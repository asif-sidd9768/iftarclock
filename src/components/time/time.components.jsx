import { useState, useEffect } from "react";
import { getTime, getTimeLeft } from "../../utils/time";
import Eid from "../eid/eid.component";

import "./time.styles.scss"

const Time = (props) => {
    // const timeObj = {
    //     hours: ((dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours()) < 10? "0" + (dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours()) : dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours()),
    //     minutes: dt.getMinutes(),
    //     seconds: dt.getSeconds()
    // }
    const timeObj = {
        hours: "",
        minutes: "",
        seconds: ""
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
            <h1 className="time-container">
                
                <br/>
                {
                    getTimeLeft().seconds > 0 ? (
                        <>
                        <span className="time">{`${time.hours} : ${time.minutes} : ${time.seconds}`}</span><br/>
                        <span className="time-left">
                            <span className="iftar-in-text">
                                Iftar in
                            </span>
                            <span className="time-left-counter">
                                {`${getTimeLeft().hours} : ${getTimeLeft().minutes} : ${getTimeLeft().seconds}`}
                            </span>
                        </span>
                        </>
                    ) : (
                        <>
                            <span className="time">
                                Chand Mubarak
                            </span>
                            <span className="time-left"><span className="iftar-in-text">Start Iftar</span></span>
                        </>
                        

                    )
                }
            </h1>
        </div>
    )
}

export default Time;