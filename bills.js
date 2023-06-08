const calculations = document.getElementById("calculations");
const gross = document.getElementById("gross");
const company = document.getElementById("company");
const rate = document.getElementById("rate");
const error = document.querySelector(".error");
const pay = document.querySelector(".pay");

const handleMsg = () => {
  setTimeout(() => {
    error.style.display = "none";
  }, 4000);
};

calculations.addEventListener("click", cal);

function cal(e) {
  e.preventDefault();

  const myGross = gross.value;
  const myCompany = company.value;
  const myRate = rate.value;

  if (myGross === "" || myCompany === "" || myRate === "") {
    error.innerHTML = "Please fill the required fields";
    error.style.display = "block";
    handleMsg();
  } else if (isNaN(myGross)) {
    error.innerHTML = "Please enter a valid number";
    error.style.display = "block";
    handleMsg();
  } else {
    const taxPayable = myGross * myRate;
    pay.innerHTML = `Payable tax is = &#8358;${Math.ceil(taxPayable)}`;
  }
}
