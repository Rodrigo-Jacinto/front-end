
//Insere novo documento na collection.
db.collection_name.insert({ "coluna": valor, "coluna2": valor2 });


//Insere vários documentos ao mesmo tempo
db.NomeColeção.insertMany([{ documento: 1 }, { documento: 2 }])


//OBS-1: casso a collection não exista, ele cria a collection e insere o novo documento.
//OBS-2: uma collection pode ter documentos com colunas diferentes. 


