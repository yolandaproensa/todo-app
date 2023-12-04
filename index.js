const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql2")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

//Converter dados do formlário em objeto JavaScript
app.use(express.urlencoded({
    extended: true
}))

//Rotas
app.post('/criar', (req, res) => {
    const descricao = req.body.descricao
    const completa = 0

    const sql = `
    INSERT INTO tarefas (descricao, completa)
    VALUES ('${descricao}', '${completa}')
    `

    conexao.query(sql, (erro => {
        if (erro) {
            return console.log(erro)
        }

        res.redirect('/')
    }))
})

app.get('/', (req, res) => {
    res.render(`home`)
})

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "todoapp",
    port: 3306

})

conexao.connect((erro) => {
    if (erro) {
        return console.log(erro)
    }

    console.log("Estou conectado ao MySQL.")

    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000!")
    })
})