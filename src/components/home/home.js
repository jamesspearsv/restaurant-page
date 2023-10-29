import createSkeleton from "../../utilities/skelton";
import "./home.css";

export default function createHome() {
  // Create page skeleton from utilities
  const main = createSkeleton();
  main.classList.add("home-section");

  const hero = document.createElement("div");
  hero.classList.add("hero");
  main.appendChild(hero);

  const heroContent = document.createElement("div");
  heroContent.classList.add("hero-content");
  hero.appendChild(heroContent);

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to the Diner!";
  heroContent.appendChild(heading);

  const subtitle = document.createElement("p");
  subtitle.textContent = "The #1 spot to eat in WV!";
  heroContent.appendChild(subtitle);
}
