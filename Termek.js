class Termek{
    #adat;
    #divElem;
    #buttonElem;
    constructor(adat, szuloElem){
        this.#adat = adat;
        szuloElem.append(`<div class="termek"><h3>${this.#adat.termekNev}</h3><p>${this.#adat.termekAr}</p><button></div>`);
        this.#divElem = $(".termek:last-child");
        this.#buttonElem = $(".termek:last-child button");

        this.#buttonElem.on("click", () => {
            this.kattintasTrigger();
        })
    }

    getAdat(){
        return this.#adat;
    }

    kattintasTrigger(){
        const esemeny = new CustomEvent("gombNyomas", {detail: this});
        window.dispatchEvent(esemeny)
    }
}

export default Termek;