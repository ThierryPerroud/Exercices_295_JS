/*
 * Program name : Exercice_5
 * Author : Thierry Perroud
 * Date : 07.11.2025
 * Updated : 07.11.2025
 * Version : 1.0
 */
"use strict;"

/* Installer la librairie dayjs qui gère les dates. Pour cela, lancez « npm install dayjs » dans le terminal.
 * L’importer dans votre code.
 */

// import dayjs from "dayjs";

// Créer un objet littéral « Person » avec ses informations (nom, prénom, date de naissance, pouvoir).
let Person = {
    lastName: "Perroud",
    firstName: "Thierry",
    birthDate: '1896-07-26',
    power: "Immortality"
};

// Afficher dans la console ces informations l’une après l’autre.
console.log(`nom : ${Person.lastName}`);
console.log(`prénom : ${Person.firstName}`);
console.log(`date de naissance : ${Person.birthDate}`);
console.log(`pouvoir : ${Person.power}`);

/* Si cette personne a un âge élevé (supérieur à 100 ans) et qu’elle a comme pouvoir d’être immortelle, écrivez votre
 * admiration dans la console.
 */

if (Person.birthDate < "1925-11-07" && Person.power === "Immortality") console.log("votre admiration");