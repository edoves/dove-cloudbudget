const navAnimation = (() => {
  const navbar = document.querySelector(".navbar__menu");
  const hamburger = document.querySelector(".navbar__hamburger");
  const animatetoX = document.getElementById("animatetoX");

  animatetoX.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("openMenuMobile");
  });
})();

const animateOnScroll = (() => {
  const featurePostEl = document.querySelectorAll(".featured__post");
  const FEATUREDPOSTOPTIONS = {
    root: null,
    rootMargin: "-250px 0px",
    threshold: 0.25,
  };

  const observer = new IntersectionObserver((entries) => {
    console.log(entries);
    entries.forEach(({ isIntersecting }) => {
      if (!isIntersecting) {
        return;
      } else {
        console.log("execute");
        featurePostEl.forEach((post) => {
          post.classList.add("animate_up");
        });
      }
    });
  }, FEATUREDPOSTOPTIONS);

  observer.observe(document.querySelector(".featured"));
})();
