// a clock which shows the live time - HH:MM::SS (Eg. 13:45:23)

const startTime = new Date().toTimeString();

const startHour = Number(startTime.substring(0, 2));
const startMin = Number(startTime.substring(3, 5));
const startSec = Number(startTime.substring(6, 8));

function startClock(hour, min, sec) {
  let ampm;
  setInterval(() => {
    if (sec === 60) {
      sec = 0;
      min++;
    }

    if (min === 60) {
      min = 0;
      hour++;
    }

    if (hour === 24) {
      hour = 0;
    }

    if (hour >= 12) {
      ampm = "PM";
    } else {
      ampm = "AM";
    }

    // 12 Hr Conversion

    let convertedHr = hour % 12 || 12;

    console.clear();
    console.log(
      `${String(hour).padStart(2, "0")}:${String(min).padStart(
        2,
        "0"
      )}:${String(sec).padStart(2, "0")}`
    );
    console.log(
      `${String(convertedHr).padStart(2, "0")}:${String(min).padStart(
        2,
        "0"
      )}:${String(sec).padStart(2, "0") + " " + ampm}`
    );
    sec++;
  }, 1000);
}

startClock(startHour, startMin, startSec);
