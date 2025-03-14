// Gestion du mode sombre/clair
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Fonction pour basculer entre les modes
function toggleTheme() {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i> Light Mode' : '<i class="fas fa-moon"></i> Dark Mode';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Appliquer le thème sauvegardé
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
} else {
    body.classList.add('light-mode');
}

// Écouteur d'événement pour le bouton
themeToggle.addEventListener('click', toggleTheme);
