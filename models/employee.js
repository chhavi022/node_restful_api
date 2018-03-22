var mongoose = require('mongoose');
var Schema =  mongoose.Schema;

module.exports = mongoose.model('Employee', new Schema({
    Employeeid : Number,
    EmployeeName : String,
    EmployeeDOB : String
}));