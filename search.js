// const btn = document.querySelectorAll(".btn");
// const text = document.querySelector(".text");

// btn.forEach((btns) => {
//   btns.addEventListener("click", (e) => {
//     const filter = e.target.dataset.link;
//     console.log(filter);
//     if (filter === "home") {
//       text.textContent = "This is the home page";
//     }
//   });
// });

// const storeProducts = document.querySelectorAll(".store-product ");

// const filter = e.target.dataset.filter;

// storeProducts.forEach((product) => {
//   if (filter === "all") {
//     product.style.display = "block";
//   } else if (product.classList.contains(filter)) {
//     product.style.display = "block";
//   } else {
//     product.style.display = "none";
//   }
// });

// const search = document.getElementById("search");
// const productName = document.querySelectorAll("h2");

// search.addEventListener("keyup", filterProducts);

// function filterProducts(e) {
//   const text = e.target.value.toLowerCase();

//   productName.forEach((product) => {
//     const item = product.textContent;

//     if (item.toLowerCase().indexOf(text) !== -1) {
//       product.parentElement.parentElement.style.display = "block";
//     } else {
//       product.parentElement.parentElement.style.display = "none";
//     }
//   });
// }

const gd = document.querySelector(".gd");

gd.textContent = "Welcome to Nigeria 1999";

const search = document.getElementById("search");
const li = document.querySelectorAll("li");

search.addEventListener("keyup", searchKey);

function searchKey(e) {
  const inputVal = search.value;

  for (let i = 0; i < li.length; i++) {
    if (li[i].innerHTML.toLowerCase().includes(inputVal.toLowerCase())) {
      li[i].style.display = "block";
    } else {
      li[i].style.display = "none";
    }
  }
}
