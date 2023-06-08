const count = document.querySelector(".count");
const studentOne = document.querySelector(".student1");
const studentTwo = document.querySelector(".student2");
const studentThree = document.querySelector(".student3");

studentOne.addEventListener("click", function () {
  count.innerHTML++;
  changeColor();
});

studentTwo.addEventListener("click", function () {
  count.innerHTML--;
  changeColor();
});

studentThree.addEventListener("click", function () {
  count.innerHTML = 0;
  changeColor();
});

function changeColor() {
  if (count.innerHTML > 0) {
    count.style.color = "white";
    count.style.backgroundColor = "green";
  } else if (count.innerHTML < 0) {
    count.style.color = "white";
    count.style.backgroundColor = "red";
  } else {
    count.style.color = "white";
    count.style.backgroundColor = "black";
  }
}
