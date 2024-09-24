import { getForecast } from "./forecast";

const content = document.querySelector(".content");

const renderTodayCard = async (fn) => {
  const data = await fn();
  console.log(data);
  const todayCard = {
    address: data.resolvedAddress,
    datetime: data.days[0].datetime,
    condition: data.currentConditions.conditions,
    icon: data.currentConditions.icon,
    feelslike: data.currentConditions.feelslike,
    humidity: data.currentConditions.humidity,
    pressure: data.currentConditions.pressure,
    windspeed: data.currentConditions.windspeed,
    visibility: data.days[0].visibility,
    temp: data.currentConditions.temp,
  };

  const todayCardHrs = {
    "04:00": data.days[0].hours[4],
    "08:00": data.days[0].hours[8],
    "12:00": data.days[0].hours[12],
    "16:00": data.days[0].hours[16],
    "20:00": data.days[0].hours[20],
    "23:00": data.days[0].hours[23],
  };  
  content.textContent = "";
  createCard(todayCard, todayCardHrs);
}

const createCard = (day, hrs) => { 
  // TODAY CARD
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card-today");
  content.appendChild(cardDiv);

  const h2 = document.createElement("h2");
  h2.classList.add("heading-2");
  h2.textContent = day.address;
  cardDiv.appendChild(h2);

  const h3 = document.createElement("h3");
  h3.classList.add("heading-3");
  h3.textContent = getDay(day.datetime, false);
  cardDiv.appendChild(h3);

  const curConDiv = document.createElement("div");
  curConDiv.classList.add("cur-con");
  cardDiv.appendChild(curConDiv);

  const curTempDiv = document.createElement("div");
  curTempDiv.classList.add("cur-temp");
  curConDiv.appendChild(curTempDiv);

  const div = document.createElement("div");
  curTempDiv.appendChild(div);

  const icon = document.createElement("img");
  icon.classList.add("cur-pic");
  icon.setAttribute("src", `./svg/weather/${day.icon}.svg`);
  icon.setAttribute("title", `${day.icon}`);
  icon.setAttribute("alt", `${day.icon}`);
  div.appendChild(icon);

  const tempP = document.createElement("p");
  tempP.textContent = day.temp;
  curTempDiv.appendChild(tempP);

  const curState = document.createElement("div");
  curState.classList.add("cur-state");
  curConDiv.appendChild(curState);

  const he3 = document.createElement("h3");
  he3.classList.add("heading-3");
  he3.textContent = "Now";
  curState.appendChild(he3)

  const curConP = document.createElement("p");
  curConP.textContent = day.condition;
  curState.appendChild(curConP);

  const feelsP = document.createElement("p");
  feelsP.textContent = `Feels like ${day.feelslike}`;
  curState.appendChild(feelsP);

  const otherCon = document.createElement("div");
  otherCon.classList.add("other-con");
  cardDiv.appendChild(otherCon);

  const humP = document.createElement("p");
  humP.textContent = `humidity ${day.humidity}%`;
  otherCon.appendChild(humP);

  const pressP = document.createElement("p");
  pressP.textContent = `pressure ${day.pressure} mm`;
  otherCon.appendChild(pressP);

  const windP = document.createElement("p");
  windP.textContent = `wind speed ${day.windspeed}`;
  otherCon.appendChild(windP);

  const visP = document.createElement("p");
  visP.textContent = `visibility ${day.visibility}`;
  otherCon.appendChild(visP);

  // TODAY HOURS

  const hrsDiv = document.createElement("div");
  hrsDiv.classList.add("hrs-con");
  cardDiv.appendChild(hrsDiv);

  createHrCard(hrs, hrsDiv);
}

const getDay = (date, bool) => {  
  let getDate = new Date(date).getDate();
  let weekDay = new Date(date).getDay();
  let month = new Date(date).getMonth();

  switch (weekDay) {
    case 0:
    weekDay = "Sun";
    break;
    case 1:
    weekDay = "Mon";
    break;
    case 2:
    weekDay = "Tue";
    break;
    case 3:
    weekDay = "Wed";
    break;
    case 4:
    weekDay = "Thu";
    break;
    case 5:
    weekDay = "Fri";
    break;
    case 6:
    weekDay = "Sat";
    break;
    default:
    weekDay = "-";
  }

  switch (month) {
    case 0:
    month = "Jan.";
    break;
    case 1:
    month = "Feb.";
    break;
    case 2:
    month = "Mar.";
    break;
    case 3:
    month = "Apr.";
    break;
    case 4:
    month = "May";
    break;
    case 5:
    month = "June";
    break;
    case 6:
    month = "July";
    break;
    case 7:
    month = "Aug.";
    break;
    case 8:
    month = "Sept.";
    break;
    case 9:
    month = "Oct";
    break;
    case 10:
    month = "Nov.";
    break;
    case 11:
    month = "Dec."
    break;
    default:
    month = "-";
  }
  
  if (bool === false) {
    return `${month} ${getDate}, ${weekDay}`;
  } else if (bool === true) {
    return `${getDate}, ${weekDay}`;
  }
  
}

const createHrCard = (obj, parent) => {
  let timeCount = 4;

  for (let key in obj) {
    
    const hrDiv = document.createElement("div");
    hrDiv.classList.add("hr-con");
    parent.appendChild(hrDiv);

    const timeP = document.createElement("p");
    timeP.textContent = timeCount < 10 ? `0${timeCount}:00` : `${timeCount}:00`;
    timeCount += 4;

    if (timeCount === 24) {
      timeCount = 23;
    }

    hrDiv.appendChild(timeP);

    const iconCon = document.createElement("img");
    iconCon.setAttribute("src", `./svg/weather/${obj[key].icon}.svg`);
    iconCon.setAttribute("alt", `${obj[key].icon}`);
    iconCon.setAttribute("title", `${obj[key].icon}`);
    iconCon.classList.add("hr-pic");
    hrDiv.appendChild(iconCon);

    const hrTemp = document.createElement("p");
    hrTemp.textContent = obj[key].temp;
    hrDiv.appendChild(hrTemp);
  }
}

const renderDaysCards = async (fn) =>{
  const data = await fn();
  
  const daysCards = [];

  for (let i = 1; i < data.days.length; i++) {
    daysCards.push(data.days[i]);
  }  
  createDaysCards(daysCards);
}

const createDaysCards = (days) => {
  const daysDiv = document.createElement("div");
  daysDiv.classList.add("cards-days");
  content.appendChild(daysDiv);
  createMiniDayCard(days, daysDiv);
}

const createMiniDayCard = (days, parent) => {
  
  for (let i = 0; i < days.length; i++) {
    const miniDayDiv = document.createElement("div");
    miniDayDiv.classList.add("card-mini-day");
    parent.appendChild(miniDayDiv);

    const dayP = document.createElement("p");
    dayP.textContent = getDay(`${days[i]["datetime"]}`, true);
    miniDayDiv.appendChild(dayP);

    const miniDayIcon = document.createElement("img");
    miniDayIcon.classList.add("mini-card-cond");
    miniDayIcon.setAttribute("src", `./svg/weather/${days[i]["icon"]}.svg`);
    miniDayIcon.setAttribute("alt", `${days[i]["icon"]}`);
    miniDayIcon.setAttribute("title", `${days[i]["icon"]}`);
    miniDayDiv.appendChild(miniDayIcon);

    const miniDayT = document.createElement("p");
    miniDayT.textContent = `${days[i]["temp"]}`;
    miniDayDiv.appendChild(miniDayT);
  }
}
export { renderTodayCard, renderDaysCards };