const toggle = document.getElementById("darkModeToggle");
const body = document.body;

const moonIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 12.79A9 9 0 0111.21 3 7 7 0 0012 17a7 7 0 009-4.21z"/>
</svg>`;

const sunIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 4V2M12 22v-2M4.22 4.22l-1.42 1.42M19.78 19.78l1.42-1.42M2 12H4m16 0h2M4.22 19.78l1.42-1.42M19.78 4.22l-1.42 1.42M12 6a6 6 0 100 12 6 6 0 000-12z"/>
</svg>`;

function updateIcon() {
  toggle.innerHTML = body.classList.contains("dark-mode") ? sunIcon : moonIcon;
}

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}

updateIcon();

toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const theme = body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", theme);
  updateIcon();
});