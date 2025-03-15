// Исходные данные по слайдеру (const)
const sliderImages = document.querySelectorAll(".img1-div"),
  sliderLine = document.querySelector(".max-img-container"),
  sliderDots = document.querySelectorAll(".pagination-click"),
  sliderBtnNext = document.querySelector(".carret-rig"),
  sliderBtnPrev = document.querySelector(".carret-lef");

// Переменные
let sliderCount = 0,
  sliderWidth;

// Адаптивность слайдера
window.addEventListener("resize", showSlide);

// Кнопки листания слайдов вперед и назад
sliderBtnNext.addEventListener("click", nextSlide);
sliderBtnPrev.addEventListener("click", prevSlide);

// Автоматическое перелистывание слайдов
// setInterval(() => {
//     nextSlide()
// }, 3000);

// Функции ==================
// Задает нужную ширину картинки и sliderLine
function showSlide() {
  sliderWidth = document.querySelector(".img1").offsetWidth;
  sliderLine.style.width = sliderWidth * sliderImages.length + "px";
  //   sliderImages.forEach((item) => (item.style.width = sliderWidth + "px"));

  rollSlider();
}
showSlide();

// Перелистывает слайд вперед
function nextSlide() {
  sliderCount++;
  if (sliderCount >= sliderImages.length) sliderCount = 4;

  rollSlider();
  thisSlide(sliderCount);
}

// Перелистывает слайд назад
function prevSlide() {
  sliderCount--;
  if (sliderCount < 0) sliderCount = 0;

  rollSlider();
  thisSlide(sliderCount);
}

// Задает шаг перемещения слайдов
function rollSlider() {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

// Указывает как слайд по счету активен
function thisSlide(index) {
  sliderDots.forEach((item) => item.classList.remove("active-brown"));
  sliderDots[index].classList.add("active-brown");
}

// Вешает клик на brown
sliderDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
  });
});
