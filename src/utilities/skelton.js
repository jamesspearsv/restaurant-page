// A utility funciton to create each tab 'skeleton'

export default function createSkeleton() {
  const content = document.getElementById("content");
  const main = document.createElement("main");
  content.appendChild(main);

  return main;
}
