var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('announce_mes');
});

module.exports = router;