const filterBtn = document.querySelector(".filterBtn");
const myCard = document.querySelectorAll(".card");

filterBtn.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    filterBtn.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
  }

  const filter = e.target.dataset.filter;
  myCard.forEach((image) => {
    if (filter === "all") {
      image.style.display = "block";
    } else if (image.classList.contains(filter)) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
});
