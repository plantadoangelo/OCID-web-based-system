/*!
 * Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project



document.getElementById("grad").classList.toggle("grad-active");

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("mouseenter", () => {
        let line = link.querySelector(".line");
        line.style.transition = "width 0.3s ease-in-out, left 0.3s ease-in-out";
        line.style.width = "100%";
        line.style.left = "0";
    });

    link.addEventListener("mouseleave", () => {
        let line = link.querySelector(".line");
        line.style.width = "0";
        line.style.left = "50%";
    });
});

document.getElementById("gradbtn").addEventListener("click", function() {
    this.classList.toggle("active");
});