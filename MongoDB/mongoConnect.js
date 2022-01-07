const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://db_root:root6969@cluster0.kzpie.mongodb.net/Agendamento_Cargas_Docas?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;
console.log('Conectado ao MongoDB!')

module.exports = mongoose;