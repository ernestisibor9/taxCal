// const myNewElement = document.createElement("div");
// myNewElement.id = "shirt";
// console.log(myNewElement);

// const myHeader = document.createElement("h1");
// const myHeaderBody = document.createTextNode("Nollywood movies");
// myHeader.appendChild(myHeaderBody);
// document.body.appendChild(myHeader);

// const a = document.createElement("a");
// const myChild = document.createTextNode("facebook");
// a.appendChild(myChild);
// document.body.appendChild(a);
// a.href = "https://www.facebook.com";
// console.log(a);

// const myA = document.createElement("a");
// myA.textContent = "Twitter";
// myA.classList.add("elon");
// myA.classList.remove("elon");
// myA.classList.add("musk");
// console.log(myA);
// document.body.appendChild(myA);

// const myRemove = document.querySelector("#rem");
// myRemove.remove();

const sub = document.createElement("div");
sub.setAttribute("class", "lagos");
sub.setAttribute("id", "ikeja");
sub.removeAttribute("id");
sub.textContent = "<h4>Lagos is the centre of excellence</h4>";
document.body.appendChild(sub);
console.log(sub);
