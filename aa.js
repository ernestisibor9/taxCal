const text = document.getElementById("text");
const buttons = document.querySelectorAll(".buttons");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.dataset.link);
    if (e.target.dataset.link === "home") {
      text.innerHTML = "This is the home page";
    } else if (e.target.dataset.link === "about") {
      text.innerHTML = "This is the about us page";
    } else {
      text.innerHTML = "This is the service page";
    }
  });
});

const search = document.getElementById("search");
const h5 = document.querySelectorAll("h5");

search.addEventListener("keyup", (e) => {
  //   console.log(e.target.value);
  const text = e.target.value.toLowerCase();

  h5.forEach((item) => {
    // console.log(item.innerHTML);
    if (item.innerHTML.toLowerCase().indexOf(text) !== -1) {
      item.parentElement.style.display = "block";
    } else {
      item.parentElement.style.display = "none";
    }
  });
});
