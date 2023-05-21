const database = require('./db');
const Cliente = require('./models/fornecedor');
// criação do servidor
const express = require('express');
const app = express();
const porta = 9443;
const bodyParser = require('body-parser');

// valores da view

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.render('formFornecedor');
});
app.get("/cadfornecedor", function(req, res) {

})
app.post('/addfornecedor', function(req, res) {
  Cliente.create({
    nome: req.body.nome,
    telefone: req.body.telefone,
    email: req.body.email,
    produto: req.body.produto
  }).then(function() {
    res.send('Cadastrado com sucesso!')
  })
})

app.listen(porta, () => { console.log('Servidor OK') });


(async () => {

  try {
    const resultado = await database.sync();
    console.log(resultado);
    const fornecedores = await Fornecedor.findAll();
    console.log("Fornecedores cadastrados: \n", fornecedores)
  } catch (error) {
    console.log('erro')
  }
})()