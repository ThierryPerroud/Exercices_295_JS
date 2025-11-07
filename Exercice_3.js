/*
 * Program name : Exercice_3
 * Author : Thierry Perroud
 * Date : 07.11.2025
 * Updated : 07.11.2025
 * Version : 1.0
 */
"use strict;"

/* Exercice 3 :
 * Afficher dans la console les éléments suivants jusqu’à 9 selon le modèle ci-dessous :
 * 1
 * 22
 * 333
 * 4444
 * 55555
 * ……
 * On utilisera une boucle pour cela.
 */

let loopLength = 5;

for (let i = 1; i <= loopLength; i++) {
    let number = ""
    for (let j = 1; j <= i; j++) {
        number += `${i}`
    }
    console.log(number);
}