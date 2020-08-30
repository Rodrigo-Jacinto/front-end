update nome_da_tabela
set nome_da_coluna = 'valor a ser modificado', carga = '40'
where id = '2' -- especifica a linha que receberá a atualização
limit 1; -- limita a atualização, para apenas 1 linha.


delete from cursos -- apaga um registro especifico da tabela
where id = '3'
limit 1;

truncate table nome_da_tabela; -- Apaga todos os dados da tabela **Atenção com esse comando**
