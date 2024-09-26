import "./reset.css";
import "./main.css";
import { form, getForecast,status } from "./forecast";
import { getDate } from "./date";
import { renderTodayCard, renderDaysCards } from "./renderCards";
import { convertBtn, convertT } from "./converter";

console.log("Hello from webpack");

getDate(".date");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  renderTodayCard(getForecast); 
  renderDaysCards(getForecast);   
});

convertBtn.addEventListener("click", () => {
  if (!status) {
    return;
  }
  convertT();
});

