const request = require('supertest');

const app = require('../app');

describe('GET /api-test/get', () => {
  it('responds with a json message', async () => {
    const response = await request(app, { http2: false })
      .get('/api/test/get')
      .query({ username: 'ddd' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(response.body.data).toEqual('Hello, ddd');
  });
});
