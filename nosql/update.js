// ----- Estrutura dos Documentos ------

//Atualiza coluna de documento especifico
db.collection.update({"coluna":valor}, {$set:{"coluna-atualiza":valor}})

//Atualiza todos os documentos que possuam a coluna CPF
db.collection.update({}, {$set:{"CPF":555}}, {multi:true})

//com o comando "upsert" caso o registro não exista ele cria com os dados abaixo.
db.collection.update({"Nome":"Neymar"}, {$set:{"CPF":3333}}, {multi:0, upsert:1});

// ----- Estrutura das Collections -----

//Remove coluna de todos os documentos 

//O parâmetro false avisa que não é um upsert e o parâmetro true é a confirmação para remover em todos os documentos, e não apenas no primeiro.

db.megasena.update({}, {$unset:{"Acumulado_Mega_da_Virada":1}}, false, true);

//Muda o nome da coluna
db.megasena.update({}, {$rename:{"Concurso": "Rodada"}}, false,true);
