const toggleButton = document.getElementById('burger-menu')
const toggleContainer = document.querySelector(".header__toggle-container");
const menu = document.getElementsByClassName('menu-list')[0]


function toggleMenu() {
  toggleContainer.classList.toggle('open');
  menu.classList.toggle('shown')
}

toggleButton.addEventListener("click", (toggleMenu))

document.addEventListener("click", function(e) {
  if((!toggleContainer.contains(e.target) && !menu.contains(e.target))) {
    if (toggleContainer.classList.contains('open')) {
      toggleContainer.classList.remove('open');
      menu.classList.remove('shown')
    }
  }
})

const before = document.getElementById("before")
slider = document.getElementById("range-slider");
function moveDivisor() {
	before.style.width = slider.value+"%";
}

