document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const nav = document.querySelector(".navbar-collapse");
    if (nav.classList.contains("show")) {
      new bootstrap.Collapse(nav).toggle();
    }
  });
});
