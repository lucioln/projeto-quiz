import QuestalModel from "../../../model/questao";
import RespostaModel from "../../../model/resposta";

const questoes: QuestalModel[] = [
    new QuestalModel(201, 'Qual bicho transmite a Doença de Chagas?',[
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barata'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro'),
    ]),
    new QuestalModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "Jerimum"?',[
        RespostaModel.errada('Caju'),
        RespostaModel.errada('Côco'),
        RespostaModel.errada('Chuchu'),
        RespostaModel.certa('Abóbora'),
    ]),
    new QuestalModel(203, 'Qual fruto é o coletivo de cães?',[
        RespostaModel.errada('Manada'),
        RespostaModel.errada('Alcateia'),
        RespostaModel.errada('Rebanho'),
        RespostaModel.certa('Matilha'),
    ]),
    new QuestalModel(204, 'Qual o triângulo tem todos os lados diferentes?',[
        RespostaModel.errada('Equilatéro'),
        RespostaModel.errada('Isóceles'),
        RespostaModel.errada('Trapézio'),
        RespostaModel.certa('Escaleno'),
    ]),
]

export default questoes