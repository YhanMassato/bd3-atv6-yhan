const database = 'BD3-NoSQL-AtlasMongoDB-yhan'

const collection = 'bd3-nosql-atv6'

use(database);

//db[collection].find()

db[collection].find(
    {"cpf":"111.111.111.22"},{"cod_aluno":0}
)
