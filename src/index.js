import "./index.css";
import createNav from "./components/nav/nav";
import createHome from "./components/home/home";
import createMenu from "./components/menu/menu";
import createAbout from "./components/about/about";

const initSite = () => {
  createNav();
  document.getElementById("home").classList.add("active");
  createHome();
};

const rebuildPage = (newTab) => {
  // Remove current active tab from DOM
  document.querySelector("section").remove();
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.remove("active");
  });

  //   Add new active to DOM
  const tabs = {
    home: () => createHome(),
    menu: () => createMenu(),
    about: () => createAbout(),
  };
  document.getElementById(newTab).classList.add("active");
  tabs[newTab]();
};

document.addEventListener("DOMContentLoaded", () => {
  initSite();

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", (event) => {
      const newTab = event.target.id;
      rebuildPage(newTab);
    });
  });
});
