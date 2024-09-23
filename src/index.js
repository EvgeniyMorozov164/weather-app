import "./reset.css";
import "./main.css";
import { form, getForecast } from "./forecast";
import { getDate } from "./date";

console.log("Hello from webpack");
getDate(".date");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  getForecast();    
});

