const ronaldinhoPhoto = document.querySelector(".ronaldinho");
const benzemaPhoto = document.querySelector(".benzema");
const ronaldoPhoto = document.querySelector(".ronaldo");
const messiPhoto = document.querySelector(".messi");
const neymarPhoto = document.querySelector(".neymar");
const henryPhoto = document.querySelector(".henry");
const ernestPhoto = document.querySelector(".ernest");

const ronaldinhoBtn = document.querySelector(".ronaldinhoBtn");
const benzemaBtn = document.querySelector(".benzemaBtn");
const ronaldoBtn = document.querySelector(".ronaldoBtn");
const messiBtn = document.querySelector(".messiBtn");
const neymarBtn = document.querySelector(".neymarBtn");
const henryBtn = document.querySelector(".henryBtn");

// Hide the image at first load
ronaldinhoPhoto.style.display = "none";
benzemaPhoto.style.display = "none";
ronaldoPhoto.style.display = "none";
messiPhoto.style.display = "none";
neymarPhoto.style.display = "none";
henryPhoto.style.display = "none";

// Add an event listener for each buttons
ronaldinhoBtn.addEventListener("click", () => {
  ronaldinhoPhoto.style.display = "block";
  ernestPhoto.style.display = "none";
  henryPhoto.style.display = "none";
});

henryBtn.addEventListener("click", () => {
  henryPhoto.style.display = "block";
  ernestPhoto.style.display = "none";
  ronaldinhoPhoto.style.display = "none";
});
