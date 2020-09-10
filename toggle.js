const toggle = document.getElementById("toggle");
const allATags = Array.from(document.querySelectorAll("a"));
const body = document.querySelector("body");
const header = document.querySelector("header");
const section = document.querySelector("section");
const title = document.querySelector("h1");
const myArr = [body, header, section, allATags, title];

toggle.addEventListener("click", () => {
  // flatten nested array
  myArr.flat(3).forEach((el) => {
    el.classList.toggle("dark");
  });
  changeTitle(title);
});

const changeTitle = (title) => {
  [...title.classList].includes("dark")
    ? (title.innerText = "Dark Theme")
    : (title.innerText = "Light Theme");
};
