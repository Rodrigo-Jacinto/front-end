
//soma o campo salario de os documentos da collection jogadores
db.jogadores.aggregate([

    { $group: { '_id': null, soma: { $sum: '$salario' } } }

]);


//soma o camapo salario agrupando por nome dos times
db.jogadores.aggregate([

    { $group: { '_id': '$time', soma: { $sum: '$salario' } } }

]);

//soma o campo salario, agrupa por times, mas mostra a apenas o resultado do grupo que tem o campo time como valor 'Barcelona'

db.jogadores.aggregate([
    
    { $match: { 'time': 'Barcelona' } },
    { $group: { '_id': '$time', soma: { $sum: '$salario' } } }

]);