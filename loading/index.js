const main = document.getElementById("main");
const container = document.getElementById("container");
const spin = document.getElementById("spin");

function calculatePosition(mousePos, offset, elementHalfSize, containerSize) {
  return Math.min(Math.max(mousePos - offset - elementHalfSize, 0), containerSize - elementHalfSize * 2);
}

main.addEventListener("mousemove", (event) => {
  spin.style.display = "block";
  const rect = container.getBoundingClientRect();
  let x = calculatePosition(event.clientX, rect.left, spin.offsetWidth / 2, container.offsetWidth) + spin.offsetWidth / 2;
  let y = calculatePosition(event.clientY, rect.top, spin.offsetHeight / 2, container.offsetHeight) + spin.offsetHeight / 2;;

  spin.style.left = `${x}px`;
  spin.style.top = `${y}px`;
});

container.addEventListener("mouseout", (event) => {
  spin.style.display = "none";
});