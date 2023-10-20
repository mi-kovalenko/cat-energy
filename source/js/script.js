const toggleButton = document.getElementById('burger-menu')
const toggleContainer = document.querySelector(".header__toggle-container");

function toggleMenu() {
  toggleContainer.classList.toggle('open')
}

toggleButton.addEventListener("click", (toggleMenu))
