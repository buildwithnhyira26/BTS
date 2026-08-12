/* ==========================================
   BENEATH THE STEEZE
   WEBSITE JAVASCRIPT
========================================== */


/* ---------- PAGE LOADED ---------- */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Beneath The Steeze website loaded.");

});


/* ---------- SCROLL REVEAL ---------- */

const revealElements = document.querySelectorAll(
    ".product-card, .value, .about-value, .objective, .offer, .mission-card, .timeline-item"
);

const revealOnScroll = () => {

    revealElements.forEach((element) => {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (elementTop < windowHeight - 80) {

            element.classList.add("visible");

        }

    });

};


window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* ---------- NAVBAR EFFECT ---------- */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ---------- BUTTON CLICK EFFECT ---------- */

const buttons = document.querySelectorAll(
    ".red-button, .outline-button"
);

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.96)";

        setTimeout(() => {

            button.style.transform = "";

        }, 120);

    });

});