const cors       = require('cors')
const express    = require("express");
const controller = require("../controllers/controladores");


const router = express.Router();

router.get    ("/jovenes",      cors(), controller.readJovens);   // Read All
router.get    ("/padres",      cors(), controller.readPadres);   // Read All
router.get    ("/madres",      cors(), controller.readMadres);   // Read All
router.get    ("/acudientes",      cors(), controller.readAcudientes);   // Read All

router.post   ("/jovenes",      cors(), controller.createJovenes);  // Create
router.post   ("/padres",      cors(), controller.createPadres);  // Create
router.post   ("/madres",      cors(), controller.createMadres);  // Create
router.post   ("/acudientes",      cors(), controller.createAcudientes);  // Create

  module.exports = router;
  