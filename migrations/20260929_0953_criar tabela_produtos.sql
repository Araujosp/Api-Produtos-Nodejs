create table if not exists produtos(
    id int auto_increment primary key,
    nome varchar(255) NOT NULL,
    preco DECIMAL (10,2) NOT NULL,
    estoque int not null default 0,
    categoria varchar(100) NOT NULL
);