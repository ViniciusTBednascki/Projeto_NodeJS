const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect(erro => {
    if(erro){
        console.log(erro)
    }else{
        console.log("conectado ao banco de dados com sucesso")
    
        Tabelas.init(conexao)
        const app = customExpress()

        const PORT = 3000
        app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`))
    }
})