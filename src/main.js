import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/scss/bootstrap.scss";

const redLightToggler = document.getElementById("red-light-toggler");
const greenLightToggler = document.getElementById("green-light-toggler");

function toggle (led) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.4.1/?led=" + led);
    xhr.send();
}

redLightToggler.addEventListener('click', () => toggle(1));
greenLightToggler.addEventListener('click', () => toggle(2));
