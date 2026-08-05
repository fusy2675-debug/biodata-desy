document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const icon = themeToggleBtn.querySelector('i');
    const textSpan = themeToggleBtn.querySelector('span');

    // Check saved theme in localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        icon.className = 'fas fa-sun';
        textSpan.textContent = 'Mode Terang';
    }

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            icon.className = 'fas fa-moon';
            textSpan.textContent = 'Mode Gelap';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            icon.className = 'fas fa-sun';
            textSpan.textContent = 'Mode Terang';
        }
    });
});
