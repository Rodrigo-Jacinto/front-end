-- ALterações

drop table exemplo; -- Deleta toda a tabela

alter table nome_da_tabela
rename to novo_nome_tabela; -- Altera o nome da tabela

alter table nome_da_tabela
add column nome_nova_coluna varchar(20) not null default ''; -- adiciona nova colunas

alter table nome_da_tabela
add column nome_da_coluna int first; -- adiciona como primeira coluna

alter table nome_da_tabela
add column nome_da_coluna int after nome; -- adiciona depois da coluna nome

alter table cursos
add primary key(id); -- adiciona uma primary key a uma coluna existente

alter table gafanhotos
add foreign key (cursopreferido) -- Criando chave estrangeira na tabela gafanhotos 'cursopreferido' atributo criado na tabela gafanhoto
references cursos(idcurso); -- Referenciando a tabela curso com sua chave primaria 'idcurso'

alter table nome_da_tabela
drop column nome_coluna; -- remove colunas

alter table nome_da_tabela
modify column nome_coluna varchar(20) not null default -- altera o tipo e as constraints da coluna

alter table nome_da_tabela
change column nome_atual_coluna novo_nome_coluna varchar(20) not null default -- muda o nome da coluna, precisa definir constraints novamente
