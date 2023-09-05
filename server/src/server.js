//O arquivo server é responsável por iniciar o servidor
require(`dotenv`).config(); //Carregar as variaveis de ambiente do arquivo .env
const express = require("express"); //Importar o express
const mongoose = require("mongoose"); //Importar o mongoose

const app = express();
const port = process.env.PORT;
const db = process.env.DB;
const routes = require('./routes/routes');

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
app.use(routes); //Usar as rotas definidas no arquivo routes.js
 
app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});