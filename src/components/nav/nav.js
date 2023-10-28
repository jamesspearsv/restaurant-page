import "./nav.css";

export default function createNav() {
  const content = document.getElementById("content");

  const navList = document.createElement("ul");
  navList.id = "nav-list";
  const nav = document.createElement("nav");
  nav.appendChild(navList);

  ["Home", "Menu", "About"].forEach((item) => {
    const itemLink = document.createElement("a");
    itemLink.textContent = item;
    itemLink.classList.add("item-link");

    const navItem = document.createElement("li");
    navItem.classList.add("nav-item");

    navItem.appendChild(itemLink);
    navList.appendChild(navItem);
  });

  content.appendChild(nav);
}
