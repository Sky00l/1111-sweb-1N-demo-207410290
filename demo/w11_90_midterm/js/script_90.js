const navbar = document.querySelector('#navbar');

// add fixed class to navbar
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    navbar.classList.add('navbar-fixed');
  } else {
    navbar.classList.remove('navbar-fixed');
  }
});

function showAnswer(index) {}
