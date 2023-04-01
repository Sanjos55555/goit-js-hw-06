function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const color = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");
const body = document.querySelector("body");

changeColor.addEventListener("click", () => {
  const newRandColor = getRandomHexColor();
  body.style.backgroundColor = newRandColor;
  color.textContent = color;
} );