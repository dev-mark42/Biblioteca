// Función de búsqueda con Fetch y Manejo de Errores
window.fetchBooksFromAPI = async function(query) {
    const grid = document.getElementById('booksGrid');

    // Skeleton Loading (Lazy Loading visual)
    grid.innerHTML = Array(8).fill('<div style="height: 350px; background: var(--border-color); border-radius: 12px; animation: pulse 1.5s infinite;"></div>').join('');

    try {
        const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=12`);
        if (!res.ok) throw new Error('Error de red');
        const data = await res.json();

        // Llama a la función de hidratación de la semana 2
        if (window.hydrateBooks) window.hydrateBooks(data.docs);

    } catch (error) {
        console.error(error);
        if (window.showToast) window.showToast('Error al cargar. Usando datos offline.', 'error');

        // Respaldo offline
        const fallback = [
            { title: "El Quijote", author_name: ["Cervantes"] },
            { title: "1984", author_name: ["Orwell"] }
        ];
        if (window.hydrateBooks) window.hydrateBooks(fallback);
    }
};
