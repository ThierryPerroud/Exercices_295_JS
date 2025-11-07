/*
 * Program name : Exercice_4
 * Author : Thierry Perroud
 * Date : 07.11.2025
 * Updated : 07.11.2025
 * Version : 1.0
 */
"use strict;"

/* Exercice 4 :
 * Créer une fonction pour chaque opération de base : addition de 2 nombres, soustraction de 2 nombres, multiplication
 * de 2 nombres, divisions de 2 nombres. Faites en sorte que si une division par 0 est faite, une exception soit jetée.
 * On pourra utiliser les fonctions fléchées pour les expérimenter.
 */

const add = (x, y) => x + y;
const substract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => {
    try {
        if (y === 0) throw "Division par 0 interdite";
        return x / y;

    } catch (e) {
        console.log(e);
    }
}

/* Tester avec différentes valeurs vos fonctions. Afficher le résultat des opérations dans la console. Vérifier que si
 * une division par 0 se produit, un message d’erreur du type « Division par zéro interdite » s’affiche dans la console.
 */

console.log(add(10, 2));
console.log(substract(10, 2));
console.log(multiply(10, 2));
console.log(divide(10, 2));
console.log(divide(10, 0));