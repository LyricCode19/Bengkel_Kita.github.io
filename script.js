// Toggle class active untuk menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika menu di klik
document.querySelector('#menu').onclick = () => {
  navbarNav.classList.toggle('active');
};



// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};


// Klik di luar elemen
const m = document.querySelector('#menu');
const sb = document.querySelector('#search-button');


document.addEventListener('click', function (e) {
  if (!m.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }


  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
});
