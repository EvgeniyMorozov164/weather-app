const getDate = (selector) => {
  const year = document.querySelector(selector);
  const date = new Date().getFullYear();
  
  year.textContent = date;
};

export { getDate };