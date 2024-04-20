export const getTime = (minute) => {
    const hours = Math.floor(minute / 60);
    const days = Math.floor(hours / 24);
  
    const time = days || hours || minute;
    const unitIndex = [days, hours, minute].lastIndexOf(time);
    const timeUnit = ["days", "hours", "minutes"][unitIndex];
  
    return { time, timeUnit };
  };
 export function RoundOff(value) {
    return Number(value.toFixed(2));
  }