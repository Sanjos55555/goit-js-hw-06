
// 1 zadanie

const numberOfCategories = document.querySelector("#categories");

const categoriesItem = numberOfCategories.querySelectorAll(".item");

const categiresAmount = categoriesItem.length;

console.log(console.log(`Liczba kategorii to: ${categiresAmount}`));

// 2 zadanie


categoriesItem.forEach((item) => {
   const header = item.querySelector("h2").textContent;
   const listEl = item.querySelectorAll("li");
   const itemsAmount = listEl.length;
   console.log(`Category: ${header} Elements: ${itemsAmount}`);
});



