// Select the toggle button
const toggleButton = document.getElementById('theme-toggle');

// Check for saved theme preference on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  toggleButton.textContent = '☀️'; // Sun emoji for light mode
}

// Add an event listener to toggle between modes
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Update the button's emoji based on the current mode
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = '☀️'; // Sun emoji for light mode
    localStorage.setItem('theme', 'dark'); // Save preference
  } else {
    toggleButton.textContent = '🌙'; // Moon emoji for dark mode
    localStorage.setItem('theme', 'light'); // Save preference
  }
});


document.getElementById('toggle-button').addEventListener('click', function() {
    const researchList = document.getElementById('research-list');
    if (researchList.classList.contains('hidden')) {
        researchList.classList.remove('hidden');
        this.textContent = 'Read less';
    } else {
        researchList.classList.add('hidden');
        this.textContent = 'Read more';
    }
});
