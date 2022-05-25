const express = require("express");
const bodyparser = require("body-parser");
const multer = require("multer");
const app = express();
const upload = multer({ dest: "uploads/" });
const cors = require('cors');
const PORT = 3000;

app.use(bodyparser.json());
app.use(cors());

require("./src/routes/lista_cab.route")(app);
require("./src/routes/lista_det.route")(app);
require("./src/routes/categoria.route")(app);
require("./src/routes/articulo.route")(app);



app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
}).on('error', (err) => {console.log('ERROR DE CONEXION, PUERTO EN USO',err.message)});