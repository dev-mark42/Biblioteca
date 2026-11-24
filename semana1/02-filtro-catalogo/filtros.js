// Este archivo se encarga de los enlaces del menú de categorías.
// La lógica se conecta con la API en app.js, pero aquí definimos el evento.
const navLinks = document.getElementById('navLinks');
navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.dataset.category) {
        e.preventDefault();
        const category = e.target.dataset.category;
        document.getElementById('searchInput').value = category;
        // Disparamos el evento de búsqueda para que app.js lo escuche
        document.getElementById('searchForm').dispatchEvent(new Event('submit'));
    }
});
