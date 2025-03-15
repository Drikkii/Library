const submitBtn = document.getElementById("reg-sign-in");
const usernameInput = document.getElementById("Reg-Firstname");
const lastnameInput = document.getElementById("Reg-Lastname");
const emailInput = document.getElementById("Reg-email");
const passwordInput = document.getElementById("Reg-password");
const logSignIn = document.getElementById("log-sign-in");
const LogEmail = document.getElementById("Log-email");
const LogPassword = document.getElementById("Log-password");

submitBtn.addEventListener("click", function () {
  localStorage.setItem("Name", usernameInput.value);
  localStorage.setItem("LastName", lastnameInput.value);
  localStorage.setItem("Email", emailInput.value);
  localStorage.setItem("Password", passwordInput.value);
});

logSignIn.addEventListener("click", function () {
  if (
    (LogEmail.value == localStorage.getItem("Email"),
    LogPassword.value == localStorage.getItem("Password"))
  ) {
    localStorage.setItem("InLogUser", 1);
  }
});
