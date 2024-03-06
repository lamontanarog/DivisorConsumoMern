
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:5173'
}))
//Importar conexión mongoDB
const objetobd = require('./conexion');

// //Importación del archivo de rutas y modelo usuario
const rutaspeticiones = require('./rutas/peticiones');

//Importar body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/rutas', rutaspeticiones)

app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend Node.js. Corriendo...')
})


//Configurar server básico
app.listen(5000, function(){
    console.log('El servidor NODE está corriendo correctamente')
})