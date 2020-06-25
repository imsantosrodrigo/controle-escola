// Configuração de rotas
const express = require('express');
const routes = express.Router();

// Importa os controllers
const teachers = require('./app/controllers/teachers');
const students = require('./app/controllers/students');

// Rota inicial
routes.get('/', function (req, res) {
    return res.redirect('/teachers');
});

// Rotas professores
routes.get('/teachers', teachers.index);
routes.get('/teachers/create', teachers.create);
routes.post('/teachers', teachers.post);
routes.get('/teachers/:id', teachers.show);
routes.get('/teachers/:id/edit', teachers.edit);
routes.put('/teachers', teachers.update);
routes.delete('/teachers', teachers.delete);

// Rotas alunos
routes.get('/students', students.index);
routes.get('/students/create', students.create);
routes.post('/students', students.post);
routes.get('/students/:id', students.show);
routes.get('/students/:id/edit', students.edit);
routes.put('/students', students.update);
routes.delete('/students', students.delete);

// Exporta o arquivo
module.exports = routes;