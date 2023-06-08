const players = document.querySelectorAll(".player");
const btn = document.querySelectorAll(".btn");
const search = document.getElementById("search");
const playerName = document.querySelectorAll("h5");

// for (let i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("click", function (e) {
//     const filtered = e.target.dataset.filter;
//     console.log(filtered);
//   });
// }

btn.forEach((myBtn) => {
  myBtn.addEventListener("click", function (e) {
    const filtered = e.target.dataset.filter;

    players.forEach((player) => {
      if (filtered === "all") {
        player.style.display = "block";
      } else if (player.classList.contains(filtered)) {
        player.style.display = "block";
      } else {
        player.style.display = "none";
      }
    });
  });
});

// Search
search.addEventListener("keyup", function (e) {
  const text = e.target.value.toLowerCase();

  playerName.forEach((myPlayerName) => {
    if (myPlayerName.innerHTML.toLowerCase().indexOf(text) !== -1) {
      myPlayerName.parentElement.style.display = "block";
    } else {
      myPlayerName.parentElement.style.display = "none";
    }
  });
});
