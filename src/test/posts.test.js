/*
const e = require('express');
const request = require('supertest');

const app = require('../../src/server');

test('Teste #1 - Inserir Post', () => {
return request(app).post(MAIN_ROUTE)
  .set('authorization', `bearer ${user.token}`)
  .send({ Dados do Post, user_id: user.id, post_id: post.id })
  .then((res) => {
  expect(res.status).toBe(201);
  expect(res.body.name).toBe(Dados do Post);
  });
});
                                      
test('Test #2 - Listar Post', () => {
return app.db('posts')
  .insert({ Dados do Post, user_id: user.id, post_id: post.id })
  .then(() => request(app).get(MAIN_ROUTE))
  .set('authorization', `bearer ${user.token}`)
  .then((res) => {
  expect(res.status).toBe(200);
  expect(res.body.length).toBeGreaterThan(0);
  });
});
                                      
test('Test #3 - Listar Posts por ID', () => {
return app.db('posts')
  .insert({ Dados do Post, user_id: user.id, post_id: post.id }, ['id'])
  .then((post) => request(app).get(`${MAIN_ROUTE}/${post[0].id}`))
  .set('authorization', `bearer ${user.token}`)
  .then((res) => {
  expect(res.status).toBe(200);
  expect(res.body.name).toBe(Dados do Post);
  expect(res.body.user_id).toBe(user.id);
  });
});
                                      
test('Test #4 - Atualizar Post', () => {
return app.db('posts')
  .insert({ Dados do Post, user_id: user.id, post_id: post.id }, ['id'])
  .then((post) => request(app).put(`${MAIN_ROUTE}/${post[0].id}`)
  .set('authorization', `bearer ${user.token}`)
  .send({ Dados do Post }))
  .then((res) => {
  expect(res.status).toBe(200);
  expect(res.body.name).toBe(Dados do Post);
  });
});
                                      
test('Test #5 - Remover Post', () => {
return app.db('posts')
  .insert({ Dados do Post, user_id: user.id, post_id: post.id }, ['id'])
  .then((acc) => request(app).delete(`${MAIN_ROUTE}/${acc[0].id}`)
  .set('authorization', `bearer ${user.token}`)
  .send({ Dados do Post }))
  .then((res) => {
  expect(res.status).toBe(204);
  });
});
*/