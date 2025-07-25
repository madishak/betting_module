import TableRow from "./TableRow.js";

let store = {
  items: [],
};

const openTable = (evt, tabItem) => {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("ratings");

  tablinks = document.querySelectorAll(".ratings__tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(
      " ratings__tablink__active",
      ""
    );
  }

  for (i = 0; i < tabcontent.length; i++) {
    if (i === tabItem) {
      getServeData(tabcontent[i], evt.target.dataset);
      tabcontent[i].style.display = "table";
    } else {
      tabcontent[i].style.display = "none";
    }
  }
  evt.currentTarget.className += " ratings__tablink__active";
};

const getServeData = (node, params = {}) => {
  let paramsArr = [];
  for (let [key, value] of Object.entries(params)) {
    paramsArr = [...paramsArr, `${key}=${value}`];
  }

  return fetch(`http://localhost:3000/?${paramsArr.join("&")}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      store.items = [...data];
      TableRow(node, store.items);
      console.log(store.items);
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error);
    });
};

const ratingsDefaultBox = document.querySelector(".ratings__default");
window.addEventListener("load", () => getServeData(ratingsDefaultBox));

const ratingsTablink = document.querySelectorAll(".ratings__tablink");
ratingsTablink.forEach((el, i) =>
  el.addEventListener("click", (evt) => openTable(evt, i))
);

const defaultTab = document.getElementById("defaultTab");
defaultTab.click();
