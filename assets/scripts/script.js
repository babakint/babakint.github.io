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


document.addEventListener('DOMContentLoaded', function() {
    // --- Show more / Show less toggle (index.html) ---
    const toggleButton = document.getElementById('toggle-button');
    const hiddenContent = document.getElementById('hidden-content');

    if (toggleButton && hiddenContent) {
        toggleButton.addEventListener('click', function() {
            if (hiddenContent.classList.contains('hidden')) {
                hiddenContent.classList.remove('hidden');
                toggleButton.textContent = 'Show less';
            } else {
                hiddenContent.classList.add('hidden');
                toggleButton.textContent = 'Show more';
            }
        });
    }

    // --- Active nav link highlighting + page-specific header color ---
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const pageClassMap = {
        'index.html':    'page-home',
        'resume.html':   'page-resume',
        'research.html': 'page-research',
        'talks.html':    'page-talks'
    };
    if (pageClassMap[currentPage]) {
        document.body.classList.add(pageClassMap[currentPage]);
    }
    document.querySelectorAll('nav a').forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});
