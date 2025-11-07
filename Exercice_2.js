/*
 * Program name : Exercice_2
 * Author : Thierry Perroud
 * Date : 07.11.2025
 * Updated : 07.11.2025
 * Version : 1.0
 */
"use strict;"

/* Exercice 2 :
 * Vous prévoyez un petit voyage. Vous allez écouter de la musique et préparer votre playlist. Déclarez les morceaux de
 * votre playlist
 */

// Déclarez un tableau playlist qui contiendra 3 titres de vos morceaux préférés.
let playlist = ["Rammstein - Sonne", "Eluveitie - Rebirth", "Girish and the Chronicles - Heaven's Crying"];

// Affichez le nombre de morceaux disponibles dans la console à partir du tableau défini ci-dessus.
console.log(playlist.length);

/* Pour changer un peu, vous demandez conseil à votre meilleur ami et lui demandez ses 2 morceaux préférés pour
 * compléter votre collection.
 */

// Ajoutez 2 morceaux au tableau playlist de manière à porter le total à 5 morceaux.
playlist[3] = "PLK - Dis-moi oui";
playlist[4] = "Luc Resval - Cette Fille";

// Affichez les morceaux disponibles dans la console. Créez une fonction pour cela.
function displayPlaylist(passedPlaylist) {
    console.log("---------- Ma playlist ----------")
    for (let i = 0; i < passedPlaylist.length; i++) {
        console.log(passedPlaylist[i]);
    }
}

displayPlaylist(playlist);

/* Malheureusement, vous n’appréciez pas du tout le dernier morceau ajouté. Il va falloir faire du tri ! */

// Supprimez le dernier morceau ajouté à votre collection. Affichez les morceaux disponibles dans la console.
playlist.splice(4, 1);
displayPlaylist(playlist);

// Supprimez aussi le 2ème morceau ajouté à votre collection. Affichez les morceaux disponibles dans la console.
playlist.splice(1, 1);
displayPlaylist(playlist);

// Supprimez le 7ème morceau ajouté à votre collection (il n’existe pas). Affichez les morceaux disponibles dans la
// console.
playlist.splice(6, 1);
displayPlaylist(playlist);