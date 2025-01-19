const themeSelector = document.querySelector("#theme-selector");

function changeTheme() {
    const theme = themeSelector.value;
    if (theme === "dark") {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
}

themeSelector.addEventListener("change", changeTheme);
