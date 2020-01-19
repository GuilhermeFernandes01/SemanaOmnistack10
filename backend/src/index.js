const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-gfv5q.mongodb.net/week10?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

// Métodos HTTP: GET, POST, PUT, DELETE
// Tipo de parâmetros:
// Query Params: req.body (filtros, ordenação, paginação, etc, normalmente usado em get)
// Route Params: req.params (identificar recurso, normalmente usado em get, put e delete)
// Body: request.body (dados para criação ou alteração de registro, normalmente usado em post e put)

// MongoDB: não-relacional

// cors() libera o acesso externo para qualquer tipo de aplicação
// cors({ origin: 'http://localhost:3000' })
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);