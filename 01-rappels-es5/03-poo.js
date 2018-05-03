function personne(nom, prenom, pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.age = "NON RENSEIGNE";
    this.afficherPersonne = function(){
        return this.prenom + " " + this.nom + " alias " + this.pseudo;
    }
    this.getInitiales = function(){
        return prenom.charAt(0)+nom.charAt(0);
    }
}
var jules = new personne("LEMAIRE", "Jules", "jules77");
var paul = new personne("LEMAIRE", "Paul", "paul44");
console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
console.log(jules.afficherPersonne());
console.log(paul.nom);
console.log(paul.prenom);
console.log(paul.pseudo);
console.log(paul.afficherPersonne());
jules.pseudo="jules44";
console.log(jules.pseudo);
console.log(jules.age);
jules.age=30;
console.log(jules.age);
console.log(jules.getInitiales());
var robert = new personne();
robert.prenom="Robert";
robert.nom = "LEPREFET";
robert.pseudo = "robert44";
robert.getNomComplet = robert.afficherPersonne;
console.log(robert.getNomComplet());