insert into nome_da_tabela (colunas) values (volores aqui, entre aspas);

  -- Exemplo
  insert into pessoas -- pode evitar de colocar as colunas, caso seja colocado todos os valores e em ordem.
    values
    (default, 'João', '1999-05-05', 'M', '82.50', '1.80', default),
    (default, 'Maria', '1992-10-05', 'F', '62.50', '1.50', 'Zelandia'),
    (default, 'Marilla', '1990-02-12', 'F', '72.50', '1.75', default);
    -- DEFAULT = colocar o valor que foi definido na criação da tabela
