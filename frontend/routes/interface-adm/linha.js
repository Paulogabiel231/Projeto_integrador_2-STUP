var express = require('express');
var router = express.Router();

// ROTA CADASTRAR
router.get('/cadastrar', function(req, res, next) {
  res.sendFile('adm/linhas/cadastro-linha.html', { root: "views" });
});

// ROTA REGISTROS
router.get('/registro', function(req, res, next) {
    res.sendFile('adm/linhas/registro-linha.html', { root: "views" });
});

router.get('/editar/:id', function (req, res, next) {
  res.sendFile('adm/linhas/editar-linha.html', { root: "views" });
});

router.get('/visualizar/:id', function (req, res, next) {
  res.sendFile('adm/linhas/visualizar-linha.html', { root: "views" });
});

module.exports = router;