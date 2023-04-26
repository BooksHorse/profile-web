import { e as emoteDiv } from "./emote.js";
let navbar = document.getElementById("nav");
if (navbar) {
  let navbarElement = [...navbar.children];
  navbarElement = navbarElement.filter((el) => el != emoteDiv);
  navbarElement.forEach((el) => {
    el.addEventListener("click", (event) => {
      let el2 = event.target;
      navbarElement.forEach((el3) => el3.classList.remove("selected"));
      if (el2.parentElement) {
        el2.parentElement.classList.add("selected");
        el2.classList.add("selected");
      }
      let topic = document.getElementById("current-content");
      if (topic) {
        topic.setAttribute("content", el2.id);
      }
    });
  });
}
