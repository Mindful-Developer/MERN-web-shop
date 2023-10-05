document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  // when the menu toggle button is clicked, toggle the hidden and flex classes on the nav links
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("hidden");
    navLinks.classList.toggle("flex"); // needed because hidden and flex are mutually exclusive
  });
});
