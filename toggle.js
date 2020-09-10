const toggle = document.getElementById("toggle");
const allATags = document.querySelectorAll("a");

toggle.addEventListener("click", () => {
  const body = document.querySelector("body");
  const header = document.querySelector("header");
  const section = document.querySelector("section");
  body.classList.toggle("dark");
  header.classList.toggle("dark");
  section.classList.toggle("dark");
  allATags.forEach((a) => {
    a.classList.toggle("dark");
  });
});
