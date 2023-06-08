// const count = document.getElementById("count");
// const randomBtn = document.getElementById("randomBtn");

// randomBtn.addEventListener("click", function () {
//   generateRandomNumber();
// });

// Function to generate random number between 0-10
// function generateRandomNumber() {
//   const random = Math.floor(Math.random() * 10) + 1;
//   count.innerHTML = random;

//   if (count.innerHTML > 5) {
//     count.style.color = "red";
//   } else {
//     count.style.color = "blue";
//   }
//   console.log(random);
// }

const myBack = document.getElementById("back");
const colorText = document.getElementById("colorText");
const colors = [
  "red",
  "green",
  "blue",
  "purple",
  "brown",
  "orange",
  "yellow",
  "violent",
  "indigo",
];

myBack.addEventListener("click", function () {
  generateRandomNumber2();
});

// Generate random number
function generateRandomNumber2() {
  const randomNum = Math.floor(Math.random() * colors.length);
  colorText.textContent = colors[randomNum];
  document.body.style.backgroundColor = colors[randomNum];
  console.log(randomNum);
}
