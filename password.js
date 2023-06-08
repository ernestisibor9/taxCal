myPassword = document.getElementById("password");
myEye = document.getElementById("eye");

myEye.addEventListener("click", () => {
  if (myEye.classList.contains("fa-eye")) {
    myPassword.setAttribute("type", "text");
    myEye.classList.remove("fa-eye");
    myEye.classList.add("fa-eye-slash");
  } else if (myEye.classList.contains("fa-eye-slash")) {
    myPassword.setAttribute("type", "password");
    myEye.classList.remove("fa-eye-slash");
    myEye.classList.add("fa-eye");
  }
});
