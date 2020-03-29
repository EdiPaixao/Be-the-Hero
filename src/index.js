const express = require('express');
const cors = require('cors');
const routes = require('./routes');

/**
 * Tipos de parametros:
 * 
 * Query Params: parametro nomeados na rota após o "?" (Filtrosm paginação)
 * Route params: Parametros utilizados para indentificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * Tipos de banco
 * (Relacional)
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * 
 * (Não relacional)
 * MySQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() <= KNEX
 */


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); 