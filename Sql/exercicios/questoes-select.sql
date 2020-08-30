/* Questão 01*/ select * from gafanhotos where sexo = 'F';

/* Questão 02*/ select * from gafanhotos
where nascimento between '2000-01-01' and '2015-12-31';

/* Questão 03*/ select * from gafanhotos
where sexo = 'M' and profissao = 'programador';

/* Questão 04*/ select * from gafanhotos
where sexo = 'F' and nome like 'J%' and nacionalidade = 'Brasil';

/* Questão 05*/ select * from gafanhotos
where sexo = 'M' and nome like '%silva%' and peso < '100.00' and nacionalidade <> 'Brasil';

/* Questão 06*/ select max(altura) from gafanhotos
where sexo = 'M' and nacionalidade = 'Brasil';

/* Questão 07*/ select avg(peso) from gafanhotos;


/* Questão 08*/ select min(peso) from gafanhotos
where sexo = 'F' and nacionalidade = 'brasil' and nascimento between '1990-01-01' and '2000-12-31';

/* Questão 09*/ select count(*) from gafanhotos
where sexo = 'F' and altura > '1.90';
