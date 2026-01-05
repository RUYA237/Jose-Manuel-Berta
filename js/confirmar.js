function toggleAcompanante() {
    const select = document.getElementById('acompanante-select');
    const hiddenField = document.getElementById('hidden-acompanante');
    
    if (select.value === 'acompanado') {
        hiddenField.style.display = 'block';
    } else {
        hiddenField.style.display = 'none';
    }
}

function toggleNinos() {
    const select = document.getElementById('ninos-select');
    const hiddenField = document.getElementById('hidden-ninos');
    
    if (select.value === 'si') {
        hiddenField.style.display = 'block';
    } else {
        hiddenField.style.display = 'none';
    }
}