var express = require('express');
var router = express.Router();

//Router behaving as middleware via use() function
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.use('/user/:username', function(req, res, next) {
    console.log('Request Type:', req.method);
    console.log('Request Path:', req.path);
    console.log('Request Host:', req.hostname);
    console.log('Request IP:', req.ip);
    console.log('Request cookies:', req.cookies);
    next();
});


//When accessing id param, this function is triggered
router.param('id', function(req, res, next, id) {
  console.log('Called when accessing id param.');
  next();
});

//Responding to a request at /user/:id
router.get('/user/:id', function(req, res, next) {
  console.log('Responding to this as well. ');
  res.end();
});




module.exports = router;
