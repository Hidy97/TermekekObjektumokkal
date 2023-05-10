class Termekek{
    #adatLista;
    #kedvencekLista;
    constructor(adatLista){
        this.#adatLista = adatLista;
        const szuloElem = $("article");
        for (let index = 0; index < adatLista.length; index++) {
            const termek = new Termek(adatLista[i], szuloElem);
        }
    }


}