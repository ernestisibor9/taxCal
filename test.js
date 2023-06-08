const mySchool = document.querySelector("#school");
const count = document.querySelector(".count");

mySchool.addEventListener("click", function (e) {
  if (e.target.classList.contains("student1")) {
    count.innerHTML++;
    changeColor();
  } else if (e.target.classList.contains("student2")) {
    count.innerHTML--;
    changeColor();
  } else {
    count.innerHTML = 0;
    changeColor();
  }
});

function changeColor() {
  if (count.innerHTML > 0) {
    count.style.color = "green";
  } else if (count.innerHTML < 0) {
    count.style.color = "red";
  } else {
    count.style.color = "black";
  }
}

const count2 = document.querySelector("#count2");
const input = document.querySelector("#input");

input.addEventListener("keyup", function () {
  count2.innerHTML = input.value.length;
});
