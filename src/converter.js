const convertBtn = document.querySelector(".converter");

const convertT = () => {
  const paras = document.querySelectorAll("p.temp");
  const paraFeel = document.querySelector("p.feel-temp");
  if (convertBtn.textContent.includes("Celsius")) {
    paras.forEach(para => {
      let str = para.textContent;    
      let temp = getTemp(str);
      temp = convertToCel(temp);
      para.textContent = `${temp}C`;
    })    
    paraFeel.textContent = `Feels like ${document.querySelector("div.cur-temp").lastChild.textContent}`;
    convertBtn.textContent = "Convert to Fahrenheit";
  } else {
    paras.forEach(para => {
      let str = para.textContent;    
      let temp = getTemp(str);
      temp = convertToFahr(temp);
      para.textContent = `${temp}F`;
    })    
    paraFeel.textContent = `Feels like ${document.querySelector("div.cur-temp").lastChild.textContent}`;
    
    convertBtn.textContent = "Convert to Celsius";
  }
  
}

const getTemp = (str) => {
  let temp = parseFloat(str.replace((/\[A-z]/g), ""));  
  return temp;
}

const convertToCel = (num) => {
  const cel = (((num - 32) * 5) / 9).toFixed(1);
 
  return cel;
}

const convertToFahr = (num) => {
  const cel = (num * (9 / 5) + 32).toFixed(1);
  
  return cel;
}
export { convertBtn, convertT };
