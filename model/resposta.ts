export default class RespostaModel {
    #valor: string
    #certa: boolean
    #revelada: boolean

    constructor(valor: string, certa: boolean, revelada: boolean = false) {
        this.#valor = valor
        this.#certa = certa
        this.#revelada = revelada
    }

    static certa(valor: string) {
        return new RespostaModel(valor, true)
    }

    
    revelar() {
        return new RespostaModel(this.#valor, this.#certa, true)
    }
    
    get valor() {
        return this.#valor
    }
    
    get certa() {
        return this.#certa
    }
    
    get reveleada() {
        return this.#revelada
    }
    
    static errada(valor: string) {
        return new RespostaModel(valor, false)
    }

    static fromObject(obj: RespostaModel): RespostaModel {
        return new RespostaModel(obj.valor, obj.certa, obj.reveleada)
    }

    toObject() {
        return {
            valor: this.#valor,
            certa: this.#certa,
            revelada: this.#revelada
        }
    }
}