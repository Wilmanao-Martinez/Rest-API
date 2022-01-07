const mongoose = require('../MongoDB/mongoConnect.js');
const models = require('../Data_Models/User_Models');
const User = mongoose.model('User');

exports.list_users = function(req, res){
    User.find(function(err, users){
        if(err)
        res.send(err);
        res.json(users);
    })
}

exports.create_user = function(req, res){
    User.save(function(err, user){
        if(err)
        res.send(err);
        res.json(user);
    })
}

exports.read_user = function(req, res){
    User.findById(req.params.id, function(err, user){
        if(err)
        res.send(err);
        res.json(user);
    })
}

exports.update_user = function(req, res){
    User.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, user){
        if(err)
        res.send(err);
        res.json(user);
    })
}

exports.delete_user = function(req, res){
    User.remove({_id: req. params.id}, req.body, {new: true}, function(err, user){
        if(err)
        res.send(err);
        res.json({message: 'Usuário removido com sucesso'});
    })
}