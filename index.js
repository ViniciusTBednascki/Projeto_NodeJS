const customExpress = require('./config/customExpress')
const app = customExpress()

const PORT = 3000
var listener = app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`))
