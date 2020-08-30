-- Selecionando três tabelas com inner join
select g.id, g.nome, gac.idgafanhoto, c.idcurso, c.nome, gac.idcurso  from gafanhotos g
inner join gafanhoto_assiste_curso gac
on g.id = gac.idgafanhoto -- ligação da tabela gafanhotos com a tabela gafanhoto_assiste_curso
inner join cursos c
on c.idcurso = gac.idcurso;-- ligação da tabela curso com a tabela gafanhoto_assiste_curso



select c.nome, cc.data_consumo, p.nome, b.tipo from cliente_consome as cc inner join clientes as c
on cc.id_cliente = c.id
left join pratos as p
on cc.id_prato = p.id
left join bebidas as b
on cc.id_bebida = b.id; 
