/*
const e = require('express');
const request = require('supertest');

const app = require('../../src/server');

const mail = `${Date.now()}@ipca.pt`;

test('Test #1 - Listar os utilizadores ', () =>{
    return request(app).get('/users')
    .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});

test ('Test #2 - Inserir utilizadores ', () => {
    return request(app).post('/users')
    .send({ name: 'Pedro Gomes', email: mail, password: '12345'})
    .then((res) => {
        expect(res.status).toBe(201);
        expect(res.body.name).toBe('Pedro Gomes');
        expect(res.body).not.toHaveProperty('password');
    });
});

test('Test #2.1 - Guardar a palavra-passe encriptada', async () => {
    const res = await request(app).post('/users')
        .send({ name: 'Pedro Gomes', email: `${Date.now()}@ipca.pt`,  password: '12345'});
        expect(res.status).toBe(201);

        const {id} = res.body;
        const userDb = await app.services.user.findOne({ id });
        expect(userDb.password).not.toBeUndefined();
        expect(userDb.password).not.toBe('12345');
});

test('Teste #3 - Inserir utilizador sem nome', () =>{
    return request(app).post('/users')
    .send({ email: mail, password: '12345' })
    .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body.error).toBe('Nome é um atributo obrigatório');
    });
});

test('Teste #4 - Inserir utilizador sem email', async () => {
    const result = await request(app).post('/users')
    .send({ name: 'Pedro Miguel', password: '12345'});
    expect(result.status).toBe(400);
    expect(result.body.error).toBe('O email é um atributo obrigatório');
});

test('Teste #5 - Inserir utilizador sem password', (done) => {
    request(app).post('/users')
    .send({name: 'Pedro Gomes', email: mail})
    .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body.error).toBe('A palavra-passe é um atributo obrigatório');
        done();
    });
});

test('Teste #6 - Inserir utilizadores', () => {
    return request(app).post('/users')
        .send({name: 'Pedro Gomes', email: mail, password: '12345'})
        .then((res) => {
            expect(res.status).toBe(400);
            expect(res.body.error).toBe('Email duplicado na BD');
        });
});

*/
