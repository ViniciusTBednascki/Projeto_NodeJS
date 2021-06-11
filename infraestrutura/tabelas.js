class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarAtendimento()
        this.criarPets()
    }

    criarAtendimento() {
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'
        
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else {
                console.log("Tabela Atendimentos criada com sucesso")
            }
        })
    }

    criarPets() {
        const query = 'CREATE TABLE IF NOT EXISTS pets (id int NOT NULL AUTO_INCREMENT, nome VARCHAR(50), imagem VARCHAR(200), PRIMARY KEY(id))'

        this.conexao.query(query, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('A tabela de Pets foi criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas