import "./nav.css";

export default function createNav() {
  const content = document.getElementById("content");

  const navList = document.createElement("ul");
  navList.id = "nav-list";
  const nav = document.createElement("nav");
  nav.appendChild(navList);

  ["Home", "Menu", "About"].forEach((item) => {
    const navItem = document.createElement("li");
    navItem.textContent = item;
    navItem.id = item.toLowerCase();
    navItem.classList.add("nav-item");

    navList.appendChild(navItem);
  });

  content.appendChild(nav);
}
