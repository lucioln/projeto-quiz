export default class QuestalModel{
    #id: number
    #enunciado: string
    #respostas: any[]
    #acertou: boolean
    // #respondida: boolean
    constructor(id: number, enunciado: string, respostas: any[], acertou: boolean = false){
        this.#id = id
        this.#enunciado = enunciado
        this.#respostas = respostas
        this.#acertou = acertou
    }

    get id(){
        return this.#id
    }
    
    get enunciado(){
        return this.#enunciado
    }

    get respostas(){
        return this.#respostas
    }
 
    get respondida(){
        for(let resposta of this.#respostas){
            if(resposta.revelada) return true
        }

        return false
    }

    toObject(){
        return {
            id: this.#id,
            enununciado: this.#enunciado,
            respostas: this.#respostas.map(resp => resp.toObject()),
            acertou:this.#acertou
        }
    }
}