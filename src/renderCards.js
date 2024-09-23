import { getForecast } from "./forecast";

const content = document.querySelector(".content");

const renderTodayCard = async (fn) => {
  const data = await fn();
  
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

  console.log(todayCard);
  console.log(todayCardHrs);
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
  h3.textContent = getDay(day.datetime);
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
}

const getDay = (date) => {
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

  return `${month} ${getDate}, ${weekDay}`;
}
export { renderTodayCard };