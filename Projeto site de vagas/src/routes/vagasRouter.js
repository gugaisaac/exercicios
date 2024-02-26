var express = require("express");
var router = express.Router();

var vagasController = require("../controllers/vagasController");

router.get("/listar", function(req,res){
    vagasController.listar(req,res);
});

router.get("/buscarImagem:id")

module.exports = router;