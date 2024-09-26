const convertBtn = document.querySelector(".converter");

const convertT = () => {
  const paras = document.querySelectorAll("p.temp");
  const paraFeel = document.querySelector("p.feel-temp");
  if (convertBtn.textContent.includes("Celsius".toUpperCase())) {
    paras.forEach(para => {
      let str = para.textContent;    
      let temp = getTemp(str);
      temp = convertToCel(temp);
      para.textContent = `${temp}C`;
    })    
    let str = paraFeel.textContent;
    let temp = getTemp(str);
    temp = convertToCel(temp);
    paraFeel.textContent = `Feels like ${temp}C`;
    convertBtn.textContent = "Convert to Fahrenheit".toUpperCase();
  } else {
    paras.forEach(para => {
      let str = para.textContent;    
      let temp = getTemp(str);
      temp = convertToFahr(temp);
      para.textContent = `${temp}F`;
    })    
    let str = paraFeel.textContent;
    let temp = getTemp(str);
    temp = convertToFahr(temp);
    paraFeel.textContent = `Feels like ${temp}F`;
    
    convertBtn.textContent = "Convert to Celsius".toUpperCase();
  }
  
}

const getTemp = (str) => {
  let temp = "";
  if (str[0] === "F") {
    temp = str.split("").splice(11).join("");
    return parseFloat(temp.replace((/\[A-z]/g), ""));
  }
  temp = parseFloat(str.replace((/\[A-z]/g), ""));  
  return temp;
}

const convertToCel = (num) => {
  let temp = (((num - 32) * 5) / 9).toFixed(1);
  temp = temp.toString().split("");

if (temp[temp.length - 1] === "0" && temp[temp.length - 2] === ".") {
  temp.pop();
  temp.pop();
}
temp = +temp.join("")
  return temp;
}

const convertToFahr = (num) => {
  let temp = (num * (9 / 5) + 32).toFixed(1);
  temp = temp.toString().split("");

if (temp[temp.length - 1] === "0" && temp[temp.length - 2] === ".") {
  temp.pop();
  temp.pop();
}
temp = +temp.join("")
  return temp;
}
export { convertBtn, convertT };
