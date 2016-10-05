var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Modelo = schema({
	apellido : String,
	apellido_m : String,
	nombres : String,
	//edad : Number,
	semestre : Number,
	//fecha_nac : Date,
	matricula : String
	//tutor :
	//{
	//	nombre : String,
	//	telefono : String
	//}

});


var alumnos = mongoose.model('alumnos',Modelo);
module.exports = alumnos;
