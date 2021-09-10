let container = document.querySelector(".animated-icon");
let click = document.querySelector(".click");
click.addEventListener("click", () => {
    container.style.webkitAnimationName = "none";
    container.style.webkitAnimationDuration = "0s";
});