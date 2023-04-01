const textInput = document.getElementById("name-input");

const textOutPut = document.getElementById("name-output");


textInput.addEventListener("input", () => {
   const currentTextInput = textInput.value;
   textOutPut.textContent = currentTextInput || 'Anonymous';
});



