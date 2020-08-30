select * from cursos; -- Mostra todas as colunas todos os registros da tabela cursos

select ano,nome,carga from cursos -- mostra apenas a colunas selecionadas da tabela cursos
order by nome; -- ordena os registros selecionados por ordem alfabética

select nome, carga, descricao, ano from cursos
where ano >= '2016' -- usando operadores lógicos na seleção
order by nome;

select nome, ano from cursos
where ano between 2014 and 2018 -- seleciona todos os registros que tenham o ano na faixa de 2014 á 2018
order by ano desc, nome asc;
-- desc = ordena ano do maior para o menor
-- asc = ordena alfabeticamente

select nome, descricao, ano from cursos
where ano in ('2014', '2018') -- seleciona todos os registros que tenham exatamente o ano 2014 ou 2018
order by ano;

select nome, carga, totaulas from cursos
where carga > 35 and totaulas <= 30; -- utilizando operadores lógicos e relacionais para selecionar registros
-- and = e, &

select nome, carga, totaulas from cursos
where carga > 20 or totaulas < 30 -- utilizando operadores lógicos e relacionais para selecionar registros
-- or  = ou, ||
