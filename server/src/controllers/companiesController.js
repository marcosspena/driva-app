//Importar o model para o controller
const Company = require(`../models/Company`);

//Definir as funções do controller
const companiesController = {
    //Função para trazer todas as empresas cadastradas
    getAllCompanies: (req, res, next) => {
        Company.find()
            .then(companies => res.json(companies))
            .catch(error => res.json(error));
    },

    //Função para trazer os dados de uma empresa específica
    getCompanyById: (req, res, next) => {
        const id = req.params.id;
        Company.findById(id)
            .then(company => res.json(company))
            .catch(error => res.json(error));
    },

    //Função para cadastrar uma nova empresa
    createCompany: (req, res, next) => {
        const data = req.body;
        const company = new Company(data);
        console.log(company);
        company.save()
            .then(company => res.json(company))
            .catch(error => res.json(error));
    }
};

//Exportar o controller
module.exports = companiesController;