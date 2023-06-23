import styles from "@/styles/Botao.module.css"
import Link from "next/link"


interface BotaoProps {
    texto: string
    href?: string
    color?: string
    onClick?: (e: any) => void
}

export default function Botao(props: BotaoProps) {

    function renderizarBotao() {
        return (
            <button
                className={styles.botao}
                style={{
                    backgroundColor: props.color ?? '#9885F0'
                }}
                onClick={props.onClick}
            >
                {props.texto}
            </button>
        )
    }

    return props.href ? (
        <Link href={props.href}>
            {renderizarBotao()}
        </Link>
    ) : renderizarBotao()
}