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
      tabcontent[i].style.display = "table";
    } else {
      tabcontent[i].style.display = "none";
    }
  }
  evt.currentTarget.className += " ratings__tablink__active";
};


const ratingsTablink = document.querySelectorAll(".ratings__tablink");
ratingsTablink.forEach((el, i) =>
  el.addEventListener("click", (evt) => openTable(evt, i))
);

const defaultTab = document.getElementById("defaultTab");
defaultTab.click();
