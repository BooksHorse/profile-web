let gallery = document.getElementsByClassName("gallery")[0];
if (gallery) {
  let child = [...gallery.children];
  child.forEach((el) => {
    el.addEventListener("click", (event) => {
      let el2 = event.target;
      if (el2.tagName == "IMG" && el2.parentElement) {
        el2 = el2.parentElement;
      }
      if (el2.classList.contains("clicked")) {
        el2.classList.remove("clicked");
        return;
      }
      child.forEach((el3) => el3.classList.remove("clicked"));
      el2.classList.add("clicked");
    });
  });
}
