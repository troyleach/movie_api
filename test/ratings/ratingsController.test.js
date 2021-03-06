// const { performRequest } = require('../requestHelpers');
const { app } = require('../../app');
const request = require('supertest');
const { response } = require('express');

// I understand this was not part of the challenge, but it was easier for me
// to create at least a index, I had to create the model 
// FIXME: create a testing DB
describe('Ratings', () => {
  describe('GET /ratings', () => {
    describe('Positive results', () => {
      it('Expect 200', async done => {
        request(app)
          .get("/ratings")
          .then(response => {
            expect(response.statusCode).toBe(200);
            done();
          });
      });

      it('Expect only 50 records', async done => {
        request(app)
          .get("/ratings")
          .then(response => {
            expect(response.body.length).toBe(50);
            done();
          });
      });

      it('Expect the correct columns', async done => {
        request(app)
          .get("/ratings")
          .then(response => {
            const rating = response.body[0];
            const columns = Object.keys(rating)
            const expected = ["ratingId", "rating", "movieId"]
            expect(columns).toEqual(expected);
            done();
          });
      });
    });
  });
});