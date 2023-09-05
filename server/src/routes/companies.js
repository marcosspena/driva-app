module.exports = (express) => {
    //Aqui eu instancio o router do express
    const router = express.Router();

    //Utilizando o middleware para interpretar o body da requisição
    router.use(express.json());

    //Importando o controller necessário
    const companiesController = require(`../controllers/companiesController`);

    //Rota para trazer as empresas cadastradas
    router.get(`/`, (req, res, next) => {
        companiesController.getAllCompanies(req, res, next);
    });

    //Rota para trazer os dados de uma empresa específica
    router.get(`/:id`, (req, res, next) => {
        companiesController.getCompanyById(req, res, next);
    });

    //Rota para cadastrar uma nova empresa
    router.post(`/store`, (req, res, next) => {
        companiesController.createCompany(req, res, next);
    });

    return router;
}