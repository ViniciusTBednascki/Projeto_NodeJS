const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimento', (req, res) => res.send("Você está na rota de atendimento e está realizando uma requisição GET"))

    app.post('/atendimento', (req, res) => {
        console.log('Requisição POST realizada')

        const atendimento = req.body
        Atendimento.adicionar(atendimento)

        res.send("Você está na rota de atendimento e está realizando uma requisição POST")
    })
}