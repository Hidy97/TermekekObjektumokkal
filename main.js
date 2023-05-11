import Termekek from "./Termekek.js";
import Aszinkron from "./Aszinkron.js";

$(function(){
    const asszinkron = new Aszinkron();
    asszinkron.adatbe("adat.json", beolvasas);
})

function beolvasas(adat){
    console.log(adat);
    console.log(adat.adatLista);
    new Termekek(adat.adatLista);
}
//new Termekek(adatLista);