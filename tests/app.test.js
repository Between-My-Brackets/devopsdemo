const request = require('supertest');
const app = require('../app/index');

describe('App Endpoints', () => {
  it('should return the home page with a welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Welcome to the DevOps Demo App!');
  });

  it('should return UP for the health check', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'UP');
  });

  it('should return version info', async () => {
    const res = await request(app).get('/version');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('version', '1.0.0');
  });
});
