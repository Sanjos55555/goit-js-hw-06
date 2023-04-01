


const changeFzInput = document.getElementById("font-size-control");

const outputTextFz = document.getElementById("text");

changeFzInput.addEventListener("input", () => {
   const fontSize = changeFzInput.value + "px";
   outputTextFz.style.fontSize = fontSize;
});