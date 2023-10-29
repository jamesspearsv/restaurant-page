import "./nav.css";

export default function createNav() {
  const content = document.getElementById("content");

  const navList = document.createElement("ul");
  navList.id = "nav-list";
  const logo = document.createElement("h2");
  logo.textContent = "Penny's Diner";
  const nav = document.createElement("nav");
  nav.appendChild(logo);
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
