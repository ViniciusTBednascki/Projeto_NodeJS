module.exports = app => {
    app.get('/atendimento', (req, res) => res.send("Você está na rota de atendimento e está realizando uma requisição GET"))

    app.post('/atendimento', (req, res) => {
        console.log(req.body)    
        res.send("Você está na rota de atendimento e está realizando uma requisição POST")
    })
}