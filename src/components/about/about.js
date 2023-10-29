import createSkeleton from "../../utilities/skelton";

export default function createAbout() {
  // Create page skeleton from utilities
  const main = createSkeleton();

  const p = document.createElement("p");
  p.textContent = "About!";

  //   Append page content to main and main to #content
  main.appendChild(p);
}
