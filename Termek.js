class Termek{
    #adat;
    #divElem;
    #buttonElem;

    constructor(adat, szuloElem){
        this.#adat = adat;
        this.#buttonElem;
        
        szuloElem.append(`<div class="termek"><h3>${this.#adat.termekNev}</h3><p>${this.#adat.termekAr}</p><button class="kedvenc">Kedvencekhez</button></div>`);
        /**
         * <button class="kosar">Kosárba</button>
         */
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
        const esemeny = new CustomEvent("kedvenc", {detail: this});
        window.dispatchEvent(esemeny)
    }
}

export default Termek;