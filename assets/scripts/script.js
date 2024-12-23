// Select the toggle button
const toggleButton = document.getElementById('theme-toggle');

// Add an event listener to the button
toggleButton.addEventListener('click', () => {
  // Toggle the "dark-mode" class on the body element
  document.body.classList.toggle('dark-mode');

  // Optional: Change button text based on the current mode
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Switch to Light Mode';
  } else {
    toggleButton.textContent = 'Switch to Dark Mode';
  }
});
