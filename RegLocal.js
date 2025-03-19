const submitBtn = document.getElementById("reg-sign-in");
const usernameInput = document.getElementById("Reg-Firstname");
const lastnameInput = document.getElementById("Reg-Lastname");
const emailInput = document.getElementById("Reg-email");
const passwordInput = document.getElementById("Reg-password");
const logSignIn = document.getElementById("log-sign-in");
const LogEmail = document.getElementById("Log-email");
const LogPassword = document.getElementById("Log-password");
const generatedNumber = document.querySelector(".generated-Number");
const ProfileVisite = document.querySelector(".ProfileVisite");
const ProfileinLogVisite = document.querySelector(".Profile-inLog-Visite");
const logError = document.querySelector(".log-error");

function generateRandomString(sumString) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "1234567890";
  let randomString = "";

  const firstCharIndex = Math.floor(Math.random() * letters.length);
  randomString += letters[firstCharIndex];

  for (let i = 1; i < sumString; i++) {
    const numberIndex = Math.floor(Math.random() * numbers.length);
    randomString += numbers[numberIndex];
  }
  return randomString;
}

submitBtn.addEventListener("click", function () {
  localStorage.setItem("Name", usernameInput.value);
  localStorage.setItem("LastName", lastnameInput.value);
  localStorage.setItem("Email", emailInput.value);
  localStorage.setItem("Password", passwordInput.value);
  localStorage.setItem("GenerateNumber", generateRandomString(8));
  localStorage.setItem("Visit", 0);
  localStorage.setItem("BuyBooks", 0);
  generatedNumber.textContent = generateRandomString(8);
});

logSignIn.addEventListener("click", function (event) {
  if (
    LogEmail.value == localStorage.getItem("Email") &&
    LogPassword.value == localStorage.getItem("Password")
  ) {
    localStorage.setItem("InLogUser", 1);
    localStorage.setItem("Visit", Number(localStorage.getItem("Visit")) + 1);
    logError.style.display = "none";
  } else {
    event.preventDefault();
    logError.style.display = "block";
  }
});

window.addEventListener("load", () => {
  generatedNumber.textContent = localStorage.getItem("GenerateNumber");
  ProfileVisite.textContent = localStorage.getItem("Visit");
  ProfileinLogVisite.textContent = localStorage.getItem("Visit");
});
