process.env.AMBIENTE_PROCESSO = "desenvolvimento";
// process.env.AMBIENTE_PROCESSO = "producao";

let express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = 3330;

let app = express();

var vagasRouter = require("./src/routes/vagasRouter") 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/vagas", vagasRouter);

// app.get('/', function(){
//     res
// })

// app.get('/listar', function(req,res){
//     res.send('Primeira rota com express')
// });


app.listen(PORTA, function() {
    console.log(`Servidor do site está rodando rodando: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", banco local (MySQL Workbench). \n
    \t\tSe "producao", banco remoto (SQL Server em nuvem Azure)`);
});