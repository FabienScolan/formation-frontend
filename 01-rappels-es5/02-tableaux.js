var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans']
villes.forEach(function(arg){
    console.log(arg);
});
function testA(arg){
    return arg.includes("a")
}
if (villes.every(testA)){
    console.log("lettreADansToutesLesVilles == true");
}
function testDash(arg){
    return arg.includes("-")
}
if (villes.some(testDash)){
    console.log("auMoinsUneVilleAvecUnTiret == true");
}
function testFilter(arg){
    return !(arg.includes("-")|| arg.includes(" "));
}
var villesSansTiretSansEspace = villes.filter(testFilter);
villesSansTiretSansEspace.forEach(function(arg){
    console.log(arg);
});
var villesMajusculeSeTerminantParS = villes.filter(function(arg){
    return arg.endsWith("s");
}).map(Function.prototype.call.bind(String.prototype.toUpperCase));
villesMajusculeSeTerminantParS.forEach(function(arg){
    console.log(arg);
});