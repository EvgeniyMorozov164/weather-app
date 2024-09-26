const loaderContainer = document.querySelector(".loader-container");

const loader = (bool) => {
  if (bool) {
    loaderContainer.classList.remove("hidden");
  } else {
    loaderContainer.classList.add("hidden");
  }  
}

export { loader };