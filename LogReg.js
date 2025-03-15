let Logo = document.querySelector(".icon-profile"); // иконка log rega
let DropMenu = document.querySelector(".dropMenu"); //само меню log reg
let dropMenuProfile = document.querySelector(".dropMenuProfile"); //само меню log reg profile
let logIn = document.querySelector(".loginjs"); //кнопка log in(в рег меню)
let logReg = document.querySelector(".logregjs"); //кнопка регистрации(в рег меню)
let RegMenu = document.querySelector(".register"); // окно регистрации
let Regbackground = document.querySelector(".backgrey"); //серый фон в регестрации
let closeBtn = document.querySelector(".close-btn"); // кнопка закрития окна регистрации
let SignUpCard = document.querySelector(".sing-up");
let LoginReg = document.querySelector(".log-inreg");
let MyProfileBntLog = document.querySelector(".MyProfileBntLog");
let ourCards = document.querySelector(".our-cards");
let ourCardsInLog = document.querySelector(".our-cards-inLog");

document.querySelector(".LogIn").addEventListener("submit", function (event) {
  event.preventDefault();
  window.location.href = window.location.pathname;
});

window.addEventListener("load", () => {
  if (localStorage.getItem("InLogUser") == 1) {
    ourCards.style.display = "none";
    ourCardsInLog.style.display = "block";
  } else {
    ourCards.style.display = "block";
    ourCardsInLog.style.display = "none";
  }
});

MyProfileBntLog.addEventListener("click", function () {
  localStorage.setItem("InLogUser", 0);
  location.reload();
});

function DropLogo() {
  if (localStorage.getItem("InLogUser") == 1) {
    if (dropMenuProfile.classList.contains("hidden")) {
      dropMenuProfile.classList.remove("hidden");
      setTimeout(function () {
        dropMenuProfile.classList.remove("visual");
      }, 100);
    } else {
      setTimeout(function () {
        dropMenuProfile.classList.add("hidden");
      }, 300);

      dropMenuProfile.classList.add("visual");
    }
  } else if (DropMenu.classList.contains("hidden")) {
    DropMenu.classList.remove("hidden");
    setTimeout(function () {
      DropMenu.classList.remove("visual");
    }, 100);
  } else {
    setTimeout(function () {
      DropMenu.classList.add("hidden");
    }, 300);

    DropMenu.classList.add("visual");
  }
}

Logo.addEventListener("click", DropLogo);

document.addEventListener("click", (e) => {
  let target = e.target;
  let its_menu = target == Logo || Logo.contains(target);
  let its_menuBtn = target == DropMenu;
  let menu_is_active = !Logo.classList.contains("hidden");

  if (!its_menu && !its_menuBtn && menu_is_active) {
    DropMenu.classList.add("visual");
    setTimeout(function () {
      DropMenu.classList.add("hidden");
    }, 200);
  }
});

//Появление , исчезновение Reg меню

logReg.addEventListener("click", function () {
  if (Regbackground.classList.contains("hidden")) {
    Regbackground.classList.remove("hidden");
    RegMenu.classList.remove("hidden");
    setTimeout(function () {
      Regbackground.classList.remove("visual");
    }, 500);
    setTimeout(function () {
      RegMenu.classList.remove("visual");
    }, 100);
  }
});

Regbackground.addEventListener("click", function () {
  if (!Regbackground.classList.contains("hidden")) {
    Regbackground.classList.add("visual");
    RegMenu.classList.add("visual");
    buybook.classList.add("visual");
    setTimeout(function () {
      Regbackground.classList.add("hidden");
    }, 300);
    setTimeout(function () {
      RegMenu.classList.add("hidden");
      buybook.classList.add("hidden");
    }, 300);
  }
});

closeBtn.addEventListener("click", function () {
  if (!Regbackground.classList.contains("hidden")) {
    Regbackground.classList.add("visual");
    RegMenu.classList.add("visual");
    setTimeout(function () {
      Regbackground.classList.add("hidden");
    }, 300);
    setTimeout(function () {
      RegMenu.classList.add("hidden");
    }, 300);
  }
});

