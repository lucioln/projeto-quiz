import styles from "@/styles/Questionario.module.css"
import QuestaoModel from "../model/questao"
import Questao from "./Questao"
import Botao from "./Botao"

interface QuestionarioProps{
    questao: QuestaoModel
    ultima: boolean
    onResponse: (questao: QuestaoModel) => void
    irPraProximoPasso: () => void
}

export default function Questionario(props: QuestionarioProps){

    function onResponse(indice: number){
        if(!props.questao.respondida){
            props.onResponse(props.questao.responderCom(indice))
        }
    }

    return (
        <div className={styles.questionario}>
            <Questao 
                valor={props.questao} 
                tempoPraResponder={6} 
                onResponse={onResponse}
                tempoEsgotado={props.irPraProximoPasso}
            />
            <Botao 
                texto={props.ultima ? 'Finalizar' : 'Proximo'}
                onClick={props.irPraProximoPasso}
            />
        </div>
    )
}   