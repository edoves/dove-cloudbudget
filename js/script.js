const navAnimation = (() => {
  const navbar = document.querySelector(".navbar__menu");
  const hamburger = document.querySelector(".navbar__hamburger");
  const animatetoX = document.getElementById("animatetoX");

  animatetoX.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("openMenuMobile");
  });
})();
