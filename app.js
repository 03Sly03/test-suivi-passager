let addBusStop = require('./lineModifications/addBusStop');
let addPassengers = require('./lineModifications/addPassengers');
let lineReport = require('./report/lineReport');
let updateBusStop = require('./lineModifications/updateBusStop');
let createFile = require('./report/createFile');


// 1er rapport de la ligne 12 sans changement
lineReport(12);

// 2ème rapport de la ligne 12 avec ajout de passagers qui montent et descendent à un arrêt de bus spécifique
console.log('!! modification de données des passagers qui montent et descendent !! =>');
addPassengers("Place des Marronniers", 20, 5);
lineReport(12);

// 3ème rapport de la ligne 12 avec l'ajout et mise à jour de gares
console.log("!! ajout de ville supplémentaire avec une gare !!");
addBusStop(12, 'Ma Ville', 'Array', '4:50');
addBusStop(12, 'City', 'Object', '9:00');
addBusStop(12, 'Target', 'La cible', '7:00');
lineReport(12);

console.log("!! mise à jour: ajout d'une gare dans une ville déjà existante !! =>");
updateBusStop(12, 'Niort', 'Le puit', '5:52');
lineReport(12);

// 4ème rapport de la ligne 12 avec un cas ou le nombre de passager dans le bus serai négatif
console.log("!! insertion de données non cohérente !! =>");
addPassengers("Gare routière", 0, 23);
lineReport(12);



// 1er rapport pour la ligne 50
console.log("!! Ligne 50 !! =>");
lineReport(50);

// 2ème rapport pour la ligne 50
console.log("!! ajout d'une ville sur la ligne 50 !! =>");
addBusStop(50, 'Carton', 'Papier', '13:12');
lineReport(50);

// Création du rapport

createFile(lineReport(12), "rapport de la ligne 12");

createFile(lineReport(50), "rapport de la ligne 50");
