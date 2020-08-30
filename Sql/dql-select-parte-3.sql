select carga, count(*) from cursos
group by carga; -- Agrupa os registros que tiverem as mesma quantidade de carga

select carga, count(*) from cursos
where carga > 30
group by carga
having count(carga) > 1; -- Mostra apenas os grupos que tiverem mais de 1 registro agrupado

select carga, count(*) from cursos
where ano > 2015
group by carga
having carga > (select avg(carga) from cursos)
order by carga;

select profissao, count(*) from gafanhotos
group by profissao;

select sexo, count(*) from gafanhotos
where nascimento > '2005-01-01'
group by sexo;


select nacionalidade, count(*) from gafanhotos
where nacionalidade != 'Brasil'
group by nacionalidade
having count(*) >= 3
order by nacionalidade;

select altura, count(*) from gafanhotos
where peso > '100.00'
group by altura
having altura > (select avg(altura) from gafanhotos); -- mostra apenas os grupos que tiverem registros com altura acima da média
