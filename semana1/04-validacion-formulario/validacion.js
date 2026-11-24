const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    if (nameInput.value.trim().length < 3) {
        nameInput.classList.add('error');
        valid = false;
    } else {
        nameInput.classList.remove('error');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add('error');
        valid = false;
    } else {
        emailInput.classList.remove('error');
    }

    if (valid) {
        if (window.showToast) window.showToast('Mensaje enviado con éxito');
        contactForm.reset();
    }
});

// Limpiar errores
nameInput.addEventListener('input', () => nameInput.classList.remove('error'));
emailInput.addEventListener('input', () => emailInput.classList.remove('error'));
