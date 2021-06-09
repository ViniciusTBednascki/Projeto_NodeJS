const fs = require('fs')


fs.createReadStream('../assets/novaFotoCachrro.jpg').pipe(fs.createWriteStream('../assets/novaFotoCachrro-stream.jpg')).on('finish', (erro) => {
    console.log("Imagem salva")
})

