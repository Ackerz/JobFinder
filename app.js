const express = require("express");
const app = express();
const db = require('./db/connection.js')
const port = 3000;
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended: false}));
// Conexao bd
db.authenticate()
.then(() => {
    console.log("Conectado com sucesso");
}).catch(err => {
    console.log("Erro ao conectar", err)
})

// Rotas
app.get("/", (req, res) => {
    res.send("Pagina Aberta")
})

app.use('/jobs', require('./routes/jobs.js'));

app.listen(port)