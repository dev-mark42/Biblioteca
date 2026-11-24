// Auditoría de etiquetas semánticas (Simula HMR / Chequeo en caliente)
document.addEventListener('DOMContentLoaded', () => {
    const semanticTags = ['header', 'nav', 'main', 'section', 'footer'];
    let found = 0;

    semanticTags.forEach(tag => {
        if (document.querySelector(tag)) found++;
    });

    console.log(`🔍 Auditoría Semántica: ${found}/${semanticTags.length} etiquetas HTML5 encontradas.`);
});
