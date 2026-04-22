    const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    btn.addEventListener("click", () => {
      menu.classList.toggle("scale-y-0");
      menu.classList.toggle("opacity-0");
      menu.classList.toggle("pointer-events-none");
    });