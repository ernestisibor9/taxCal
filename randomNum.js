const randomNumber = document.getElementById("randomNumber");
const btn = document.getElementById("btn");

// Add an event to the button
btn.addEventListener("click", generateRandomNumber);

// Create a function to generate random numbers
function generateRandomNumber() {
  const genRand = Math.floor(Math.random() * 20);
  console.log(genRand);
  if (genRand < 10) {
    randomNumber.style.color = "red";
    randomNumber.style.fontSize = "5rem";
  } else {
    randomNumber.style.color = "green";
    randomNumber.style.fontSize = "5rem";
  }
  randomNumber.innerHTML = genRand;
}

const message = document.querySelector(".message");
const sendBtn = document.querySelector(".btn");

// Hide the message when the user first visits the page
message.style.display = "none";

// Add an event listener to the button
sendBtn.addEventListener("click", function () {
  if (message.classList.contains("message")) {
    message.style.display = "block";
    message.innerHTML = "This is another way of doing it";
    message.classList.remove("message");
    message.classList.add("review");
  }
});
