// let menuBtn = document.querySelector(".menu-burger");
// let menu = document.querySelector(".slide-menu-burger");
// let lock = document.querySelector("body");

// // lock.addEventListener("click", function () {
// //   if (menu.classList.contains("active")) {
// //     menu.classList.remove("active");
// //   }
// // });
// menuBtn.addEventListener("click", function () {
//   menuBtn.classList.toggle("active");
//   menu.classList.toggle("active");
//   lock.classList.toggle("lock");
// });
let menuBtn = document.querySelector(".menu-burger");
let menu = document.querySelector(".slide-menu-burger");
let lock = document.querySelector("body");
let LogoMenu = document.querySelector(".dropMenu");

const toggleMenu = () => {
  lock.classList.toggle("lock");
  menu.classList.toggle("active");
  menuBtn.classList.remove("active");
};

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  lock.classList.toggle("lock");
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");

  //у бираем рег меню
  LogoMenu.classList.add("visual");
  setTimeout(function () {
    DropMenu.classList.add("hidden");
  }, 300);
});

document.addEventListener("click", (e) => {
  let target = e.target;
  let its_menu = target == menu || menu.contains(target);
  let its_menuBtn = target == menuBtn;
  let menu_is_active = menu.classList.contains("active");

  if (!its_menu && !its_menuBtn && menu_is_active) {
    toggleMenu();
  }
});
menu.addEventListener("click", function (e) {
  if (e.target.matches("a")) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    lock.classList.remove("lock");
  }
});

// console.log(
//   "Library 1\n1. Вёрстка валидная +10 \n https://validator.w3.org/ \n Document checking completed. No errors or warnings to show - Done \n \n2. Вёрстка семантическая +16 \n <header>, <main>, <footer> +2. - Done \n шесть элементов <section> (по количеству секций) +2. - Done \n только один заголовок <h1> +2. - Done \n пять заголовков <h2> - Done \n один элемент <nav> - Done \n два списка ul > li > a - Done \n семь кнопок <button> +2. - Done \n два инпута <input> +2. - Done \n\n3. Вёрстка соответствует макету +54 \n\n блок <header> +8: - ALL Done \n секция Welcome +4. - ALL Done\n секция About +6: - ALL Done \n секция Favorites +8: - ALL Done \n секция CoffeShop +6. - ALL Done \n секция Contacts +6: - ALL Done \n секция LibraryCard +8: - ALL Done \n блок <footer> +8: - ALL Done \n\n4. Общие требования к верстке +20 \n\n Все пункты соблюденны - ALL Done \n\n5. ИТОГ \n\n10+16+54+20=100 Баллов \n\nScore:100/100 \n\n Library 2 - \n\n Burger-menu работает корректно \n\n от 1440 до 640 горизонтальной полосы прокрутки не появляется \n\n ничего не наезжает , не пропадает \n\n Score:50/50"
// );