LoginReg.addEventListener("click", function () {
  if (!RegMenu.classList.contains("hidden")) {
    RegMenu.classList.add("visual");
    setTimeout(function () {
      RegMenu.classList.add("hidden");
    }, 300);

    setTimeout(function () {
      LogMenu.classList.remove("hidden");
    }, 300);
    setTimeout(function () {
      LogMenu.classList.remove("visual");
    }, 320);
  }
});

// Меняем Крестики на цвет (сосед) в меню регистрации!
let One = document.getElementById("crossTwo");
document.getElementById("crossOne").addEventListener("mouseover", function () {
  One.style.background = "#bb945f";
  this.addEventListener("mouseout", function () {
    One.style.background = "";
  });
});
let Two = document.getElementById("crossOne");
document.getElementById("crossTwo").addEventListener("mouseover", function () {
  Two.style.background = "#bb945f";
  this.addEventListener("mouseout", function () {
    Two.style.background = "";
  });
});

// Кнопка Sign up в Digital card - вызов регистарции
SignUpCard.addEventListener("click", function () {
  if (Regbackground.classList.contains("hidden")) {
    Regbackground.classList.remove("hidden");
    RegMenu.classList.remove("hidden");
    setTimeout(function () {
      Regbackground.classList.remove("visual");
    }, 500);
    setTimeout(function () {
      RegMenu.classList.remove("visual");
    }, 100);
  }
});

//валидность полей и ограничения

//email

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const input = document.getElementById("Reg-email");
const inputLogin = document.getElementById("Log-email");

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}

function onInput() {
  if (isEmailValid(input.value)) {
    input.style.borderColor = "green";
  } else {
    input.style.borderColor = "red";
  }
}
function onInputlog() {
  if (isEmailValid(inputLogin.value)) {
    inputLogin.style.borderColor = "green";
  } else {
    inputLogin.style.borderColor = "red";
  }
}

input.addEventListener("input", onInput);
inputLogin.addEventListener("input", onInputlog);

//Проверка валидность пароля!
const inputPass = document.getElementById("Reg-password");

inputPass.addEventListener("keyup", function (evt) {
  let length = this.value.length;
  if (length < 8) inputPass.style.borderColor = "red";
  else if (length >= 8) inputPass.style.borderColor = "green";
});
//Проверка Имя!
const inputName = document.getElementById("Reg-Firstname");

inputName.addEventListener("keyup", function (evt) {
  let length = this.value.length;
  if (length <= 0) inputName.style.borderColor = "red";
  else if (length >= 1) inputName.style.borderColor = "green";
});
//Проверка last name!
const inputLastname = document.getElementById("Reg-Lastname");

inputLastname.addEventListener("keyup", function (evt) {
  let length = this.value.length;
  if (length <= 0) inputLastname.style.borderColor = "red";
  else if (length >= 1) inputLastname.style.borderColor = "green";
});

// Log menu все настройки

let LogMenu = document.querySelector(".LogIn");
let CloseLog = document.querySelector(".close-btn-log");
let regInLog = document.querySelector(".reg-inreg");
let DigLog = document.querySelector(".log-in");
let buyButton = document.querySelectorAll(".active-button");
let buybook = document.querySelector(".buybook");

let CardCrossOne = document.getElementById("crossTwo-MyBuycard");
document
  .getElementById("crossOne-MyBuycard")
  .addEventListener("mouseover", function () {
    CardCrossOne.style.background = "#bb945f";
    this.addEventListener("mouseout", function () {
      CardCrossOne.style.background = "";
    });
  });
let CardCrossTwo = document.getElementById("crossOne-MyBuycard");
document
  .getElementById("crossTwo-MyBuycard")
  .addEventListener("mouseover", function () {
    CardCrossTwo.style.background = "#bb945f";
    this.addEventListener("mouseout", function () {
      CardCrossTwo.style.background = "";
    });
  });
// ---------------

// cross close
CardCrossOne.addEventListener("click", function () {
  if (!buybook.classList.contains("hidden")) {
    buybook.classList.add("visual");
    Regbackground.classList.add("visual");

    setTimeout(function () {
      buybook.classList.add("hidden");
      Regbackground.classList.add("hidden");
    }, 200);
  }
});
CardCrossTwo.addEventListener("click", function () {
  if (!buybook.classList.contains("hidden")) {
    buybook.classList.add("visual");
    Regbackground.classList.add("visual");

    setTimeout(function () {
      buybook.classList.add("hidden");
      Regbackground.classList.add("hidden");
    }, 200);
  }
});

