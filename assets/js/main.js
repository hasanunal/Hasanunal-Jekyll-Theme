/* theme mode switch */
function setTheme(theme) {
    if (theme === "dark") {
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('theme', 'dark');
        document.getElementById("theme-toggle").classList.add('sun');
        document.getElementById("theme-toggle").classList.remove('moon');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        window.localStorage.setItem('theme', 'light');
        document.getElementById("theme-toggle").classList.add('moon');
        document.getElementById("theme-toggle").classList.remove('sun');
    }
}

let theme = localStorage.getItem('theme');

theme = theme || (window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' : 'light');

setTheme(theme);

function modeSwitcher() {
    let currentMode = document.documentElement.getAttribute('data-theme');

    if (currentMode === "dark") {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}