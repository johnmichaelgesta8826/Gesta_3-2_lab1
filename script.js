// Toggle dark mode when the button is clicked
const toggleBtn = document.getElementById('toggleThemeBtn');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Update button text depending on current mode
  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = 'Toggle Light Mode';
  } else {
    toggleBtn.textContent = 'Toggle Dark Mode';
  }
});

// Simple dynamic feature: show current year in the footer automatically
const footer = document.querySelector('footer p');
const currentYear = new Date().getFullYear();
footer.textContent = footer.textContent.replace('2026', currentYear);
