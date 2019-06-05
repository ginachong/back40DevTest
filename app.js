
const menuButton = document.getElementById("menuButton")
const dropDownMenu = document.getElementById("dropDownMenu")

menuButton.addEventListener("click", () => {
    dropDownMenu.style.display === "flex" ? dropDownMenu.style.display = "none" : dropDownMenu.style.display = "flex"
    dropDownMenu.style.display === "flex" ? menuButton.src = "images/x-icon.png" : menuButton.src = "images/menu-icon.png"
})
