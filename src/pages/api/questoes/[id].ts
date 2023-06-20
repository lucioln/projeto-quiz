// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import questoes from '../bancoDeQuestões'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const id = Number(req.query.id)

    const questao = questoes.filter(questao => questao.id === id)
    if(questao.length === 1){
        res.status(200).json(questao[0].embaralharRespostas().toObject())
    }else{
        res.status(204).end()
    }
}
