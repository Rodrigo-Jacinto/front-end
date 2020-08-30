/// ***************** DB *******************

//show dbs - mostra todos os banco de dados criados

//use nome_do_banco - passo a utilizar o banco, caso não exista cria novo banco

db.dropDatabase()


// ***************** Collection ******************* 

db.createCollection("nome da collection") //- cria coleção no BD

db.getCollectionNames() //- mostra todas as coleções do BD

db.collection_name.drop() //- Deleta a collection
