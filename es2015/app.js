let favoriteCityId = "rome";
console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);
//citiesId = [];
citiesId.push("tokyo");
console.log(citiesId);
function getWeather(cityId){
    let city = cityId;
    let temperature = 20;
    return "{city : " + city + ", temperature = " + temperature + "}";
}
const weather = getWeather(favoriteCityId);
console.log(weather);
const {city, temperature} = weather;
console.log(city +  " " +temperature);
let  [parisId, nycId,...othercitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othercitiesId.length);
class Trip{
    constructor(id, name, imageUrl){
        this.id=id;
        this.name=name;
        this.imageUrl=imageUrl;
    }
    toString() {
        return "Trip [" + this.id + ", " + this.name + ", "  + this.imageUrl + ", "  + this._price +"]";
    }
    set Price(prix){
        this._price=prix
    }
    get Price(){
        return this._price;
    }
    static getDefaultTrip() {
        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg");
    }
}
let parisTrip=new Trip("paris", "Paris", "img/paris.jpg");
console.log(parisTrip);
console.log(parisTrip.name);
console.log(parisTrip.toString());
parisTrip._price = 100;
console.log(parisTrip.toString());
const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());
class FreeTrip extends Trip{
    constructor(id, name, imageUrl){
        super(id,name,imageUrl);
        super._price=0;
    }
    toString(){
        return "Free" + super.toString();
    }
}
const freeTrip = new FreeTrip("nantes","Nantes","img/nantes.jpg");
console.log(freeTrip.toString());
class TripService {

    constructor() {
        // TODO Set of 3 trips
        //
        let t1 = new Trip('paris', 'Paris', 'img/paris.jpg')
        let t2 = new Trip('nantes', 'Nantes', 'img/nantes.jpg')
        let t3 = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
        this.trips = new Set();
        this.trips.add(t1);
        this.trips.add(t2);
        this.trips.add(t3);
    }

    findByName(tripName) {
        return new Promise(function (resolve, reject) {
            if(this.trips.has(tripName)){
                resolve(trips.get(tripName).toString());
            }else{
                reject("No trip with name " + tripName);
            }
        })
    }
}

class PriceService {

    constructor() {
        // TODO Map of 2 trips
        // 'paris' --> price = 100
        // 'rio-de-janeiro' --> price = 800)
        // no price for 'nantes'
        let voyagesPrix = new Map();
        voyagesPrix.set("paris", 100);
        voyagesPrix.set("rio-de-janeiro", 800);
    }

    findPriceByTripId(tripId) {
        // TODO return promise
        return new Promise(function (resolve, reject) {
            if(voyagesPrix.has(tripId)){
                resolve("Price found : " + voyagesPrix.get(tripId));
            }else{
                reject("No trip with Id " + tripId);
            }
        })
    }
}
tripService  = new TripService();
tripService.findByName("paris");