import Termek from "./Termek.js";

class Termekek{
    #adatLista = [];
    #kedvencekLista = [];
    constructor(adatLista){
        this.#adatLista = adatLista;
        this.#kedvencekLista;

        const szuloElem = $("article");
        for (let index = 0; index < adatLista.length; index++) {
            const termek = new Termek(adatLista[index], szuloElem);
        }

        $(window).on("kedvenc", (event) => {
            this.#kedvencekLista.push(event.detail);
            console.log(this.#kedvencekLista);
        })

        /**
        $(window).on("kosar", (event) => {
            this.#kedvencekLista.push(event.detail);
            console.log(this.#kedvencekLista);
        })
         */
    }


}

export default Termekek;