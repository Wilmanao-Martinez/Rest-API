const express = require('express');
const router = express.Router();

    router.get('/', function (req, res){
        res.send('Teste de API');
    })
    
    router.get('/users', function (req, res){
        res.send('Cadastro de usuarios');
    })

module.exports = router
