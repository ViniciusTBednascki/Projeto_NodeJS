const conexao =require('../infraestrutura/conexao')
const moment = require('moment')

class Atendimento {
    adicionar(atendimento) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        const atendimentoDatado = {...atendimento, dataCriacao, data}
        const sql = 'INSERT INTO atendimentos SET ?'

        conexao.query(sql, atendimentoDatado, (erro, resultado) => {
            if(erro){
                console.log(erro)
            }else {
                console.log(resultado)
            }
        })
    }
}

module.exports = new Atendimento