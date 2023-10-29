import createSkeleton from "../../utilities/skelton";
import "./home.css";

export default function createHome() {
  // Create page skeleton from utilities
  const main = createSkeleton();

  const hero = document.createElement("div");
  hero.classList.add("hero");
  main.appendChild(hero);

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to the Diner!";
  hero.appendChild(heading);

  const subtitle = document.createElement("p");
  subtitle.textContent = "The #1 spot to eat in WV!";
  hero.appendChild(subtitle);
}
