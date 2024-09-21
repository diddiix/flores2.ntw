document.addEventListener('DOMContentLoaded', () => {
    // Inicialmente oculta las secciones que no deberían mostrarse
    document.getElementById('uglyImage').classList.add('hidden');
    document.getElementById('message').classList.add('hidden');
    document.getElementById('flowerSection').classList.add('hidden');
});

function showUglyImage() {
    document.getElementById('warning').classList.add('hidden');
    document.getElementById('uglyImage').classList.remove('hidden');
}

function showMessage() {
    document.getElementById('uglyImage').classList.add('hidden');
    document.getElementById('message').classList.remove('hidden');
}

