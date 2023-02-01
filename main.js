const container = document.getElementById("container");

container.addEventListener("click", (event) => {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.top = event.clientY + "px";
  circle.style.left = event.clientX + "px";
  container.appendChild(circle);
});