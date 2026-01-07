
  const links = document.querySelectorAll(".nav a");
  const indicator = document.querySelector(".nav-indicator");
  const navList = document.querySelector(".nav ul");

  links.forEach(link => {
    link.addEventListener("mouseenter", () => {
      const linkRect = link.getBoundingClientRect();
      const navRect = navList.getBoundingClientRect();

      indicator.style.width = linkRect.width + "px";
      indicator.style.left = (linkRect.left - navRect.left) + "px";
    });
  });

