console.log("01 - Fonctions");
function additionner(nb1, nb2){
    return nb1+ nb2;
}
function multiplier(nb1, nb2){
    return nb1 * nb2;
}
function afficherOperation(nomOperation, operation, nb1, nb2){
    console.log(nomOperation + " [nb1 = " + nb1 + " nb2 = " + nb2 + "] = " + operation(nb1, nb2));
    
}
var nombre1=10;
var nombre2=20;
var resultat1 = additionner(nombre1, nombre2);
console.log("Resultat 1 : " +resultat1);
var somme = additionner;
var resultat2= somme(nombre1, nombre2)
console.log("Resultat 2 : " +resultat2);
var resultat3 = multiplier(nombre1, nombre2);
console.log("Resultat 3 : " +resultat3);
afficherOperation("Somme", additionner, 20, 40);
afficherOperation("Multiplication", multiplier,10, 20);
afficherOperation("Soustraction", function(nb1,nb2){ return nb1-nb2;}, 15, 5);