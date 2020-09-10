const toggle = document.getElementById("toggle");
const allATags = Array.from(document.querySelectorAll("a"));
const body = document.querySelector("body");
const header = document.querySelector("header");
const section = document.querySelector("section");
const myArr = [body, header, section, allATags];

toggle.addEventListener("click", () => {
  // flatten nested array
  myArr.flat(3).forEach((el) => {
    el.classList.toggle("dark");
  });
});
