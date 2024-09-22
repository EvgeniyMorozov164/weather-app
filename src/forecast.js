const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

const getForecast = async () => {
  const API_KEY = "RGKYDRSS7BK7AE6DXH4NEADXJ";
  const location = input.value || "Moscow";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`;

  const request = await fetch(url);
  const data = await request.json();

  console.log(data);
  return data;
}

export { btn, getForecast};