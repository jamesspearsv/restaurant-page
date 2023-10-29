import createSkeleton from "../../utilities/skelton";
import "./home.css";

export default function createHome() {
  // Create page skeleton from utilities
  const main = createSkeleton();

  main.classList.add("home-section");

  const p = document.createElement("h1");
  p.textContent = "Welcome to the Cafe!";

  //   Append page content to main and main to #content
  main.appendChild(p);
}
