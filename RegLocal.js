let submitBtn = document.getElementById("reg-sign-in");

const usernameInput = document.getElementById("Reg-email");
const passwordInput = document.getElementById("Reg-password");

let users = JSON.parse(localStorage.getItem("usersArray"));
localStorage.setItem("usersArray", JSON.stringify([]));

console.log(users);

class NewUser {
  constructor(login, pass) {
    this.login = login;
    this.pass = pass;
  }
}
// let emailRegexp = /[A-Za-z0-9.@]{5,30}/g;
// let passRegexp = /[A-Za-z0-9.]{8,15}/g;

function registerNewUser() {
  // if (
  //   emailRegexp.test(usernameInput.value) &&
  //   passRegexp.test(passwordInput.value)
  // ) {
  users.push(
    new NewUser(toRot13(usernameInput.value), toRot13(passwordInput.value))
  );
  localStorage.setItem("usersArray", JSON.stringify(users));
}

submitBtn.onclick = registerNewUser;

const toRot13 = (message) => {
  const originalAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  return message.replace(
    /[a-z]/gi,
    (letter) => cipher[originalAlpha.indexOf(letter)]
  );
};

let form = document.getElementById("RegForm");
let formFileds = form.elements;
let submitBtn = document.getElementById("reg-sign-in");

submitBtn.addEventListener("click", clearStorage);

for (let i = 0; i < formFileds.length; i++) {
  formFileds[i].addEventListener("change", changeHandler);
}

function clearStorage() {
  localStorage.clear();
}

function changeHandler() {
  if (this.type !== "checkbox") {
    console.log(this.name, this.value);
    localStorage.setItem(this.name, this.value);
  } else {
    console.log(this.name, this.checked);
    localStorage.setItem(this.name, this.checked);
  }
}

function checkStorage() {
  for (let i = 0; i < formFileds.length; i++) {
    if (formFileds[i].type !== "submit") {
      if (formFileds[i].type === "checked") {
        formFileds[i].checked = localStorage.getItem(formFileds[i].name);
      } else {
        formFileds[i].value = localStorage.getItem(formFileds[i].name);
      }
    }
  }
  attachEvents();
}

function attachEvents() {
  for (let i = 0; i < formFileds.length; i++) {
    formFileds[i].addEventListener("change", changeHandler);
  }
}

checkStorage();

// let form = document.getElementById("RegForm");
// let formFileds = form.elements;
// let submitBtn = document.getElementById("reg-sign-in");

// for (let i = 0; i < formFileds.length; i++) {
//   formFileds[i].addEventListener("change", changeHandler);
// }

// function clearStorage() {
//   localStorage.clear();
// }

// function changeHandler() {
//   if (this.type !== "checkbox") {
//     console.log(this.name, this.value);
//     localStorage.setItem(this.name, this.value);
//   } else {
//     console.log(this.name, this.checked);
//     localStorage.setItem(this.name, this.checked);
//   }
// }

// function checkStorage() {
//   for (let i = 0; i < formFileds.length; i++) {
//     if (formFileds[i].type !== "submit") {
//       if (formFileds[i].type === "checked") {
//         formFileds[i].checked = localStorage.getItem(formFileds[i].name);
//       } else {
//         formFileds[i].value = localStorage.getItem(formFileds[i].name);
//       }
//     }
//   }
//   attachEvents();
// }

// function attachEvents() {
//   for (let i = 0; i < formFileds.length; i++) {
//     formFileds[i].addEventListener("change", changeHandler);
//   }
// }
// // сохраняем данные Local storage
// checkStorage();
submitBtn.addEventListener("click", function () {
  let Name = localStorage.getItem("username");
  let LastName = localStorage.getItem("lastname");
  let Email = localStorage.getItem("email");
  let Password = localStorage.getItem("password");
  console.log(Name);
  console.log(LastName);
  console.log(Email);
  console.log(Password);
});
