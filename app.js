const hamburgerMenu = document.querySelector('.hamburgerMenu');
const hamburgerLines = document.querySelector('.hamburgerLines');

hamburgerLines.addEventListener('click', ()=> {
    if (hamburgerMenu.style.visibility === "hidden") {
        hamburgerMenu.style.visibility = "visible";
      } else {
        hamburgerMenu.style.visibility = "hidden";
      }
})