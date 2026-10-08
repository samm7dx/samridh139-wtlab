document.addEventListener("DOMContentLoaded", function () {

    var year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    var welcomeButton = document.getElementById("welcomeBtn");
    var welcomeText = document.getElementById("welcomeText");

    if (welcomeButton && welcomeText) {
        welcomeButton.addEventListener("click", function () {
            welcomeText.textContent =
                "Welcome to my Web Technology Lab website!";
        });
    }

});

