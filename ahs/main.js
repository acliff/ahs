var navButton = document.querySelector('.nav-icon');
navButton.addEventListener('click', function() {
  console.log('open!');
  document
    .querySelector('body')
    .classList
    .toggle('nav-open');});

var closeButton = document.querySelector('.close-icon');
closeButton.addEventListener('click', function() {
  console.log('close!');
  document
    .querySelector('body')
    .classList
    .toggle('nav-open');});

function showForm() {
  var x = document.getElementById("form");
    if (x.style.display === "none"){
        x.style.display = "block";} 
	else {x.style.display = "none";}}