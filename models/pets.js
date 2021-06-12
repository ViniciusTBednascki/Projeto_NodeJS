const conexao = require('../infraestrutura/conexao')
const uploadDeArquivos = require('../arquivos/uploadDeArquivos')

class Pet {
    adicionar(pet, res) {
        const query = 'INSERT INTO pets SET ?'

        uploadDeArquivos(pet.imagem, pet.nome, (erro, novoCaminho) => {
            if(erro) {
                res.status(400).json({erro})
            }else {
                const novoPet = { nome: pet.nome, imagem: novoCaminho }
                console.log(novoPet)
                conexao.query(query, novoPet, erro => {
                    if(erro) {
                        console.log(erro)
                        res.status(400).json(erro)
                    }else {
                        res.status(200).json(novoPet)
                    }
                })
            }
        })
        }
}

module.exports = new Pet()