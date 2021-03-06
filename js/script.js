const navAnimation = (() => {
  const navbar = document.querySelector(".navbar__menu");
  const hamburger = document.querySelector(".navbar__hamburger");
  const animatetoX = document.getElementById("animatetoX");

  animatetoX.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("openMenuMobile");
  });
})();

// AnimateWhenSCroll
const animateWhenScroll = (() => {
  const EL_TO_ANIMATE = {
    featureItems: document.querySelectorAll(".featured__post"),
    techItems: document.querySelectorAll(".technology__item"),
    appItems: document.querySelectorAll(".animate-app"),
    contactItems: document.querySelectorAll(".animate-contact"),
  };

  const OPTIONS = {
    root: null,
    rootMargin: "-250px 0px",
    threshold: 0.25,
  };

  const FEATUREDOBSERVER = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting }) => {
      if (!isIntersecting) {
        return;
      } else {
        EL_TO_ANIMATE.featureItems.forEach((post) => {
          post.classList.add("animate_up");
        });
      }
    });
  }, OPTIONS);

  const TECHNOLOGYOBSERVER = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting }) => {
      if (!isIntersecting) {
        return;
      } else {
        EL_TO_ANIMATE.techItems.forEach((tech) => {
          tech.classList.add("animate_up");
        });
      }
    });
  }, OPTIONS);

  const APPOBSERVER = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting }) => {
      if (!isIntersecting) {
        return;
      } else {
        EL_TO_ANIMATE.appItems.forEach((app) => {
          app.classList.add("animate_in");
        });
      }
    });
  }, OPTIONS);

  const CONTACTOBSERVER = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting }) => {
      if (!isIntersecting) {
        return;
      } else {
        EL_TO_ANIMATE.contactItems.forEach((contact) => {
          contact.classList.add("animate_in");
        });
      }
    });
  }, OPTIONS);

  FEATUREDOBSERVER.observe(document.querySelector(".featured"));
  TECHNOLOGYOBSERVER.observe(document.querySelector(".technology"));
  APPOBSERVER.observe(document.querySelector(".app"));
  CONTACTOBSERVER.observe(document.querySelector(".contact"));
})();
