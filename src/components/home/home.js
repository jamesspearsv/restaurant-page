export default function createHome() {
  // DOM queries and create needed elements
  const content = document.getElementById("content");
  const main = document.createElement("section");

  const p = document.createElement("p");
  p.textContent = "Home!";

  //   Append page content to main and main to #content
  main.appendChild(p);
  content.appendChild(main);
}
