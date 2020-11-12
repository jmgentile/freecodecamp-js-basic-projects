const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

// Countdown expired + 10 days
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 12, 30, 0);

// Countdown expired + deadline message
// let futureDate = new Date(2020,11,24,12,30,0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();

let weekday = futureDate.getDay();
weekday = weekdays[weekday];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

// future time in ms
const futureTime = futureDate.getTime();

getRemainingTime = () => {
  const today = new Date().getTime();
  const t = futureTime - today;
  
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr
  const oneDayMs = 24*60*60*1000;
  const oneHourMs = 60*60*1000;
  const oneMinuteMs = 60*1000;
  
  // calculate all values
  let days = Math.floor(t / oneDayMs);
  let hours = Math.floor((t % oneDayMs)/oneHourMs);
  let minutes = Math.floor((t % oneHourMs) / oneMinuteMs);
  let seconds = Math.floor((t % oneMinuteMs) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];

  format = (item) => {
    if(item < 10) {
      return (item = `0${item}`);
    }
    return item;
  };
  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
  if(t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">This giveaway has expired.</h4>`;
  }
};

// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();