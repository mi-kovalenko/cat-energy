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


const checkIsValid = (event) => {
  console.log('Checking validity');
  const fields = document.querySelectorAll('.form__field');
  Array.from(fields).forEach(f => {
    if (!f.checkValidity()) {
      f.classList.add("form__field--error");
    }
  });
}

const form = document.querySelector('form');

if (form) {
  form.addEventListener('submit', checkIsValid);
  console.log('Event listener attached');
} else {
  console.log('Form not found');
}

