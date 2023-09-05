//importar o mongoose para poder usar o model
const mongoose = require('mongoose');

//definir o schema do model
const Schema = mongoose.Schema;

//definir o model
const CompanySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    contact: { type: String, required: true }
});

//criar o objeto do model
const Company = mongoose.model('Company', CompanySchema);

//exportar o model
module.exports = Company;