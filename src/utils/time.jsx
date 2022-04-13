export const getTime = () => {
    const dt = new Date()
    const timeObj = {
        hours: ((dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours()) < 10? "0" + (dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours()) : dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours()),
        minutes: (dt.getMinutes() < 10 ? "0"+dt.getMinutes(): dt.getMinutes()),
        seconds: (dt.getSeconds() < 10 ? "0"+dt.getSeconds(): dt.getSeconds())
    }
    return timeObj;
}

export const getHour = () => {

}