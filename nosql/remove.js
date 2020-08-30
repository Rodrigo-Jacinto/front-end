// Remove um registro específico
db.collection.remove({"coluna-busca":valor})

// Remove todos os registros
db.collection.remove({})

//Remove a collection
db.collection_name.drop();