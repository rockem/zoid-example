var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  console.log(req.body);
  res.status(201).send()
});

router.delete('/:id', function(req, res, next) {
  const id = req.param.id;
  res.send(`clock with id: ${id} deleted`);
});

module.exports = router;
