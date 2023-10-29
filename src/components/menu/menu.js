import createSkeleton from "../../utilities/skelton";

export default function createMenu() {
  // Create page skeleton from utilities
  const main = createSkeleton();

  const p = document.createElement("p");
  p.textContent = "Menu!";

  //   Append page content to main and main to #content
  main.appendChild(p);
}
