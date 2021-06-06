const conexao =require('../infraestrutura/conexao')
const moment = require('moment')
const atendimentos = require('../controllers/atendimentos')

class Atendimento {
    adicionar(atendimento, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')

        const dataValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteValido = atendimento.cliente.length >= 5

        const validacoes = [
            {
                nome: 'data',
                valido: dataValida,
                mensagem: "A data deve ser maior ou igual a data atual"
            },
            {
                nome: 'cliente',
                valido: clienteValido,
                mensagem: "Cliente deve ter pelo menos cinco caracteres"
            }
        ]
        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if(existemErros){
            res.status(400).json(erros)
        }else {
            const atendimentoDatado = {...atendimento, dataCriacao, data}
    
            const sql = 'INSERT INTO atendimentos SET ?'
            conexao.query(sql, atendimentoDatado, (erro, resultado) => {
                if(erro){
                    res.status(400).json(erro)
                }else {
                    res.status(201).json(resultado)
                }
            })
        }
    }
}

module.exports = new Atendimento