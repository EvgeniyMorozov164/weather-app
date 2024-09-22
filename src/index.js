import "./reset.css";
import "./main.css";
import { btn, getForecast } from "./forecast";
import { getDate } from "./date";

console.log("Hello from webpack");
getDate(".date");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  getForecast();    
});

