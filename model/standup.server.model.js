var mongoose = require('mongoose');
var schema = mongoose.Schema;

var standUpSchema = new schema({
    memberName:{type:String,required:true},
    project:String,
    workYesterday:String,
    workToday:String,
    impediment:String,
    createdOn:{type:Date,default:Date.now}
});

module.exports = mongoose.model('StandUp',standUpSchema);