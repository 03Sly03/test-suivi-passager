# Suivi du nombre de passagers

![image](https://user-images.githubusercontent.com/6866370/169861753-20634199-44c2-4713-9637-fc66f1eacff5.png)


La ligne 12 reliant les villes de Niort et Parthenay est desservie par des [cars roulant au biogaz](https://www.francebleu.fr/infos/transports/a-parthenay-un-car-qui-roule-au-biogaz-1561053319) et contient 7 arrêts.

| Ville                 | Arrêt                   | Heure |
| :--                   | :--                     | :--   |
| Niort                 | Gare SNCF               | 05:50 |
| Niort                 | Pl. de la Brèche        | 05:55 |
| St-Christophe-sur-Roc | Montplaisir             | 06:13 |
| Mazières-en-Gâtine    | Place des Marronniers   | 06:22 |
| St-Pardoux-Soutiers   | Rambaudières            | 06:30 |
| Parthenay             | Base de Loisirs         | 06:36 |
| Parthenay             | Av. François Mitterrand | 06:38 |
| Parthenay             | Gare routière           | 06:40 |

Afin de mieux suivre le niveau d'utilisation des véhicules déployés sur cette ligne, vous devez implémenter un système qui tient compte du nombre de passagers qui montent et qui descendent à chaque arrêt. Ce système doit être capable d'imprimer un relevé au format suivant:

```csv
Arrêt,Montées,Descentes,Nombre de passagers
Gare SNCF,10,0,10
Pl. de la Brèche,5,0,15
Montplaisir,3,7,11
...
```
Dans cet exemple, à l'arrêt Montplaisir, 3 passagers sont montés dans le véhicule et 7 passagers sont descendus. Le total de passagers à bord du véhicule est donc de 11.


# Réponse

## Dans le terminal

node app.js
