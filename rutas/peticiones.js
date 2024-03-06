const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const eschema = mongoose.Schema;

const eschemaNewPeriod = new eschema({
    periodo: String,
    costotalkwh: Number,
    costototalmensual: Number,
    costoporkwh: Number,
    anio: Number
});

const ModeloPeriodo = mongoose.model('Periodo', eschemaNewPeriod);

/*Ruta de prueba
router.get('/ejemplo', (req, res) => {
    res.end('Saludo carga desde ruta ejemplo')
})*/

//Agregar usuario
router.post('/agregarnuevoperiodo', async (req, res) => {
    const nuevoperiodo = new ModeloPeriodo({
        periodo: req.body.periodo,
        costotalkwh: req.body.costotalkwh,
        costototalmensual: req.body.costototalmensual,
        costoporkwh: req.body.costoporkwh,
        anio:req.body.anio,
        idperiodo: req.body.idperiodo
    })
    
    try{
        await nuevoperiodo.save();
        
        res.send('periodo agregado correctamente.');
    }
    catch(err){
        console.error(err);
        res.status(500).send('Error interno en el servidor');
    }
})

router.get('/obtenerperiodos', async (req, res) => {
        try{
            const periodos = await ModeloPeriodo.find({});
            res.send(periodos);
        }
        catch(err){
            console.error(err);
            res.status(500).send('Error interno en el servidor');
        }
    })


module.exports = router

// //Obtener todos los usuarios
// router.get('/obtenerusuarios', (req, res) =>{
//     ModeloUsuario.find({}, function(docs, err){
//         if(!err){
//             res.send(docs)
//         }else{
//             res.send(err)
//         }
//     })
// })


// //Obtener data de usuario
// router.post('/obtenerdatausuario', (req, res) =>{
//     ModeloUsuario.find({idusuario:req.body.idusuario}, function(docs, err){
//         if(!err){
//             res.send(docs)
//         }else{
//             res.send(err)
//         }
//     })
// })


// //actualizar usuario
// router.post('/actualizausuario', (req, res) => {
    
//     ModeloUsuario.findOneAndUpdate({idusuario:req.body.idusuario}, {
//         nombre: req.body.nombre,
//         email: req.body.email,
//         telefono: req.body.telefono
//     }, (err) => {
//         if(!err){
//             res.send('Usuario actualizado correctamente')
//         }else{
//             res.send(err)
//         }
//     })
// })

// //Borrar usuario
// router.post('/borrarusuario', (req, res) => {
    
//     ModeloUsuario.findOneAndDelete({idusuario:req.body.idusuario}, (err) => {
//         if(!err){
//             res.send('Usuario borrado correctamente')
//         }else{
//             res.send(err)
//         }
//     })
// })

