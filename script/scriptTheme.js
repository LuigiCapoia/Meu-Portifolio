document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-checkbox');
    const lightTheme = document.getElementById('light-theme');
    const darkTheme = document.getElementById('dark-theme');

    themeToggle.checked = localStorage.getItem('theme') === 'dark';

    if (themeToggle.checked) {
        darkTheme.removeAttribute('disabled');
    } else {
        lightTheme.removeAttribute('disabled');
    }
});

document.querySelector('.theme-checkbox').addEventListener('change', function() {
    const lightTheme = document.getElementById('light-theme');
    const darkTheme = document.getElementById('dark-theme');

    if (this.checked) {
        localStorage.setItem('theme', 'dark');
        darkTheme.removeAttribute('disabled');
        lightTheme.setAttribute('disabled', '');
    } else {
        localStorage.setItem('theme', 'light');
        lightTheme.removeAttribute('disabled');
        darkTheme.setAttribute('disabled', '');
    }
});
