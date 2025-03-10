// const minuteinput = document.querySelector("minute");
// const Gobuttone = document.querySelector("buttone");
// const timeplay = document.querySelector("time");
// const message = document.querySelector("h1");

// let compteur;

// function startcompteur() {
//     let timeentrer = parseInt(minuteinput.value) * 60;
//     if(isNaN(timeentrer) || timeentrer <=0) {
//         alert("Veillez entrer une valeur entre 1 et 60 minuteinput.")
//         return;
//     }

//     clearInterval(compteur);

//     compteur = setInterval(() => {
//         let minutes = Math.floor(timeentrer /60);
//         let secondes = timeentrer % 60;

//         timeplay.textContent = `${String(minutes).padStart(2, "0")}:${String(secondes).padStart(2, "0")}`;

        
//         if(timeentrer <= 0) {
//             clearInterval(compteur);
//             timeplay.textContent = "00:00";
//             message.style.display = "block";
//         }

//         timeentrer--;
//     }, 1000);
// }

// Gobuttone.addEventListener("click", startcompteur);

// Sélection des éléments HTML avec un sélecteur valide
const minuteinput = document.querySelector("#minute");
const Gobuttone = document.querySelector("#buttone");
const timeplay = document.querySelector("#time");
const message = document.querySelector("h1");

let compteur; // Variable pour stocker le timer

// Fonction pour démarrer le compte à rebours
function startcompteur() {
    let timeentrer = parseInt(minuteinput.value) * 60;

    // Vérification de la saisie utilisateur
    if (isNaN(timeentrer) || timeentrer <= 0) {
        alert("Veuillez entrer une valeur entre 1 et 60 minutes.");
        return;
    }

    clearInterval(compteur); // Réinitialise le timer avant de le redémarrer

    message.style.display = "none"; // Cache "C'est terminé !" au démarrage

    // Démarrage du compte à rebours
    compteur = setInterval(() => {
        let minutes = Math.floor(timeentrer / 60);
        let secondes = timeentrer % 60;

        // Mise à jour de l'affichage du temps
        timeplay.textContent = `${String(minutes).padStart(2, "0")}:${String(secondes).padStart(2, "0")}`;

        // Vérifie si le temps est écoulé
        if (timeentrer <= 0) {
            clearInterval(compteur); // Arrête le compte à rebours
            timeplay.textContent = "00:00"; // Affiche "00:00"
            message.style.display = "block"; // Affiche "C'est terminé !"
        }

        timeentrer--; // Diminue le temps restant
    }, 1000);
}

// Ajoute un écouteur d'événement au bouton "Go"
Gobuttone.addEventListener("click", startcompteur);
