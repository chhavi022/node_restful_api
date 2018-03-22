var apiRoutes = require('express').Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');
var Employee = require('./models/employee');

//to get params from post req
apiRoutes.use(bodyParser.urlencoded({extended : false}));
apiRoutes.use(bodyParser.json());

mongoose.connect(config.db_url);

//get all users
apiRoutes.get('/employees', (req, res, next) => {
    Employee.find({}, (err, emps) => {
        if(err) throw (err);
        res.json(emps);
    });
});

apiRoutes.get('/setup', function(req, res){
    var newUser = new Employee({
        Employeeid : 4,
        EmployeeName : "Megha",
        EmployeeDOB : "11/05/1995"
    });

    newUser.save(function(err){
        if(err) throw err;
        console.log("User saved successfully");
        res.json({ success : true });
    });
});

//get one
apiRoutes.get('/employees/:id', (req, res, next) => {
    Employee.findOne({Employeeid : req.params.id}, (err, emp) => {
        if(err) res.send(err);
        res.json(emp);
    });
});

//post i.e., create new data
apiRoutes.post('/employees', (req, res, next) => {
    var newUser = new Employee({
        Employeeid : req.query.Employeeid,
        EmployeeName : req.query.EmployeeName,
        EmployeeDOB : req.query.EmployeeDOB
    });

    newUser.save(function(err){
        if(err) throw err;
        console.log("User saved successfully");
        res.json({ success : true });
    });
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
