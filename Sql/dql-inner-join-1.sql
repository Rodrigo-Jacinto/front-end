select gafanhotos.nome, cursos.nome, cursos.ano -- Mostrando as colunas da tabela gafanhotos e cursos
from gafanhotos inner join cursos -- inner join mostra quais tabela irão  fazer relação
on gafanhotos.cursopreferido = cursos.idcurso -- mostras qual a forma irá ser feita a relação das duas tabelas
order by gafanhotos.nome;

select g.nome, c.nome, c.ano
from gafanhotos as g /* cria apelido para a tabela gafanhotos */ inner join cursos as c /* cria apelido para a tabela cursos */
on g.cursopreferido = c.idcurso
order by g.nome;

select g.nome, c.nome, c.ano
from gafanhotos as g left outer join cursos as c -- Mostras os registros que tem relação, e os registros da tabela gafanhotos que não tem relação com cursos 'cursopreferido = null'
on g.cursopreferido = c.idcurso;

select g.nome, c.nome, c.ano
from gafanhotos as g right outer join cursos as c -- Mostras os registros que tem relação, e os registros da tabela cursos que não tem relação com gafanhotos 'cursopreferido = null'
on g.cursopreferido = c.idcurso;

select g.id, g.nome, c.nome
from gafanhotos as g inner join cursos as c
on g.cursopreferido = c.idcurso
where g.id = '1'; -- Faz com que ele retorne apenas um registro da relação entre as tabelas
