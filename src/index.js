import "./reset.css";
import "./main.css";
import { form, getForecast } from "./forecast";
import { getDate } from "./date";
import { renderTodayCard, renderDaysCards } from "./renderCards";

console.log("Hello from webpack");

getDate(".date");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  renderTodayCard(getForecast); 
  renderDaysCards(getForecast);   
});

