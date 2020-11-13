const { app } = require('../../app');
const request = require('supertest');

// FIXME: Mock db response
describe('Movies', () => {
  describe('GET /movies/:id', () => {

    describe('Negative results', () => {
      it('Expect 404 if movie is not found', done => {
        request(app)
          .get("/movies/4000")
          .then(response => {
            const { statusCode, body } = response;

            expect(statusCode).toEqual(404);
            expect(body.message).toEqual('Movie not found');
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
            expect(body.ratings.length).toEqual(3);
            expect(body['averageRating']).toEqual("2.7");
            done();
          });
      });

      it('Expect the correct columns', async done => {
        request(app)
          .get("/movies/274")
          .then(response => {
            const movie = response.body;
            const columns = Object.keys(movie);
            const expected = ['imdbId', 'title', 'description', 'releaseDate', 'budget', 'runtime', 'averageRating',
              'genres', 'language', 'productionCompanies', 'ratings'];
            expect(columns.sort()).toEqual(expected.sort());
            done();
          });
      });

      it('Expect budget to be in dollars', async done => {
        request(app)
          .get("/movies/274")
          .then(response => {
            const { body } = response;
            const expected = '$19,000,000';
            expect(body.budget).toEqual(expected);
            done();
          });
      });
    });
  });
});