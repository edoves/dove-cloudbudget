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
    featurePostEl: document.querySelectorAll(".featured__post"),
    techItems: document.querySelectorAll(".technology__item"),
  };

  const FEATURED = {
    root: null,
    rootMargin: "-250px 0px",
    threshold: 0.25,
  };

  const TECHNOLOGY = {
    root: null,
    rootMargin: "-250px 0px",
    threshold: 0.25,
  };

  const FEATUREDOBSERVER = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting }) => {
      if (!isIntersecting) {
        return;
      } else {
        EL_TO_ANIMATE.featurePostEl.forEach((post) => {
          post.classList.add("animate_up");
        });
      }
    });
  }, FEATURED);

  const TECHNOLOGYOBSERVER = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting }) => {
      if (!isIntersecting) {
        return;
      } else {
        EL_TO_ANIMATE.techItems.forEach((post) => {
          post.classList.add("animate_up");
        });
      }
    });
  }, TECHNOLOGY);

  FEATUREDOBSERVER.observe(document.querySelector(".featured"));
  TECHNOLOGYOBSERVER.observe(document.querySelector(".technology"));
})();
