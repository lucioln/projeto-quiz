// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import questoes from '../bancoDeQuestões'
import { Embaralhar } from '../../../../functions/arrays'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const idQuestoes = questoes.map(questao => questao.id)
    res.status(200).json(Embaralhar(idQuestoes))
}
