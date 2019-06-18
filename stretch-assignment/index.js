let speed = 10, direction = 1;

let block = document.querySelectorAll('block');

block.forEach(x => x.addEventListener('click', function(e){
    e.target.style.top="50px";
}));
