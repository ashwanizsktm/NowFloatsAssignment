// selecting DOM.
let greeting = document.querySelector('.hospital-greeting');
let hospitalTitle = document.querySelector('.hospital-title');
let hospitalDetails = document.querySelector('.description');
let btnText = document.querySelector('.styled-btn');

// getting the hospital details using API.
async function getData(data) {
  const baseUrl = '  http://localhost:3000/';
  const response = await fetch(baseUrl + data);
  const responseData = await response.json();
  return responseData;
}

getData('details').then(res => {
  let loadedData = res;
  let requiredData = loadedData[0];
  console.log(requiredData);
  greeting.innerText = requiredData.greeting;
  hospitalTitle.innerHTML = requiredData.name;
  hospitalDetails.textContent = requiredData.description;
  btnText.innerHTML = requiredData.buttonText;

}).catch(err => console.log(err));

// Getting current date in timeslot using javascript.
var today = new Date();
let dateList = document.querySelector('.today-date')
dateList.textContent = `Today ( ${today}`;

// Header Animation in All Mobile devices.
const header = document.querySelector('.header');
const menuToggle = document.querySelector('.menu-toggle');
const contactSearch = document.querySelector('.contact-searchbar-wrap');
const navListItem = document.querySelector('.nav-list-item');
const allnavItem = Array.from(navListItem.parentElement.children);

// toggling images onclick.
let image = document.querySelector('.menu');
let imgSrc = 'http://127.0.0.1:5500/assets/menu.png';
let imgSrc1 = 'http://127.0.0.1:5500/assets/cancel.png';

// Toggling the classes.
menuToggle.addEventListener('click', () => {
  header.classList.toggle('header-mob-view');
  contactSearch.classList.toggle('contact-search-display');
  allnavItem.forEach((ele) => {
    ele.classList.toggle('contact-search-display');
  })
  // toggling the images.
  if (image.src === imgSrc) {
    image.src = imgSrc1;
  } else {
    image.src = imgSrc;
  }
});

// removing searchIcon when start typing in input box.
let input = document.querySelector('.search-input');
let searchIcon = document.querySelector('.search-icon');
input.addEventListener('click', () => {
  searchIcon.style.display = 'none';
})