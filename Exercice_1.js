/*
 * Program name : Exercice_1
 * Author : Thierry Perroud
 * Date : 07.11.2025
 * Updated : 07.11.2025
 * Version : 1.0
 */
"use strict;"

/* Exercice 1 :
 * Vous écoutez souvent de la musique et avez regroupé vos morceaux préférés dans une playlist. Vous avez actuellement
 * 125 musiques dans votre playlist.
 */

// Stocker cette valeur dans une variable que vous nommerez selon les conventions de nommage du CPNV et du langage.
let numberOfTracks = 125;

// Afficher dans la console le nombre de musiques dans votre playlist.
console.log(numberOfTracks);

/* Vous faites un peu de ménage (certaines musiques datent, vos goûts musicaux ont évolué depuis), vous supprimez 15
 * musiques de votre playlist.
 */
numberOfTracks -= 15;

// Afficher dans la console ce nouveau nombre.
console.log(numberOfTracks);

// Vous en rajoutez 10.
numberOfTracks += 10;

// Afficher dans la console le nombre de musiques dans votre playlist.
console.log(numberOfTracks);

// Afficher dans la console « Maintenant, j’ai xxx morceaux au total dans ma playlist ».
console.log(`Maintenant, j'ai ${numberOfTracks} morceaux au total dans ma playlist`);
