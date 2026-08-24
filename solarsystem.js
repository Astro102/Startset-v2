const sunX = window.innerWidth / 2 - 25;
const sunY = window.innerHeight / 2 - 25;

const sun = document.querySelector('.sun');
sun.style.left = `${sunX}px`;
sun.style.top = `${sunY}px`;

const mercury = document.querySelector('.mercury');

function update(planet){

}

setInterval(() => {
    update(mercury);    

}, 1000);
