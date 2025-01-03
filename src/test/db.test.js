const request = require('supertest');

const { closeConnection } = require('@config/db');

const app = require('../app');

describe('POST /user/add', () => {
  it('responds with a json message', async () => {
    const response = await request(app, { http2: false })
      .post('/api/user/add')
      .send({ name: 'ddd', age: 20 })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
    await closeConnection();
    expect(response.body.data).toEqual('OK');
  });
});
