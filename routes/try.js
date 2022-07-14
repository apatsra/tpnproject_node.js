var express = require('express');
var router = express.Router();

/* GET home page. */
// get / is get path in app.js eg. app.use(/home) / mean /home
router.get('/', function(req, res, next) {
  res.render('try', { title: 'Express' });
});

module.exports = router;