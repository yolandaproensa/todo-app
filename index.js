const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql2")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

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

