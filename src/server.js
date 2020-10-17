 // Importar dependência/pacote/plugin
 const express = require('express');
 const path = require('path')
 const pages = require('./pages.js')
 // Iniciando o express
 const server = express()
 server
 .use(express.static('public'))

// Configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

 // Criar uma rota
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)


// Ligar o servidor
server.listen(1234)