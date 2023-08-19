// the background of the navbar should change when the page is scrolled.
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar-header');
    const scrolled = window.scrollY > 0;

    if (scrolled) {
      navbar.classList.add('white-bg');
    } else {
      navbar.classList.remove('white-bg');
    }
});

// //The background color of the navbar header should change when the menu is open.
// window.addEventListener('DOMContentLoaded', function() {
//   const navbarToggle = document.querySelector('.navbar-toggle');
//   const navbarHeader = document.querySelector('.navbar-header');

//   navbarToggle.addEventListener('click', function() {
//     if (navbarHeader.classList.contains('menu-open')) {
//       navbarHeader.classList.remove('menu-open');
//     } else {
//       navbarHeader.classList.add('menu-open');
//     }
//   });
// });


window.addEventListener('DOMContentLoaded', function() {
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarHeader = document.querySelector('.navbar-header');

  navbarToggle.addEventListener('click', function() {
    if (navbarHeader.classList.contains('menu-open')) {
      navbarHeader.classList.remove('menu-open');
      if (window.innerWidth < 600) {
        navbarHeader.style.backgroundColor = 'transparent';
      }
    } else {
      navbarHeader.classList.add('menu-open');
      if (window.innerWidth < 600) {
        navbarHeader.style.backgroundColor = '#f0f8ff';
      }
    }
  });
});