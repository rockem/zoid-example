var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json([{name: 'HTTP', url: 'http://localhost:3002/v1/http'}])
});

module.exports = router;
