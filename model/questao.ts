import { Embaralhar } from "../functions/arrays"

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

    responderCom(indice: number): QuestalModel{
        const acertou = this.#respostas[indice]?.certa
        const respostas = this.#respostas.map((resposta,i ) => {
            const respostaSelecionada = indice === i
            const deveRevelar = respostaSelecionada || resposta.certa
            return  deveRevelar ? resposta.revelar() : resposta
        })
        return new QuestalModel(this.#id, this.enunciado, respostas, acertou)
    }

    embaralharRespostas(): QuestalModel{
        let respostasEmbaralhadas = Embaralhar(this.#respostas)
        return new QuestalModel(this.#id, this.#enunciado, respostasEmbaralhadas, this.#acertou)
    }

    toObject(){
        return {
            id: this.#id,
            enununciado: this.#enunciado,
            acertou:this.#acertou,
            respondida: this.respondida,
            respostas: this.#respostas.map(resp => resp.toObject()),
        }
    }
}