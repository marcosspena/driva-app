const express = require(`express`);
const router = express.Router();

//Lista de rotas modulares
const companies = require(`./companies`)(express);

//Utilizando as rotas modulares
router.use(`/api/companies`, companies);

// //Rota base api
router.get(`/api`, (req, res, next) => {
  res.json({ message: `Teste driva app!` });
});

module.exports = router;
