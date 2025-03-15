let Winter = document.getElementById("winter-id"); //получаем Label инпутов (слово)
let Spring = document.getElementById("spring-id");
let Summer = document.getElementById("summer-id");
let Autumn = document.getElementById("autumn-id");
let WinterPag = document.getElementById("season-choice1"); //получаем Круги пагинации
let SpringPag = document.getElementById("season-choice2");
let SummerPag = document.getElementById("season-choice3");
let AutumnPag = document.getElementById("season-choice4");
let WinterFavor = document.querySelector(".favorites-items-winter"); // Получаем Контейнеры с книгами
let SpringFavor = document.querySelector(".favorites-items-spring");
let SummerFavor = document.querySelector(".favorites-items-summer");
let AutumnFavor = document.querySelector(".favorites-items-autumn");

//Функция для затуания всех остальных контейнеров и появления Spring - книги
function BookSpring() {
  if (SpringFavor.classList.contains("hidden")) {
    WinterFavor.classList.add("visual");
    setTimeout(function () {
      WinterFavor.classList.add("hidden");
    }, 200);
    SummerFavor.classList.add("visual");
    setTimeout(function () {
      SummerFavor.classList.add("hidden");
    }, 200);
    AutumnFavor.classList.add("visual");
    setTimeout(function () {
      AutumnFavor.classList.add("hidden");
    }, 200);
    setTimeout(function () {
      SpringFavor.classList.remove("visual");
    }, 500);
    setTimeout(function () {
      SpringFavor.classList.remove("hidden");
    }, 200);
  }
}
//Функция для затуания всех остальных контейнеров и появления Winter - книги
function bookWinter() {
  if (WinterFavor.classList.contains("hidden")) {
    SpringFavor.classList.add("visual");
    setTimeout(function () {
      SpringFavor.classList.add("hidden");
    }, 200);
    SummerFavor.classList.add("visual");
    setTimeout(function () {
      SummerFavor.classList.add("hidden");
    }, 200);
    AutumnFavor.classList.add("visual");
    setTimeout(function () {
      AutumnFavor.classList.add("hidden");
    }, 200);
    setTimeout(function () {
      WinterFavor.classList.remove("visual");
    }, 500);
    setTimeout(function () {
      WinterFavor.classList.remove("hidden");
    }, 200);
  }
}
//Функция для затуания всех остальных контейнеров и появления Summer - книги
function bookSummer() {
  if (SummerFavor.classList.contains("hidden")) {
    //Проверяем есть ли класс hidden (активный)
    SpringFavor.classList.add("visual");
    setTimeout(function () {
      SpringFavor.classList.add("hidden");
    }, 200);
    WinterFavor.classList.add("visual");
    setTimeout(function () {
      WinterFavor.classList.add("hidden");
    }, 200);
    AutumnFavor.classList.add("visual");
    setTimeout(function () {
      AutumnFavor.classList.add("hidden");
    }, 200);
    setTimeout(function () {
      SummerFavor.classList.remove("visual");
    }, 500);
    setTimeout(function () {
      SummerFavor.classList.remove("hidden");
    }, 200);
  }
}
//Функция для затуания всех остальных контейнеров и появления Autumn - книги
function bookAutumn() {
  if (AutumnFavor.classList.contains("hidden")) {
    SpringFavor.classList.add("visual");
    setTimeout(function () {
      SpringFavor.classList.add("hidden");
    }, 200);
    WinterFavor.classList.add("visual");
    setTimeout(function () {
      WinterFavor.classList.add("hidden");
    }, 200);
    SummerFavor.classList.add("visual");
    setTimeout(function () {
      SummerFavor.classList.add("hidden");
    }, 500);
    setTimeout(function () {
      AutumnFavor.classList.remove("visual");
    }, 500);
    setTimeout(function () {
      AutumnFavor.classList.remove("hidden");
    }, 200);
  }
}

// Клик ивент по Label на все времена года
Autumn.addEventListener("click", bookAutumn);
Spring.addEventListener("click", BookSpring);
Winter.addEventListener("click", bookWinter);
Summer.addEventListener("click", bookSummer);

// Клик ивент по кругам(пагинации) на все времена года
AutumnPag.addEventListener("click", bookAutumn);
SpringPag.addEventListener("click", BookSpring);
WinterPag.addEventListener("click", bookWinter);
SummerPag.addEventListener("click", bookSummer);

// Тестовые пробы и ошибки !!

// Winter.addEventListener("click", (e) => {
//   e.stopPropagation();
//   //   toggleMenu();
//   WinterFavor.classList.remove("favoriter-flex");
//   SummerFavor.classList.remove("favoriter-flex");
//   SpringFavor.classList.remove("favoriter-flex");
//   AutumnFavor.classList.remove("favoriter-flex");
//   WinterFavor.classList.toggle("favoriter-flex");
//   WinterFavor.style.display = "flex";
// });
// Spring.addEventListener("click", (e) => {
//   e.stopPropagation();
//   //   toggleMenu();
//   WinterFavor.classList.remove("favoriter-flex");
//   SummerFavor.classList.remove("favoriter-flex");
//   SpringFavor.classList.remove("favoriter-flex");
//   AutumnFavor.classList.remove("favoriter-flex");
//   SummerFavor.classList.toggle("favoriter-flex");
//   WinterFavor.style.display = "none";
// });
// Summer.addEventListener("click", (e) => {
//   e.stopPropagation();
//   //   toggleMenu();
//   WinterFavor.classList.remove("favoriter-flex");
//   SummerFavor.classList.remove("favoriter-flex");
//   SpringFavor.classList.remove("favoriter-flex");
//   AutumnFavor.classList.remove("favoriter-flex");
//   SpringFavor.classList.toggle("favoriter-flex");
//   WinterFavor.style.display = "none";
// });
// Autumn.addEventListener("click", (e) => {
//   e.stopPropagation();
//   //   toggleMenu();
//   WinterFavor.classList.remove("favoriter-flex");
//   SummerFavor.classList.remove("favoriter-flex");
//   SpringFavor.classList.remove("favoriter-flex");
//   AutumnFavor.classList.remove("favoriter-flex");
//   AutumnFavor.classList.toggle("favoriter-flex");
//   WinterFavor.style.display = "none";
// });

