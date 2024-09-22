import "./reset.css";
import "./main.css";
import { btn, getForecast } from "./forecast";

console.log("Hello from webpack");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  getForecast();
});