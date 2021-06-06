const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'DBadmin',
    password: 'mysqlnodeserver',
    database: 'agenda_petshop'
})

module.exports = conexao