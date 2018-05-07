class Sejour {
    constructor(private _nom:string, private _prix:number){
    }
    public get nom(){
        return this._nom;
    }
    public get prix(){
        return this._prix;
    }
}
class SejourService{
    private sejours:Sejour[] = [];
    constructor(){
        this.sejours.push(new Sejour("Paris",100));
        this.sejours.push(new Sejour("Rio de Janeiro",600));

    }
    getSejourByName(nomSejour:String):Sejour{
        let filtre = this.sejours.filter(function(arg){
           return nomSejour===arg.nom;
        });
        return filtre[0];
    }
}
let sejourservice = new SejourService();
let s:Sejour = sejourservice.getSejourByName("Paris");
console.log(s.nom + " " + s.prix);