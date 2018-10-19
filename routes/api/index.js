var express = require('express')
var router = express.router

router.get('/getInfo', function (req, res, next) {
    res.json({id:1,name:"张三"})
});

module.exports = router