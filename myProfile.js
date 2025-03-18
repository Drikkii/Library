// копирование в буфер card number

let text = document.getElementById("copFn");
const CopyFn = async () => {
  try {
    await navigator.clipboard.writeText(text.innerHTML);
    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + text.innerHTML;
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
window.CopyFn = CopyFn;
window.outFunc = outFunc;

//крестик в myProfile

let OneMyProfile = document.getElementById("crossOne-Profile");
document
  .getElementById("crossTwo-Profile")
  .addEventListener("mouseover", function () {
    OneMyProfile.style.background = "#bb945f";
    this.addEventListener("mouseout", function () {
      OneMyProfile.style.background = "";
    });
  });
let TwoMyProfile = document.getElementById("crossTwo-Profile");
document
  .getElementById("crossOne-Profile")
  .addEventListener("mouseover", function () {
    TwoMyProfile.style.background = "#bb945f";
    this.addEventListener("mouseout", function () {
      TwoMyProfile.style.background = "";
    });
  });

// закрывание/открытие MyProfile

// let profileInfo = document.querySelector(".myProfile");

// document.addEventListener("click", () => {
//   if (!profileInfo.classList.contains("hidden")) {
//     profileInfo.classList.add("visual");
//     setTimeout(function () {
//       profileInfo.classList.add("hidden");
//     }, 200);
//   }
// });
let RegbackgroundProfile = document.querySelector(".backgrey"); //серый фон в регестрации
let ProfileBtn = document.querySelector(".MyProfileBnt");
let myProfile = document.querySelector(".myProfile");
let ProfileInLog = document.querySelector(".Profile-inLog");

ProfileBtn.addEventListener("click", function () {
  if (RegbackgroundProfile.classList.contains("hidden")) {
    RegbackgroundProfile.classList.remove("hidden");
    myProfile.classList.remove("hidden");
    setTimeout(function () {
      myProfile.classList.remove("visual");
      RegbackgroundProfile.classList.remove("visual");
    }, 20);
  }
});
ProfileInLog.addEventListener("click", function () {
  if (RegbackgroundProfile.classList.contains("hidden")) {
    RegbackgroundProfile.classList.remove("hidden");
    myProfile.classList.remove("hidden");
    setTimeout(function () {
      myProfile.classList.remove("visual");
      RegbackgroundProfile.classList.remove("visual");
    }, 20);
  }
});

RegbackgroundProfile.addEventListener("click", function () {
  if (!RegbackgroundProfile.classList.contains("hidden")) {
    RegbackgroundProfile.classList.add("hidden");
    myProfile.classList.add("visual");
    setTimeout(function () {
      myProfile.classList.add("hidden");
    }, 200);
  }
});

OneMyProfile.addEventListener("click", function () {
  if (!RegbackgroundProfile.classList.contains("hidden")) {
    RegbackgroundProfile.classList.add("hidden");
    myProfile.classList.add("visual");
    setTimeout(function () {
      myProfile.classList.add("hidden");
    }, 200);
  }
});
TwoMyProfile.addEventListener("click", function () {
  if (!RegbackgroundProfile.classList.contains("hidden")) {
    RegbackgroundProfile.classList.add("hidden");
    myProfile.classList.add("visual");
    setTimeout(function () {
      myProfile.classList.add("hidden");
    }, 200);
  }
});

//Указываем имя пользователя в профиле
const nameClient = document.querySelector(".nameClient");
const NameProfile = document.querySelector(".NameProfile");
const inputTextInLog = document.querySelector(".input-text-inLog");
const inputTextInLogNumber = document.querySelector(".input-text-inLog-number");

window.addEventListener("load", () => {
  if (localStorage.getItem("InLogUser") == 1) {
    inputTextInLogNumber.placeholder = localStorage.getItem("GenerateNumber");
    inputTextInLog.placeholder =
      localStorage.getItem("Name").charAt(0).toUpperCase() +
      localStorage.getItem("Name").slice(1) +
      " " +
      localStorage.getItem("LastName").charAt(0).toUpperCase() +
      localStorage.getItem("LastName").slice(1);
    NameProfile.textContent =
      localStorage.getItem("Name").charAt(0).toUpperCase() +
      localStorage.getItem("LastName").charAt(0).toUpperCase();
    nameClient.textContent =
      localStorage.getItem("Name") + " " + localStorage.getItem("LastName");
  }
});
