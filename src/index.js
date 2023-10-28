import "./index.css";
import createNav from "./components/nav/nav";
import createHome from "./components/home/home";
import createMenu from "./components/menu/menu";

const initSite = () => {
  createNav();
  createHome();
};

const rebuildPage = () => {
  // Remove current active tab from DOM
  document.querySelector("section").remove();
  //   Add new active to DOM
  createMenu();
};

document.addEventListener("DOMContentLoaded", () => {
  initSite();

  document.querySelectorAll(".item-link").forEach((item) => {
    const activePage = item.addEventListener("click", rebuildPage);
  });
});
