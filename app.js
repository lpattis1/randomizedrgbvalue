const switchBtn = document.querySelector(".switch");
const color = document.querySelector(".color");

const randomColor = function () {
  return Math.floor(Math.random() * 255);
};

const changeBgColor = function () {
  switchBtn.addEventListener("click", function (e) {
    const r = randomColor();
    const g = randomColor();
    const b = randomColor();
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    color.textContent = `rgb(${r}, ${g}, ${b})`;
  });
};

changeBgColor();
