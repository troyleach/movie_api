// const { performRequest } = require('../requestHelpers');
const { app } = require('../../app');
const request = require('supertest');
const { response } = require('express');

describe('Authorization', () => {
  describe('GET /auth', () => {
    describe('Positive results', () => {
      it('Expect 200', async done => {
        request(app)
          .get("/auth")
          .then(response => {
            expect(response.statusCode).toBe(201);
            done();
          });
      });
    });
  });
});