buyButton.forEach((button) => {
  button.addEventListener("click", function () {
    if (localStorage.getItem("InLogUser") == 1) {
      if (Regbackground.classList.contains("hidden")) {
        Regbackground.classList.remove("hidden");
        buybook.classList.remove("hidden");
        setTimeout(function () {
          Regbackground.classList.remove("visual");
        }, 500);
        setTimeout(function () {
          buybook.classList.remove("visual");
        }, 100);
      }
    } else if (Regbackground.classList.contains("hidden")) {
      Regbackground.classList.remove("hidden");
      LogMenu.classList.remove("hidden");
      setTimeout(function () {
        Regbackground.classList.remove("visual");
      }, 500);
      setTimeout(function () {
        LogMenu.classList.remove("visual");
      }, 100);
    }
  });
});

logIn.addEventListener("click", function () {
  if (Regbackground.classList.contains("hidden")) {
    Regbackground.classList.remove("hidden");
    LogMenu.classList.remove("hidden");
    setTimeout(function () {
      Regbackground.classList.remove("visual");
    }, 500);
    setTimeout(function () {
      LogMenu.classList.remove("visual");
    }, 100);
  }
});

Regbackground.addEventListener("click", function () {
  if (!Regbackground.classList.contains("hidden")) {
    Regbackground.classList.add("visual");
    LogMenu.classList.add("visual");
    setTimeout(function () {
      Regbackground.classList.add("hidden");
    }, 300);
    setTimeout(function () {
      LogMenu.classList.add("hidden");
    }, 300);
  }
});

CloseLog.addEventListener("click", function () {
  if (!Regbackground.classList.contains("hidden")) {
    Regbackground.classList.add("visual");
    LogMenu.classList.add("visual");
    setTimeout(function () {
      Regbackground.classList.add("hidden");
    }, 300);
    setTimeout(function () {
      LogMenu.classList.add("hidden");
    }, 300);
  }
});

regInLog.addEventListener("click", function () {
  if (!LogMenu.classList.contains("hidden")) {
    LogMenu.classList.add("visual");
    setTimeout(function () {
      LogMenu.classList.add("hidden");
    }, 300);
    setTimeout(function () {
      RegMenu.classList.remove("hidden");
    }, 300);
    setTimeout(function () {
      RegMenu.classList.remove("visual");
    }, 320);
  }
});

const inputPASSWORD = document.getElementById("Log-password");

inputPASSWORD.addEventListener("keyup", function (evt) {
  let length = this.value.length;
  if (length < 8) inputPASSWORD.style.borderColor = "red";
  else if (length >= 8) inputPASSWORD.style.borderColor = "green";
});

// const EMAIL_LOGEXP =
//   /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

// const inputLogin = document.getElementById("Log-email");

// function isEmailValid(value) {
//   return EMAIL_LOGEXP.test(value);
// }

// function onInput() {
//   if (isEmailValid(inputLogin.value)) {
//     inputLogin.style.borderColor = "green";
//   } else {
//     inputLogin.style.borderColor = "red";
//   }
// }

// inputLogin.addEventListener("input", onInput);

// log in d Digital

DigLog.addEventListener("click", function () {
  if (Regbackground.classList.contains("hidden")) {
    Regbackground.classList.remove("hidden");
    LogMenu.classList.remove("hidden");
    setTimeout(function () {
      Regbackground.classList.remove("visual");
    }, 500);
    setTimeout(function () {
      LogMenu.classList.remove("visual");
    }, 100);
  }
});

// крестик в LOG in
let OneLog = document.getElementById("crossTwo-log");
document
  .getElementById("crossOne-log")
  .addEventListener("mouseover", function () {
    OneLog.style.background = "#bb945f";
    this.addEventListener("mouseout", function () {
      OneLog.style.background = "";
    });
  });
let TwoLog = document.getElementById("crossOne-log");
document
  .getElementById("crossTwo-log")
  .addEventListener("mouseover", function () {
    TwoLog.style.background = "#bb945f";
    this.addEventListener("mouseout", function () {
      TwoLog.style.background = "";
    });
  });
