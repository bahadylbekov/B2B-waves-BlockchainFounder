var express = require('express');
var bodyparser = require('body-parser');
var morgan = require('morgan');
var config = require('./config.js');

var app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/../public'));


var api = require('./api/waves-dtx')(app, express);
app.use('/api', api);

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
})



app.listen(config.port, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Server started on port 3000");
    }
});