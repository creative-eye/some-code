/**
 * Basic node server to load mocks via XHR
 * It's very old (2years) so please don't judge
 */
const compression = require('compression');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const express = require('express');
const app = express();


const mocks = require('./mocks');

const setHeaders = function (res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Expose-Headers", "X-AUTH-TOKEN");
};

const allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Pragma, Cache-Control, If-Modified-Since, X-AUTH-TOKEN");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-AUTH-TOKEN");
    res.setHeader("Access-Control-Expose-Headers", "X-AUTH-TOKEN");
    // res.header("X-AUTH-TOKEN", "asdfasdasdas");
    next();
};


app.use(bodyParser.json({limit: '150mb'}));
app.use(bodyParser.urlencoded({limit: '150mb', extended: true}));

app.use(allowCrossDomain);
//log requests to the console
app.use(morgan('dev'));
app.use(compression({
    treshold: 256
}));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());

app
    .get('/api/first', function (req, res, next) {
        setHeaders(res);

        res.json(mocks.first);
        res.send(mocks.first);
        res.end();
    })
    .get('/api/second', function (req, res, next) {
        setHeaders(res);

        res.json(mocks.second);
        res.end();
    })


app.listen(8080);
console.log('listening');
