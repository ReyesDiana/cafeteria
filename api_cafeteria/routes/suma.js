var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({"suma":"Endpoint para suma"});
});

/* GET suma doble. */
router.get('/doble', function(req, res, next) {
  res.json({"suma":"Endpoint para suma doble"});
});

/* GET suma triple. */
router.get('/triple/:valor/:valor2', function(req, res, next) {
	var valor = parseInt(req.params.valor);
	var valor2 = parseInt(req.params.valor2);

	var suma = valor * valor2;
  res.json({"suma":"Multiplicacion de", "valor" : suma});
  res.json({"eone3iuib" : valor});
});

module.exports = router;
