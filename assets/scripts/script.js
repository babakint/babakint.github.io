document.addEventListener('DOMContentLoaded', () => {
  const themeButton = document.getElementById('theme-toggle');
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const applyTheme = (useDarkTheme) => {
    document.body.classList.toggle('dark-mode', useDarkTheme);
    themeColorMeta?.setAttribute('content', useDarkTheme ? '#061828' : '#f4f8fa');

    if (themeButton) {
      themeButton.textContent = useDarkTheme ? '☀️' : '🌙';
      themeButton.setAttribute('aria-pressed', String(useDarkTheme));
      themeButton.setAttribute(
        'aria-label',
        useDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'
      );
    }
  };

  applyTheme(savedTheme ? savedTheme === 'dark' : systemPrefersDark);

  themeButton?.addEventListener('click', () => {
    const useDarkTheme = !document.body.classList.contains('dark-mode');
    applyTheme(useDarkTheme);
    localStorage.setItem('theme', useDarkTheme ? 'dark' : 'light');
  });

  const updateButton = document.getElementById('toggle-button');
  const olderUpdates = document.querySelectorAll('.older-update');

  if (updateButton && olderUpdates.length) {
    olderUpdates.forEach((update) => update.classList.add('hidden'));
    updateButton.classList.remove('hidden');
  }

  updateButton?.addEventListener('click', () => {
    const shouldExpand = updateButton.getAttribute('aria-expanded') !== 'true';

    olderUpdates.forEach((update) => {
      update.classList.toggle('hidden', !shouldExpand);
    });

    updateButton.setAttribute('aria-expanded', String(shouldExpand));
    updateButton.textContent = shouldExpand ? 'Show fewer updates' : 'Show older updates';
  });

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.site-nav a').forEach((link) => {
    const linkPage = link.getAttribute('href')?.split('/').pop();

    if (linkPage === currentPage) {
      link.setAttribute('aria-current', 'page');
    }
  });
});
