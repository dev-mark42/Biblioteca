// Sistema de alertas Toast reutilizable
window.showToast = function(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;

    // Estilos en línea para asegurar que funcione independientemente del CSS
    Object.assign(toast.style, {
        background: type === 'error' ? 'var(--error-color)' : 'var(--success-color)',
        color: 'white',
        padding: '1rem 2rem',
        borderRadius: '8px',
        marginTop: '10px',
        transition: 'all 0.3s',
        opacity: '0',
        transform: 'translateY(20px)'
    });

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    }, 10);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
};
