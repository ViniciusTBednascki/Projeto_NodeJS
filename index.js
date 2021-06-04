const express = require('express');

const app = express();
const PORT = 3000
var listener = app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`))

app.get('/atendimento', (req, res) => res.send("Você está na rota de atendimento"))