// Your code goes here

// 1
const logo = document.querySelector('.logo-heading');

logo.addEventListener("mouseover", function() {
    TweenLite.to(logo, 1, { ease: Bounce.easeOut, y: 10 });
})

// 2
const doc = document.querySelector('body');
doc.addEventListener("keydown", function() {
    TweenLite.to(doc, 2.5, { ease: Back.easeOut.config(1.7), y: -500 });
});


// 3
const content = document.querySelector('.content-section');
content.addEventListener("wheel", function(e) {
    e.preventDefault();

    TweenLite.to(content, 1.5, { ease: Bounce.easeOut, y: -20 });
})


// 4
const transition = document.querySelector('.transition');

transition.addEventListener("transitionstart", function(e){  
    console.log('transition fired');

    e.stopPropagation();
});

// 5
const dblClick = document.querySelectorAll(".destination");

dblClick.forEach(x => x.addEventListener('dblclick', function(e) {
    e.target.style.background = "pink";
}));


// 6 
const nav = document.querySelectorAll("nav a");
nav.forEach(x => x.addEventListener('mousedown', function(e) {
    e.target.style.color = "green";
}));

// 7
nav.forEach(x => x.addEventListener('mouseup', function(e) {
    e.target.style.backgroundColor = "#E9EEF1";
}))

// 8 
const inputSelect = document.querySelector('input');
inputSelect.addEventListener('select', function(e) {
    e.target.style.color = "red";
});

// 9
const inputFocus = document.querySelector('.input-focus');
inputFocus.addEventListener('focus', function(e){
    e.target.style.background = "pink";
})

// 10
const form = document.querySelector('form');
const submitInfo = document.querySelector('.submit-info');
form.addEventListener('submit', function(e){
    submitInfo.textContent = `Submitted no: ${e.timeStamp}`;
    e.preventDefault();
})