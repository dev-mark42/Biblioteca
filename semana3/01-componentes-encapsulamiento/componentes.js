// Componente de tarjeta de libro encapsulado (POO)
class BookCardComponent {
    constructor(book, index) {
        this.book = book;
        this.index = index;
    }

    render() {
        const cover = this.book.cover_i ? `https://covers.openlibrary.org/b/id/${this.book.cover_i}-M.jpg` : 'https://via.placeholder.com/200x280';
        const title = window.sanitizeHTML ? window.sanitizeHTML(this.book.title) : this.book.title;
        const author = this.book.author_name ? window.sanitizeHTML(this.book.author_name[0]) : 'Anónimo';

        return `
            <div class="book-card" style="animation-delay: ${this.index * 0.05}s">
                <img src="${cover}" alt="${title}" loading="lazy" style="width:100%; height:250px; object-fit:cover;">
                <div style="padding:1rem;">
                    <h3 style="font-size:1rem; margin-bottom:0.5rem;">${title}</h3>
                    <p style="font-size:0.8rem; color:#666;">${author}</p>
                </div>
            </div>
        `;
    }
}
