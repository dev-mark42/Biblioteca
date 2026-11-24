// Función que "hidrata" el DOM con los datos de los libros
window.hydrateBooks = function(books) {
    const grid = document.getElementById('booksGrid');
    grid.innerHTML = ''; // Limpiar esqueletos

    if (!books || books.length === 0) {
        grid.innerHTML = '<p>No se encontraron libros.</p>';
        return;
    }

    const fragment = document.createDocumentFragment();

    books.forEach((book, index) => {
        const cover = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : 'https://via.placeholder.com/200x280';
        const title = book.title || 'Desconocido';
        const author = book.author_name ? book.author_name[0] : 'Anónimo';

        const card = document.createElement('div');
        card.className = 'book-card';
        card.style.opacity = '0';
        card.style.animation = `fadeIn 0.5s forwards ${index * 0.05}s`;

        card.innerHTML = `
            <img src="${cover}" alt="${title}" style="width:100%; height:250px; object-fit:cover;">
            <div style="padding:1rem;">
                <h3 style="font-size:1rem; margin-bottom:0.5rem;">${title}</h3>
                <p style="font-size:0.8rem; color:#666;">${author}</p>
            </div>
        `;
        fragment.appendChild(card);
    });

    grid.appendChild(fragment);
};
