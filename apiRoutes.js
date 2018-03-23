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
        Employeeid : req.query.id,
        EmployeeName : req.query.name,
        EmployeeDOB : req.query.dob
    });

    newUser.save(function(err){
        if(err) throw err;
        console.log("User saved successfully");
        res.json({ success : true });
    });
});

//update
apiRoutes.put('/employees/:id', (req, res, next) => {
    Employee.findOne({Employeeid : req.params.id}, (err, emp) => {
        if(err) throw err;
        emp.EmployeeName = req.query.name;
        emp.EmployeeDOB = req.query.dob;
        emp.save((err) =>{
            if(err) throw err;
            res.json({success : true});
        });
    });
});

//delete
apiRoutes.delete('/employees/:id', (req, res, next) => {
    Employee.findOneAndRemove({ Employeeid : req.params.id}, (err, deleted) => {
        if(err) throw err;
        res.json({
            success : true,
            Deleted : deleted
        });
    });
});

module.exports = apiRoutes;
