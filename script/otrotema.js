document.addEventListener('DOMContentLoaded', function() {
    const tema = document.querySelector('.theme-checkbox');
    const claro = document.getElementById('claro');
    const escuro = document.getElementById('escuro');

    tema.checked = localStorage.getItem('theme') === 'dark';

    if (tema.checked) {
        escuro.removeAttribute('disabled');
    } else {
        claro.removeAttribute('disabled');
    }
});

document.querySelector('.theme-checkbox').addEventListener('change', function() {
    const claro = document.getElementById('claro');
    const escuro = document.getElementById('escuro');

    if (this.checked) {
        localStorage.setItem('theme', 'dark');
        escuro.removeAttribute('disabled');
        claro.setAttribute('disabled', '');
    } else {
        localStorage.setItem('theme', 'light');
        claro.removeAttribute('disabled');
        escuro.setAttribute('disabled', '');
    }
});
