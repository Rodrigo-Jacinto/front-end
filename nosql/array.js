// ********* INSERINDO NO ARRAY ******************

// ---- inserindo em array de documento já existente -----

db.livros.update({ "_id": ObjectId("5be5f466f0c2f6a6ea173321") }, {
    $push: { "categorias": "IA" }
})

// --- Inserindo vários valores no array ---- 

db.livros.update({ "_id": ObjectId("5be5f466f0c2f6a6ea173321") }, {
    $push: {
        "comentarios": {
            $each: [
                { "nome": "Mark", "comentario": "Recomendo esse livro" },
                { "nome": "Bill", "comentario": "Exzcelente livro" }
            ]
        }
    }
})


// **************** ATUALIZA ARRAY *****************

// --- Ataualiza todo em categoria de "tecnologia" para "matématica" -----

db.livros.update({ "_id": ObjectId("5be5f466f0c2f6a6ea173321"), "categorias": /tecnologia/i }, { $set: { "categorias.$": "Matemática" } })


// -- Atualiza propriedade de documento incorporado ---

db.livros.update({ "_id": ObjectId("5be5f466f0c2f6a6ea173321"), "comentarios.nome": /guanabara/i }, { $set: { "comentarios.$.nome": "Alan Turing" } })


// **************** REMOVE DO ARRAY ***********

// --- Removendo elementos de um array ---

db.livros.update({ "_id": ObjectId("5be5f466f0c2f6a6ea173321") }, { $pull: { "categorias": "Computação" } });

// -- Remove um documento dentro de um array de documentos ---

db.livros.update({ "_id": ObjectId("5be5f466f0c2f6a6ea173321") }, { $pull: { "comentarios": { "nome": /bill/i } } });

// -- Remove elementos do array, primeiro "-1" ou ultimo "1"

db.livros.update({ "_id": ObjectId("5be5f466f0c2f6a6ea173321") }, { $pop: { "categorias": 1 } })

//A operação a seguir remove todas as instâncias do valor 0 e 5 da matriz de scores :

db.livros.update({ _id: 1 }, { $pullAll: { scores: [0, 5] } })

