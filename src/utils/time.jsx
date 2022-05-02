export const getTime = () => {
    const dt = new Date()
    const timeObj = {
        hours: ((dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours()) < 10? "0" + (dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours()) : dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours()),
        minutes: (dt.getMinutes() < 10 ? "0"+dt.getMinutes(): dt.getMinutes()),
        seconds: (dt.getSeconds() < 10 ? "0"+dt.getSeconds(): dt.getSeconds())
    }
    return timeObj;
}


export const getTimeLeft = () => {
    var d = new Date();
    var d2 = new Date(2022, 4, 2, 17, 37,40,0);
    var milSec = d2-d;
    var d3 = new Date(milSec);
    var nrHours = (Math.floor(d3/1000/60/60))%24;
    var nrMin = (Math.floor(d3/1000/60))%60;
    var nrSec = ((Math.floor(d3/1000))%60)+1;
    const timeLeftObj =  {
        hours: nrHours < 10 ? "0"+nrHours : nrHours,
        minutes: nrMin < 10 ? "0"+nrMin : nrMin,
        seconds: nrSec < 10 ? "0"+nrSec : nrSec
    }

    return timeLeftObj;
}