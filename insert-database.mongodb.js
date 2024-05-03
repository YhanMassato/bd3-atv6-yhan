const database = 'BD3-NoSQL-AtlasMongoDB-yhan'

const collection = 'bd3-nosql-atv6'

use(database);

// db[collection].insertOne(
//     {
//         "cod_aluno":"1",
//         "nome":"ALUNO01",
//         "cpf": "111.111.111.22",
//         "rg": "11.111.111-1",
//         "telefone_aluno":"(11) 91111-1111",
//         "telefone_responsavel":"(11)92222-2222",
//         "email":"aluno01@gmail.com",
//         "dataNasc":"2005-01-01"
//     }
// )

db[collection].insertMany([
    {
        "cod_aluno":"2",
        "nome":"ALUNO02",
        "cpf": "222.222.222.22",
        "rg": "22.222.222-2",
        "telefone_aluno":"(22) 92222-2222",
        "telefone_responsavel":"(22)93333-3333",
        "email":"aluno02@gmail.com",
        "dataNasc":"2006-02-02"
    },
    {
        "cod_aluno":"3",
        "nome":"ALUNO03",
        "cpf": "333.333.333.33",
        "rg": "33.333.333-3",
        "telefone_aluno":"(33) 93333-3333",
        "telefone_responsavel":"(33)94444-4444",
        "email":"aluno03@gmail.com",
        "dataNasc":"2007-03-03"
    },
    {
        "cod_aluno":"4",
        "nome":"ALUNO04",
        "cpf": "444.444.444.44",
        "rg": "44.444.444-4",
        "telefone_aluno":"(44) 94444-4444",
        "telefone_responsavel":"(44)95555-5555",
        "email":"aluno04@gmail.com",
        "dataNasc":"2008-04-04"
    },
    {
        "cod_aluno":"5",
        "nome":"ALUNO05",
        "cpf": "555.555.555.55",
        "rg": "55.555.555-5",
        "telefone_aluno":"(55) 95555-5555",
        "telefone_responsavel":"(55)96666-6666",
        "email":"aluno05@gmail.com",
        "dataNasc":"2009-05-05"
    },
    {
        "cod_aluno":"6",
        "nome":"ALUNO06",
        "cpf": "666.666.666.66",
        "rg": "66.666.666-6",
        "telefone_aluno":"(66) 96666-6666",
        "telefone_responsavel":"(66)97777-7777",
        "email":"aluno06@gmail.com",
        "dataNasc":"2010-06-06"
    },
    {
        "cod_aluno":"7",
        "nome":"ALUNO07",
        "cpf": "777.777.777.77",
        "rg": "77.777.777-7",
        "telefone_aluno":"(77) 97777-7777",
        "telefone_responsavel":"(77)98888-8888",
        "email":"aluno07@gmail.com",
        "dataNasc":"2011-07-07"
    },
    {
        "cod_aluno":"8",
        "nome":"ALUNO08",
        "cpf": "888.888.888.88",
        "rg": "88.888.888-8",
        "telefone_aluno":"(88) 98888-8888",
        "telefone_responsavel":"(88)99999-9999",
        "email":"aluno08@gmail.com",
        "dataNasc":"2012-08-08"
    },
    {
        "cod_aluno":"9",
        "nome":"ALUNO09",
        "cpf": "999.999.999.99",
        "rg": "99.999.999-9",
        "telefone_aluno":"(99) 99999-9999",
        "telefone_responsavel":"(99)10101-0101",
        "email":"aluno09@gmail.com",
        "dataNasc":"2013-09-09"
    },
    {
        "cod_aluno":"10",
        "nome":"ALUNO10",
        "cpf": "101.101.101.10",
        "rg": "10.101.101-0",
        "telefone_aluno":"(10) 10101-0101",
        "telefone_responsavel":"(10)11111-1111",
        "email":"aluno10@gmail.com",
        "dataNasc":"2014-10-10"
    }

])