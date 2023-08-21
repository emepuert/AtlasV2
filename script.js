document.addEventListener("DOMContentLoaded", function() {
    const elements = [
        { id: "Activites", delay: 1000 },
        { id: "AnciensTravaux", delay: 1000 },
        { id: "Fac", delay: 1000 },
        { id: "Sig", delay: 1000 },
        { id: "OldJob", delay: 1000 },
        { id: "Nege", delay: 1000 },
        { id: "Contact", delay: 1000 },
        { id: "Texte", delay: 1000 },
        { id: "maison", delay: 1000 },
    ];

const sigGroups = document.querySelectorAll(".sigtest");
const popup = document.getElementById("popup");

elements.forEach(elementInfo => {
    const group = document.getElementById(elementInfo.id);
    setTimeout(function() {
        group.classList.add("animated-group", "active");
    }, elementInfo.delay);
});

sigGroups.forEach(function(sigGroup) {
    sigGroup.addEventListener("mouseover", function() {
        sigGroup.style.cursor = "pointer";
    });

    sigGroup.addEventListener("mouseout", function() {
        sigGroup.style.cursor = "default";
    });

    sigGroup.addEventListener("click", function(event) {
        event.stopPropagation();

        const imageUrl = sigGroup.getAttribute("data-image-url");
        if (imageUrl) {
            popup.innerHTML = `<img src="${imageUrl}" alt="Image" />`;
            popup.style.display = "block";
        } else {
            const popupText = sigGroup.getAttribute("data-popup-text");
            popup.innerHTML = popupText;
            popup.style.display = "block";
        }
    });
});

document.addEventListener("click", function(event) {
    const clickedOutside = Array.from(sigGroups).every(function(sigGroup) {
        return !sigGroup.contains(event.target);
    });

    if (clickedOutside && !popup.contains(event.target)) {
        popup.style.display = "none";
    }
});
});

const clignotementElements = document.querySelectorAll('.clignotement');

clignotementElements.forEach(element => {
  element.addEventListener('mouseenter', () => {
    element.style.animationPlayState = 'paused';
    element.style.opacity = 1;
    element.classList.add('hovered'); // Ajoute une classe pour gérer le survol
  });

  element.addEventListener('mouseleave', () => {
    element.style.animationPlayState = 'running';
    element.style.opacity = ''; // Réinitialise l'opacité à sa valeur par défaut
    element.classList.remove('hovered'); // Supprime la classe après le survol
  });
});

// Récupérer les éléments HTML
const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const switchButton = document.getElementById("switchButton");

// Ajouter un gestionnaire d'événement au bouton
switchButton.addEventListener("click", function () {
  // Inverser la visibilité des images
  if (image1.style.display === "none") {
    image1.style.display = "block";
    image2.style.display = "none";
  } else {
    image1.style.display = "none";
    image2.style.display = "block";
  }
});





