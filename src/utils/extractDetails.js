import timetable from "./timetable"

const dt = (new Date()).toLocaleDateString()
console.log(timetable[String(dt)])
const todayDetail = timetable[String(dt)]
export const iftarTime = todayDetail["iftar-time"]
export const hijriDate = todayDetail["hijri-date"]
// export const tommTime = timetable[`${dt.getDate() + 1}/${dt.getMonth() + 1}/${dt.getFullYear()}`]["iftar-time"]