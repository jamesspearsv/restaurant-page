import createSkeleton from "../../utilities/skelton";
import "./menu.css";

const menu = {
  cheeseburger: {
    name: "Cheeseburger",
    description: "A classic burger with cheese. Comes with fries and a drink.",
    price: "$12",
  },
  chickenSandwich: {
    name: "Chicken Sandwich",
    description:
      "A fried chicken sandwich with pickles and Penny's special sauce. Comes with fries and a drink.",
    price: "$12",
  },
  hotdog: {
    name: "Hot Dog Meal",
    description: "All beef hot dog with ketchup. Comes with fries and a drink.",
    price: "$8",
  },
  bbqSandwith: {
    name: "Penny's BBQ Sandwich",
    description:
      "Penny's classic BBQ sanwich with pulled pork, fried onions, and a classic BBQ sauce. Comes with fries and a drink.",
    price: "$15",
  },
};

const buildMenuItem = (item) => {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const title = document.createElement("h3");
  title.classList.add("item-title");
  title.textContent = menu[item].name;

  const description = document.createElement("p");
  description.classList.add("item-description");
  description.textContent = menu[item].description;

  const price = document.createElement("p");
  price.classList.add("item-price");
  price.textContent = menu[item].price;

  const span = document.createElement("span");
  span.classList.add("underline");

  menuItem.appendChild(title);
  menuItem.appendChild(description);
  menuItem.appendChild(span);
  menuItem.appendChild(price);

  return menuItem;
};

export default function createMenu() {
  // Create page skeleton from utilities
  const main = createSkeleton();
  main.id = "menu-main";
  const heading = document.createElement("h1");
  heading.id = "menu-heading";
  heading.textContent = "Menu";
  main.appendChild(heading);
  // Create page content
  const menuContainer = document.createElement("div");
  menuContainer.id = "menu-container";
  main.appendChild(menuContainer);

  for (const item in menu) {
    const menuItem = buildMenuItem(item);
    menuContainer.appendChild(menuItem);
  }
}
