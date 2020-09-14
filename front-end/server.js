var express = require('express');
var app = express();
var port = 8084;
app.use(express.static("../front-end")); 
app.get('/', function (req, res,next) {
 res.redirect('/'); 
});
// app.get('/merchantOnBoard', function (req, res,next) {
//     res.redirect('/merchantOnBoard'); 
// });
app.get('/', function (req, res,next) {
    res.redirect('/'); 
});
app.listen(port);
console.log('gallery  Server is Listening on port:', port);