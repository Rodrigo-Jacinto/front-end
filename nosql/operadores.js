// Operadores de comparação

// $gt - maior
// $gte - maior ou igual

// $lt - menor
// $lte - menor ou igual

db.megasena.find({ 'ganhadores_sena': { $gt: 4 } });

// in - procura por vários valores
db.megasena.find({ 'ganhadores_sena': { $in: [4, 5, 6] } });

//ne - procura por valor que não seja o informado
db.megasena.find({ 'ganhadores_sena': { $ne: 4 } });

//nin - procura por valores que não sejam os informados, 
db.megasena.find({ 'ganhadores_sena': { $nin: [3, 4, 5] } });

//incremeta o valor do campo sálario em 200
db.jogadores.updateOne({'nome':/pablo/i}, {$inc:{salario:200}});