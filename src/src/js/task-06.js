
const inputMaxSymb = document.querySelector("[data-length='6']");
const inputValidation = document.getElementById("validation-input");


inputValidation.addEventListener("blur", () => {
   if (inputValidation.value.length === parseInt(inputMaxSymb.dataset.length)) {
     inputValidation.classList.remove("invalid");
     inputValidation.classList.add("valid");
   } else {
     inputValidation.classList.remove("valid");
     inputValidation.classList.add("invalid");
   }
 });