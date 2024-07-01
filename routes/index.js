var express = require('express');
const { exec } = require('child_process');
var router = express.Router();
// Endpoint para ejecutar truffle migrate
router.post('/migrate', (req, res) => {
  exec('truffle migrate', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error ejecutando truffle migrate: ${error}`);
      return res.status(500).send(`Error ejecutando truffle migrate: ${stderr}`);
    }
    console.log(`truffle migrate output: ${stdout}`);
    res.send(`truffle migrate completado: ${stdout}`);
  });
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