// let toggleMenu = () => {
//   WinterFavor.classList.remove("favoriter-flex");
//   SummerFavor.classList.remove("favoriter-flex");
//   SpringFavor.classList.remove("favoriter-flex");
//   AutumnFavor.classList.remove("favoriter-flex");
// };

// setTimeout(() => {
//   WinterFavor.style.display = "none";
// }, 3000);

// let autumn = document.getElementById("autumn"),
//   autumnLabel = document.querySelector(".autumn-class"),
//   winter = document.getElementById("winter"),
//   winterLabel = document.querySelector(".winter-class"),
//   spring = document.getElementById("spring"),
//   springLabel = document.querySelector(".spring-class"),
//   summer = document.getElementById("summer"),
//   summerLabel = document.querySelector(".summer-class");

// winterLabel.addEventListener("click", function (e) {
//   if (winter.classList.contains("hidden")) {
//     autumn.classList.add("visuallyhidden");
//     autumn.addEventListener("transitionend", function (e) {
//       autumn.classList.add("hidden");
//     });
//     summer.classList.add("visuallyhidden");
//     summer.addEventListener("transitionend", function (e) {
//       summer.classList.add("hidden");
//     });
//     spring.classList.add("visuallyhidden");
//     spring.addEventListener("transitionend", function (e) {
//       spring.classList.add("hidden");
//     });
//     setTimeout(function () {
//       winter.classList.remove("visuallyhidden");
//     }, 1000);
//     winter.classList.remove("hidden");

//     // } else {
//     //   winter.classList.add("visuallyhidden");
//     //   winter.addEventListener(
//     //     "transitionend",
//     //     function (e) {
//     //       winter.classList.add("hidden");
//     //     },
//     //     {
//     //       capture: false,
//     //       once: true,
//     //       passive: false,
//     //     }
//     //   );
//   }
// });

// springLabel.addEventListener("click", function (e) {
//   if (spring.classList.contains("hidden")) {
//     setTimeout(function () {
//       spring.classList.remove("visuallyhidden");
//     }, 1000);
//     spring.classList.remove("hidden");
//     autumn.classList.add("visuallyhidden");
//     autumn.addEventListener("transitionend", function (e) {
//       autumn.classList.add("hidden");
//     });
//     summer.classList.add("visuallyhidden");
//     summer.addEventListener("transitionend", function (e) {
//       summer.classList.add("hidden");
//     });
//     winter.classList.add("visuallyhidden");
//     winter.addEventListener("transitionend", function (e) {
//       winter.classList.add("hidden");
//     });

//     // } else {
//     //   spring.classList.add("visuallyhidden");
//     //   spring.addEventListener(
//     //     "transitionend",
//     //     function (e) {
//     //       spring.classList.add("hidden");
//     //     },
//     //     {
//     //       capture: false,
//     //       once: true,
//     //       passive: false,
//     //     }
//     //   );
//   }
// });
// summerLabel.addEventListener("click", function (e) {
//   if (summer.classList.contains("hidden")) {
//     autumn.classList.add("visuallyhidden");
//     autumn.addEventListener("transitionend", function (e) {
//       autumn.classList.add("hidden");
//     });
//     spring.classList.add("visuallyhidden");
//     spring.addEventListener("transitionend", function (e) {
//       spring.classList.add("hidden");
//     });
//     winter.classList.add("visuallyhidden");
//     winter.addEventListener("transitionend", function (e) {
//       winter.classList.add("hidden");
//     });
//     setTimeout(function () {
//       summer.classList.remove("visuallyhidden");
//     }, 1000);
//     summer.classList.remove("hidden");

//     // } else {
//     //   summer.classList.add("visuallyhidden");
//     //   summer.addEventListener(
//     //     "transitionend",
//     //     function (e) {
//     //       summer.classList.add("hidden");
//     //     },
//     //     {
//     //       capture: false,
//     //       once: true,
//     //       passive: false,
//     //     }
//     //   );
//   }
// });

// autumnLabel.addEventListener("click", function (e) {
//   if (autumn.classList.contains("hidden")) {
//     winter.classList.add("visuallyhidden");
//     winter.addEventListener("transitionend", function (e) {
//       winter.classList.add("hidden");
//     });
//     summer.classList.add("visuallyhidden");
//     summer.addEventListener("transitionend", function (e) {
//       summer.classList.add("hidden");
//     });
//     spring.classList.add("visuallyhidden");
//     spring.addEventListener("transitionend", function (e) {
//       spring.classList.add("hidden");
//     });
//     setTimeout(function () {
//       autumn.classList.remove("visuallyhidden");
//     }, 1000);
//     autumn.classList.remove("hidden");

//     // } else {
//     //   autumn.classList.add("visuallyhidden");
//     //   autumn.addEventListener(
//     //     "transitionend",
//     //     function (e) {
//     //       autumn.classList.add("hidden");
//     //     },
//     //     {
//     //       capture: false,
//     //       once: true,
//     //       passive: false,
//     //     }
//     //   );
//   }
// })
