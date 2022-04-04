var express = require('express');
var router = express.Router();

/* GET  page. */
router.get('/', function(req, res, next) {
    //represent to view 
  res.render('slip', { title: 'Express' });
});

module.exports = router;