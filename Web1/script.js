document.getElementById("action-button").addEventListener("click", function () {
    const mainText = document.getElementById("main-text");

    // Apply animation styles
    mainText.style.transition = "transform 0.5s, opacity 0.5s";
    mainText.style.transform = "scale(1.2)";
    mainText.style.opacity = "0.5";

    // Reset styles after animation
    setTimeout(() => {
        mainText.style.transform = "scale(1)";
        mainText.style.opacity = "1";
    }, 500);
});
