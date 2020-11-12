// const { performRequest } = require('../requestHelpers');
const { app } = require('../../app');
const request = require('supertest');
// const { response } = require('express');

// I understand this was not part of the challenge, but it was easier for me
// to create at least a index, I had to create the model 
// FIXME: Mock db response
describe('Movies', () => {
  describe('GET /movies', () => {

    describe('Negative results', () => {
      it('Expect 404 if movie is not found', () => {
        request(app)
          .get("/movies/4000")
          .then(response => {
            const { statusCode, message } = response;

            expect(statusCode).toEqual(404);
            expect(message).toEqual('Movie not found');
            done();
          });
      });
    });

    describe('Positive results', () => {
      it('Expect the correct movie and its ratings to be returned', async done => {
        request(app)
          .get("/movies/274")
          .then(response => {
            const { body, statusCode } = response;

            expect(statusCode).toEqual(200);
            expect(body.title).toEqual('The Silence of the Lambs');
            expect(body).toHaveProperty('description');
            expect(body).toHaveProperty('release date');
            expect(body).toHaveProperty('ratings');
            expect(body.ratings.length).toEqual(400);
            expect(body['average rating']).toEqual(33);
            done();
          });
      });

      it('Expect the correct columns', async done => {
        request(app)
          .get("/movies")
          .then(response => {
            const movie = response.body[0];
            const columns = Object.keys(movie);
            const expected = ['imdb id', 'title', 'description', 'release date', 'budget', 'runtime', 'average rating',
              'genres', 'original language', 'production companies', 'ratings'];
            expect(columns.sort()).toEqual(expected.sort());
            done();
          });
      });

      it('Expect budget to be in dollars', async done => {
        request(app)
          .get("/movies")
          .then(response => {
            const { body } = response;
            const movie = body.find(record => record.imdbId === 'tt0113101');
            const expected = '$4,000,000';
            expect(movie.budget).toEqual(expected);
            done();
          });
      });
    });
  });
});