import timetable from "./timetable"

const dt = new Date()
console.log(timetable[String(dt.toLocaleDateString())])
const todayDetail = timetable[String(dt.toLocaleDateString())]
export const iftarTime = todayDetail["iftar-time"]
export const hijriDate = todayDetail["hijri-date"]
export const tommTime = timetable[`${dt.getDate() + 1}/${dt.getMonth() + 1}/${dt.getFullYear()}`]["iftar-time"]