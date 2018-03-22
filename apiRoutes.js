var apiRoutes = require('express').Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Employee = require('./models/Employee');

//to get params from post req
apiRoutes.use(bodyParser.urlencoded({extended : true}));
apiRoutes.use(bodyParser.json());

//get all users
apiRoutes.get('/employees', (req, res,  next) => {
    Employee.find({}, (err, emps) => {
        if(err) throw err;
        res.send(emps);
    });
});

//get one
apiRoutes.get('/employees/:id', (req, res, next) => {
    
});

//post i.e., create new data
apiRoutes.post('/', (req, res, next) => {
    
});

apiRoutes.put('/employee/:id', (req, res, next) => {
    res.json({
        success : true
    });
});

apiRoutes.delete('/employee/:id', (req, res, next) => {
    res.json({
        success : true
    });
});

module.exports = apiRoutes;
