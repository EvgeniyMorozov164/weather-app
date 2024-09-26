const input = document.querySelector(".input");
const form = document.querySelector(".form");

const getForecast = async () => {
  const API_KEY = "RGKYDRSS7BK7AE6DXH4NEADXJ";
  const location = input.value;
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`;
  const request = await fetch(url);  
  try {
    
    if (request.status === 400) {      
      throw new Error("BAD_REQUEST- The format of the API is incorrect or an invalid parameter or combination of parameters was supplied");      r
    } else if (request.status === 401) {
      throw new Error("401 UNAUTHORIZED – There is a problem with the API key");
    } else if (request.status === 404) {
      throw new Error("404 NOT_FOUND – The request cannot be matched to any valid API request endpoint structure.");
    } else if (request.status === 429) {
      throw new Error("429 TOO_MANY_REQUESTS – The account has exceeded their assigned limits. ");
    } else if (request.status === 500) {
      throw new Error("500 INTERNAL_SERVER_ERROR – A general error has occurred processing the request.");
    } else {
      
      const data = await request.json(); 
    return data;
    }
    
  } catch (error) {
    document.querySelector(".content").textContent = error.message;     
  }
}

export { form, getForecast };