
const form = document.querySelector(".login-form");

form.addEventListener("submit", (evt) => {
   evt.preventDefault();

   const email = form.elements.email.value;
   const password = form.elements.password.value;

   if (email === '' || password === '') {
      alert("wszystkie pola powinny zostać wypełnione.");
   } else {
      const formCurData = {
         email: email,
         password: password,
      };
      console.log(formCurData);
      form.reset();
   };
   
});