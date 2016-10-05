var express = require('express');
var router = express.Router();

var Modelo = require('../models/modelo');

//router.get('/',function(req,res,next){
//	Modelo.find({},function(err1,data){
//	if (err1)
//	console.log(err1); 
	
//		res.json(data);
//	});
//});



router.get('/',function(req,res,next){
	var id = req.params.id;
	Modelo.find({},function(err1,data){
	if (err1)
	console.log(err1); 
	
		res.json(data);
	});
});


router.delete('/',function(req,res,next){
	Modelo.remove(req.body,function(err2,data){
	//Modelo.find({},function(err1,data){
	//if (err1)
	//console.log(err1); 
	var objeto = req.body;
	objeto.nombres = String (req.body.nombres);
		res.json(data);
	});
});




router.post('/',function(req,res,next){
	Modelo.create(req.body,function(err2,data){
		//if (err1) 
			//console.log(err1);
		var objeto= req.body;
		
		objeto.apellido =String(req.body.apellido);
		objeto.apellido_m = String(req.body.apellido_m);
		objeto.nombres = String(req.body.nombres);
		objeto.semestre = Number(req.body.semestre);

		res.json(data);
	});
	
});



router.put('/:nombres',function(req,res,next){
	var nombres= req.params.nombres;
	Modelo.findOne({nombres:nombres},function(err,data){
		if(err)
			console.log(err);
		data.apellido = req.body.apellido;
		//data.tutor.telefono = req.body.telefono;
		Modelo.update(nombres,data,function(err1,newdata){
			if (err1)
				console.log(err1);
			res.json(newdata);
		});
	});		
});

module.exports = router;
