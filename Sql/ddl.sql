create database cadastro //Cria banco de dados
default character set utf8 // Define o tipo de codificação dos dados
default collate utf8_general_ci;

drop database nome_do_banco;  //Apaga o banco de dados

use nome_do_banco; // Indica qual banco de dados será utilizado
describe nome_da_tabela; // Descrição da Tabela

//Cria tabela no banco de dados
  create table nome_da_tabela(

    id int not null AUTO_INCREMENT,
    nome varchar(30) not null, /* O tipo varchar tem o espaço de no máximo de 30, não sendo fixo, alternando dependendo do tamanho do nome */

    idade date,
    sexo enum('M', 'F'), /*Recebe apaenas os valores informados */
    peso decimal(5,2), /* 5 digitos mais 2 digitos depois da virgula */
    altura decimal(3,2),
    nacionalidade varchar(30) default 'Brasil', /* caso não seja informado, coloca Brasil por padrão */
    exemplo char(1), /* O tipo char define um fixo, armazenando o espaço definido */

    PRIMARY KEY(id) /* Chave Primária */

) default charset = utf8;

CREATE TABLE IF NOT EXISTS gafanhoto_assiste_curso (
    id INT AUTO_INCREMENT,
    data DATE,
    idgafanhoto INT,
    idcurso INT,

    PRIMARY KEY (id),
    FOREIGN KEY (idgafanhoto) REFERENCES gafanhotos (id),
    FOREIGN KEY (idcurso) REFERENCES cursos (idcurso)

)  DEFAULT CHARSET=UTF8;
