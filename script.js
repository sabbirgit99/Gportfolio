const dotsBtn = document.getElementById("dotsBtn");
const menu = document.getElementById("menu");

function closeMenu() {
  menu.classList.remove("open");
  dotsBtn.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
  const isOpen = menu.classList.toggle("open");
  dotsBtn.setAttribute("aria-expanded", String(isOpen));
}

dotsBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener("click", () => closeMenu());

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

// close menu after clicking a link
menu.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => closeMenu());
});