const toggleBtn = document.getElementById("toggle");

// Lấy theme có sẵn
const savedTheme = localStorage.getItem("theme");
const prefersDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)",
).matches;

// Ưu tiên: localStorage -> system -> mặc định
let currentTheme = savedTheme || (prefersDarkMode ? "dark" : "light");

// /Áp dụng theme*
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);

  try {
    localStorage.setItem("theme", theme);
  } catch (e) {}

  // Update UI
  toggleBtn.textContent = theme === "dark" ? "🌙" : "☀️";
  toggleBtn.setAttribute(
    "aria-label",
    theme === "dark" ? "Chuyển sang sáng" : "Chuyển sang tối",
  );
}

applyTheme(currentTheme);

// Toggle
toggleBtn.addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(currentTheme);
});
