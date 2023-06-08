const headerOne = document.getElementById("header");
const myBtn = document.getElementById("btn");
const myBtn2 = document.getElementById("btn2");

// Hide the principal button
myBtn2.style.display = "none";

// Add Event listener to the button
myBtn.addEventListener("click", payOurSchFees);

// Create a function to pay our school fees
function payOurSchFees() {
  headerOne.innerHTML = "Our Mother Has Paid Our School Fees";
  myBtn.style.display = "none";
  myBtn2.style.display = "block";
  //   myBtn.innerHTML = "Paid Already";
  headerOne.style.display = "block";
}

// Add an event listener to the button2
myBtn2.addEventListener("click", function () {
  headerOne.textContent = "Our Principal drove us away from school.";
  headerOne.style.backgroundColor = "red";
  headerOne.style.color = "white";
  headerOne.style.padding = "20px";
});
