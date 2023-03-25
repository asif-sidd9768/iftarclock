export const getTime = () => {
    const dt = new Date()
    const timeObj = {
        hours: ((dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours()) < 10? "0" + (dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours()) : dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours()),
        minutes: (dt.getMinutes() < 10 ? "0"+dt.getMinutes(): dt.getMinutes()),
        seconds: (dt.getSeconds() < 10 ? "0"+dt.getSeconds(): dt.getSeconds())
    }
    return timeObj;
}
const timingOfIftar = {
  "24/03/2023": {
      timing: [2023,2,24,18,55,0,0],
      rozaNumber: 1,
      todayTiming: "06:55",
      tomorrowTiming: "06:55"
  },
  "25/03/2023": {
      timing: [2023,2,25,18,55,0,0],
      rozaNumber: 2,
      todayTiming: "06:55",
      tomorrowTiming: "06:55"
  },
  "26/03/2023": {
      timing: [2023,2,26,18,55,0,0],
      rozaNumber: 3,
      todayTiming: "06:55",
      tomorrowTiming: "06:56"
  },
  "27/03/2023": {
      timing: [2023,2,27,18,56,0,0],
      rozaNumber: 4,
      todayTiming: "06:56",
      tomorrowTiming: "06:56"
  },
  "28/03/2023": {
      timing: [2023,2,28,18,56,0,0],
      rozaNumber: 5,
      todayTiming: "06:56",
      tomorrowTiming: "06:56"
  },
  "29/03/2023": {
      timing: [2023,2,29,18,56,0,0],
      rozaNumber: 6,
      todayTiming: "06:56",
      tomorrowTiming: "06:57"
  },
  "30/03/2023": {
      timing: [2023,2,30,18,57,0,0],
      rozaNumber: 7,
      todayTiming: "06:57",
      tomorrowTiming: "06:57"
  },
  "31/03/2023": {
      timing: [2023,2,31,18,57,0,0],
      rozaNumber: 8,
      todayTiming: "06:57",
      tomorrowTiming: "06:57"
  }
}

export const getTimeLeft = () => {
    //const tt = TIMINGS[d.toLocaleDateString()]
    // const tt = [2023,3,24,18,54,0,0]
    // console.log('tttt ==== ', tt.timing)
    const d = new Date();
    const options = { month: '2-digit', day: '2-digit', year: 'numeric' }
    const currentLocaleDate = d.toLocaleDateString('en-GB', options)
    const tt = timingOfIftar[currentLocaleDate]
    const timingsOfIftar = tt.timing
    var d2 = new Date(...timingsOfIftar);
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
    console.log('====================================');
    console.log(timeLeftObj);
    console.log('====================================');
    return timeLeftObj;
}