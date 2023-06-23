import QuestaoModel from "../model/questao";
import styles from "@/styles/Questao.module.css"
import Resposta from "./Resposta";
import Enunciado from "./Enunciado";
import Temporizador from "./Temporizador";

const letras = [
    {valor: 'A', cor: '#F2C866' },
    {valor: 'B', cor: '#F266BA' },
    {valor: 'C', cor: '#85D4F2' },
    {valor: 'D', cor: '#BCE596' },
]

interface QuestaoProps{
    valor: QuestaoModel
    tempoPraResponder?: number
    onResponse: (indice:number) => void
    tempoEsgotado: () => void
}

export default function Questao(props: QuestaoProps){
    const questao = props.valor

    function renderizarRespostas(){
        return questao.respostas.map((resposta, i) => {
            return <Resposta 
            key={i} 
            indice={i} 
            valor={resposta} 
            letra={letras[i].valor} 
            corFundoLetra={letras[i].cor}
            onResponse={props.onResponse}
            />
        })
    }

    return (
        <div className={styles.questao}>
            <Temporizador duracao={props.tempoPraResponder ?? 10} tempoEsgotado={props.tempoEsgotado}/>
            <Enunciado texto={questao.enunciado}/>
            {renderizarRespostas()}
        </div>
    )
}