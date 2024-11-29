const cursor = document.querySelector('.custom-cursor');

// Suivre la souris
document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY}px`; // Position verticale
    cursor.style.left = `${e.clientX}px`; // Position horizontale
});

// Ajouter un effet au survol des éléments interactifs
document.querySelectorAll('a, button, input').forEach((element) => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5) translate(-50%, -50%)'; // Agrandir le curseur
        cursor.style.backgroundColor = 'rgba(0, 255, 0, 0.7)'; // Changer la couleur
    });

    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1) translate(-50%, -50%)'; // Revenir à la taille normale
        cursor.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Revenir à la couleur normale
    });
});
