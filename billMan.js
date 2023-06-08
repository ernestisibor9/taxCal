const name = document.getElementById("name");
const idCard = document.getElementById("idCard");
const position = document.getElementById("position");
const basic = document.getElementById("basic");
const tax = document.getElementById("tax");
const myForm = document.getElementById("myForm");
const errorMsg = document.querySelector(".errorMsg");
const success = document.getElementById("success");
const h5 = document.querySelector("h5");

success.style.display = "none";

myForm.addEventListener("submit", formSub);

function formSub(e) {
  e.preventDefault();

  if (
    name.value === "" ||
    idCard.value === "" ||
    position.value === "" ||
    basic.value === "" ||
    tax.value === ""
  ) {
    errorMsg.innerHTML = "Please fill the form";
    errorMsg.style.color = "red";
    errorMsg.style.textAlign = "center";
    errorMsg.style.fontSize = "1rem";
    errorMsg.style.fontWeight = "bold";
    success.style.display = "none";
  } else {
    if (isNaN(basic.value)) {
      return (errorMsg.innerHTML = "This is not a valid number");
    }
    const totalTaxPay = basic.value * tax.value;

    h5.innerHTML = `<h4>Employee's Name: ${name.value}</h4>
                    <h4>Employee's ID : ${idCard.value}</h4>
                    <h4>Position : ${position.value}</h4>
                    <h4>Tax Paid : &#8358;  ${totalTaxPay.toLocaleString()}</h4>`;

    errorMsg.style.display = "none";
    success.style.display = "block";
  }
}
