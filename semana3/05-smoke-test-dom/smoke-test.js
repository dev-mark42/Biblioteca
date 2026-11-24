// Smoke Test básico para verificar que los elementos esenciales existen
function runSmokeTest() {
    console.log('🧪 Ejecutando Smoke Test...');
    const elements = ['hamburger', 'themeToggle', 'searchForm', 'booksGrid', 'contactForm'];
    let passed = 0;

    elements.forEach(id => {
        if (document.getElementById(id)) {
            passed++;
        } else {
            console.error(`❌ Elemento faltante: #${id}`);
        }
    });

    if (passed === elements.length) {
        console.log('✅ Smoke Test superado: Todos los elementos base existen.');
    }
}

// Ejecutar después de que el DOM esté listo
document.addEventListener('DOMContentLoaded', runSmokeTest);
