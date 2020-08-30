use cadastro;

-- % = senquência de caractere ou nenhum
-- _ = obriga que tenha um caracter

select * from gafanhotos
where nome like 'b%'; -- Seleciona registros que tem o nome começados com 'b'


select * from gafanhotos
where nome like '%R'; -- Seleciona registros que tem o nome terminado com 'R'


select * from gafanhotos
where nome like '%silva%'; -- Seleciona registros que tenha 'silva' em qualquer parte do nome


select * from cursos
where nome like '%p_'; -- Seleciona registros que tem o nome terminado com 'p' e que tenha mais um caractere


select distinct nacionalidade from gafanhotos; -- Mostra todas as nacionalidades sem repeti-las

select count(nome) as total from cursos; -- Conta a quantidade de registros, podendo usar o nome de uma coluna ou '*'
-- where carga > 40;

select max(carga) from cursos; -- Retorna o maior valor que tenha no coluna carga

select min(totaulas) as Menor_total_auals from cursos; -- Retorna o menor valor que tenha na coluna totaulas

select sum(totaulas) from cursos; -- Da a soma total de carga de todos os cursos

select sum(totaulas) from cursos
where ano = '2016'; -- Da a soma total de carga dos cursos do ano 2016

select avg(totaulas) from cursos
where ano = '2016'; -- Média da coluna totaulas
