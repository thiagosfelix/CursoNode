/* COMANDOS SQL */

mysql -h localhost -u root -p /* ABRIR O MySQL NO CMD */

SHOW DATABASES; /* MOSTRA TODOS OS BANCOS */

CREATE DATABASE sistemaDeCadastro; /* CRIA O BANCO DE DADOS */

USE sistemaDeCadastro; /* FAZ COM QUE ESSE BANCO ESTEJA EM USO*/

CREATE TABLE usuarios( /* CRIA A TABELA*/
    nome VARCHAR(50), /* COLUNA nome, DO TIPO VARCHAR E CAPACIDADE DE 50 CARACTERES */
    email VARCHAR(100),
    idade INT
);

SHOW TABLES; /* MOSTRA AS TABELAS DENTRO DESSE BANCO */

/* ADD VALORES À TABELA */
INSERT INTO usuarios(idade, email, nome) VALUES (
    8,
    "maria@teste22.com",
    "Maria Clara"
);

SELECT * FROM usuarios; /* MOSTRA TUDO QUE TEM NA TABELA */

SELECT * FROM usuarios WHERE idade = 8; /* WHERE É COMO UM FILTRO, UMA CONDIÇÃO */

SELECT * FROM usuarios WHERE nome = "Lucas";

SELECT * FROM usuarios WHERE idade >= 18;

DELETE FROM usuarios; /* DELETA TODOS OS REGISTROS DA TABELA */

DELETE FROM usuarios WHERE nome = "Victor"; /* DELETA TODOS OS REGISTROS QUE SE ENQUADRAM NA CONDIÇÃO */

UPDATE usuarios SET nome = "Nome de Teste"; /* VAI ALTERAR TODOS OS REGISTROS DA COLUNA NOME PARA "Nome de Teste" */

UPDATE usuarios SET nome = "Nome de Teste" WHERE nome = "Luis Silva"; /* VAI ALTERAR O NOME DO REGISTRO QUE ESTÁ COM NOME LUIS SILVA