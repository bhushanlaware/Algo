function calendarMatching(calendar1, dailyBounds1, calendar2, dailyBounds2, meetingDuration) {
  // Write your code here.
  const freeTime = [];
  const blockedTime = [];

  const commonDailyBounds = [
    Math.max(getTime(dailyBounds1[0]), getTime(dailyBounds2[0])),
    Math.min(getTime(dailyBounds1[1]), getTime(dailyBounds2[1])),
  ];

  freeTime.push(commonDailyBounds.map(x => new Date(x)));

  for (cal of [...calendar1, ...calendar2]) {
    const startTime = getTime(cal[0]);
    const endTime = getTime(cal[1]);
    let added = false;
    for (let i = 0; i < blockedTime.length; i++) {
      if (merge(i, startTime, endTime)) {
        added = true;
        break;
      }
    }
    if (!added) {
      blockedTime.push([startTime, endTime])
    }
  }

  blockedTime.forEach((time, i) => {
    if (time[0] < commonDailyBounds[0]) {
      blockedTime[i][0] = start;
    }
    if (time[1] > commonDailyBounds[1]) {
      blockedTime[i][1] = end;
    }
  });

  for (bTime of blockedTime) {
    const start = bTime[0];
    const end = bTime[1];
    if (start < commonDailyBounds[0]) {
      freeTime.push([start, commonDailyBounds[0]]);
    }
    if (end > commonDailyBounds[1]) {
      freeTime.push([commonDailyBounds[1], end]);
    }
  }

  const canBlocked = []
  freeTime.forEach((time, index) => {
    if ((time[1] - time[0]) > 1000 * meetingDuration * 60)
      canBlocked.push([getTimeString(time[0]), getTimeString(time[1])]);
  })

  return canBlocked;

  function split(i, subStart, subEnd) {

    const start = freeTime[i][0];
    const end = freeTime[i][1];


    if (start === subStart && end === subEnd) {
      freeTime.splice(i, 1)
    }
    else if (start === subStart) {
      freeTime[i] = [subEnd, end];
    }
    else if (end === subEnd) {
      freeTime[i] = [start, subStart]
    }
    else {
      freeTime.splice(i, 1);
      freeTime.push([start, subStart]);
      freeTime.push([subEnd, end]);
    }
  }

  function isInRange(freeI, subStart, subEnd) {
    return freeTime[freeI][0] <= subStart && freeTime[freeI][1] >= subEnd
  }
  function merge(i, start, end) {
    const bStart = blockedTime[i][0];
    const bEnd = blockedTime[i][1];

    if (bStart <= start && bEnd >= end) {
      return true;
    }
    else if (bStart >= start && bEnd <= end) {
      return true;
    }
    else if (bStart <= start && bEnd >= start && bEnd <= end) {
      blockedTime[i][0] = end;
      return true;
    }
    else if (bStart >= start && bStart <= end && bEnd >= end) {
      blockedTime[i][1] = start;
      return true;
    }
    else if (bStart >= start && bStart <= end && bEnd >= end) {
      blockedTime.splice(i, 1);
      return true;
    }
    else {
      return false;
    }

  }

}

function getTime(str) {
  const year = '2013';
  const month = '04';
  const day = '18';
  const [hour, min] = str.split(':');
  return new Date(year, month, day, hour, min)
}

function getTimeString(date) {

  return (date.getHours() === 0 ? "00" : date.getHours()) +
    ":" + (date.getMinutes() == 0 ? "00" : date.getMinutes());
}

const calendar1 = [
  ['9:00', '10:30'],
  ['12:00', '13:00'],
  ['16:00', '18:00'],
];
const dailyBounds1 = ['9:00', '20:00'];

const calendar2 = [
  ['10:00', '11:30'],
  ['12:30', '14:30'],
  ['14:30', '15:00'],
  ['16:00', '17:00'],
];
const dailyBounds2 = ['10:00', '18:30'];
const meetingDuration = 30;
const expected = [
  ['11:30', '12:00'],
  ['15:00', '16:00'],
  ['18:00', '18:30'],
];
const result = calendarMatching(calendar1, dailyBounds1, calendar2, dailyBounds2, meetingDuration);
console.log(JSON.stringify(result));
