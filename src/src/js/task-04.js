let counter = 0;

const val = document.getElementById("value");

const addNum = document.querySelector('[data-action="increment"]');

const remNum = document.querySelector('[data-action="decrement"]');

addNum.addEventListener("click", () => {
   counter++;
   val.textContent = counter;
});

remNum.addEventListener("click", () => {
   counter--;
   val.textContent = counter;
});

