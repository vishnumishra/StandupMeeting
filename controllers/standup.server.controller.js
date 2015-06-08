var StandUp = require("../model/standup.server.model.js");

exports.create = function(req,res){
    var entry = new StandUp({
        memberName:req.body.memberName,
        project:req.body.project,
        workYesterday:req.body.workYesterday,
        workToday:req.body.workToday,
        impediment:req.body.impediment
    });
    entry.save();
    res.redirect(301,"/");
};

exports.list = function(req,res){

    var query = StandUp.find();
    query.sort({createdOn:"desc"})
        .limit(5)
        .exec(function(err,result){
            console.log("------------"+err+" "+result);
            res.render('index',{title:"StandUp - Meeting-List",notes:result});
        });
};

exports.filerByMember = function(req,res){
    var query = StandUp.find();
    var filter = req.body.memberName;
    query.sort({createdOn:"desc"});

    query.exec(function(err,result){
        if(err){console.log("err: "+err)}
        res.render('index',{title:"standUp ------Meeting",notes:result});
    });
};
exports.getNote = function(req,res){
    res.render('/newnote',{title:'StandUp - New Note'});
};