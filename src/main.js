import "./sass/style.scss";

let themesButtons = document.querySelectorAll(".theme-button");

themesButtons.forEach((element) => {
  element.addEventListener("click", function () {
    let themeName = this.getAttribute("data-theme-name");

    if (themeName === "system") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", themeName);
    }
  });
});
