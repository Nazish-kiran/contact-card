var button = document.querySelector(".btn");
var button2 = document.querySelector(".btn2");
var sec = document.querySelector(".section1");
var sec2 = document.querySelector(".section2");

sec2.classList.add("hidden");
const nextSec = () => {
  sec2.classList.remove("hidden");
  sec.classList.add("hidden");
};
const prevSec = () => {
  sec.classList.remove("hidden");
  sec2.classList.add("hidden");
};
button.addEventListener("click", nextSec);
button2.addEventListener("click", prevSec);
