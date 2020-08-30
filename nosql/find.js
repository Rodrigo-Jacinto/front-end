// Recupera apenas o primeiro documento
db.collection.findOne();

// Recupera todos os documentos
db.collection.find();

// Recupera todos os documentos e formata o documento
db.collection.find().pretty();

// Busca documento específico
db.collection.find({ "coluna": valor });

// Retorna todos os documentos mostrando apenas a coluna "CONCURSO"
db.ganhadores.find({}, { "Concurso": true }).pretty()

//Exibe valores destintos de uma determinda coluna
db.pernambuco.distinct('cidades');
