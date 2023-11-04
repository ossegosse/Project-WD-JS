// Variables Overlay ID:s
const overlay = document.getElementById("overlay");
const planetName = document.querySelector("#planetName");
const planetLatin = document.querySelector("#planetLatin");
const planetText = document.querySelector("#planetText");
const planetSize = document.querySelector("#planetSize");
const planetLengthFromSun = document.querySelector("#planetLengthFromSun");
const planetMaxTemp = document.querySelector("#planetMaxTemp");
const planetMinTemp = document.querySelector("#planetMinTemp");

// Variables Planets
const planetColor = document.getElementById("planetColor");
const mercury = document.getElementById("mercury");
const venus = document.getElementById("venus");
const earth = document.getElementById("earth");
const mars = document.getElementById("mars");
const jupiter = document.getElementById("jupiter");
const saturn = document.getElementById("saturn");
const uranus = document.getElementById("uranus");
const neptune = document.getElementById("neptune");

// Variable API
const url = "https://majazocom.github.io/Data/solaris.json";

// function to fetch the api and call the function to render data
const fetchAndRenderData = (address, indexToTarget) => {
  fetch(address)
    .then((response) => response.json())
    .then((data) => {
      renderData(data[indexToTarget]);
    })
    .catch((error) => {
      console.log(error);
    });
};

// function to target data
const renderData = (data) => {
  const createName = document.createElement("h1");
  const createLatinName = document.createElement("h2");
  const createPlanetText = document.createElement("p");
  const createPlanetSize = document.createElement("p");
  const createPlanetLength = document.createElement("p");
  const createPlanetMaxTemp = document.createElement("p");
  const createPlanetMinTemp = document.createElement("p");

  createName.textContent = data.name.toUpperCase();
  createLatinName.textContent = data.latinName.toUpperCase();
  createPlanetText.textContent = data.desc;
  createPlanetSize.textContent = data.circumference + " KM";
  createPlanetLength.textContent = data.distance + " KM";
  createPlanetMaxTemp.textContent = data.temp.day + " C";
  createPlanetMinTemp.textContent = data.temp.night + " C";

  planetLatin.textContent = "";
  planetName.textContent = "";
  planetText.textContent = "";
  planetSize.textContent = "";
  planetLengthFromSun.textContent = "";
  planetMaxTemp.textContent = "";
  planetMinTemp.textContent = "";

  planetLatin.append(createLatinName);
  planetName.append(createName);
  planetText.append(createPlanetText);
  planetSize.append(createPlanetSize);
  planetLengthFromSun.append(createPlanetLength);
  planetMaxTemp.append(createPlanetMaxTemp);
  planetMinTemp.append(createPlanetMinTemp);
};

// Display overlay, change color of planet and call functions to render data for each planet with specific index number
mercury.addEventListener("click", function () {
  overlay.style.display = "block";
  planetColor.style.backgroundColor = "#888888";
  fetchAndRenderData(url, 1);
});

venus.addEventListener("click", function () {
  overlay.style.display = "block";
  planetColor.style.backgroundColor = "#E7CDCD";
  fetchAndRenderData(url, 2);
});

earth.addEventListener("click", function () {
  overlay.style.display = "block";
  planetColor.style.backgroundColor = "#428ED5";
  fetchAndRenderData(url, 3);
});

mars.addEventListener("click", function () {
  overlay.style.display = "block";
  planetColor.style.backgroundColor = "#EF5F5F";
  fetchAndRenderData(url, 4);
});

jupiter.addEventListener("click", function () {
  overlay.style.display = "block";
  planetColor.style.backgroundColor = "#E29468";
  fetchAndRenderData(url, 5);
});

saturn.addEventListener("click", function () {
  overlay.style.display = "block";
  planetColor.style.backgroundColor = "#C7AA72";
  fetchAndRenderData(url, 6);
});

uranus.addEventListener("click", function () {
  overlay.style.display = "block";
  planetColor.style.backgroundColor = "#C9D4F1";
  fetchAndRenderData(url, 7);
});

neptune.addEventListener("click", function () {
  overlay.style.display = "block";
  planetColor.style.backgroundColor = "#7A91A7";
  fetchAndRenderData(url, 8);
});

overlay.addEventListener("click", function () {
  overlay.style.display = "none";
});
