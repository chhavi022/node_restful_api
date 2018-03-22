var mongoose = require('mongoose');
var Schema =  mongoose.Schema;

const employee = new Schema({
    Employeeid : Number,
    EmployeeName : String
});

module.exports = mongoose.model('employee', employee);