// Registro del Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('PWA lista (SW registrado)'))
            .catch(err => console.log('Fallo PWA', err));
    });
}
