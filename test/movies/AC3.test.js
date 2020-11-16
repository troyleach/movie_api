const { app } = require('../../app');
const request = require('supertest');

// FIXME: Mock db response
describe('Movies', () => {
  describe('GET /movies/movies?page=1&year=2020&sort=ASC', () => {

    describe('Positive results', () => {
      it('Expect empty array if no movies were found', async done => {
        request(app)
          .get("/movies")
          .query({ page: 1, year: 1827 })
          .then(response => {
            const { body, statusCode } = response;

            expect(statusCode).toEqual(200);
            expect(body).toHaveLength(0);
            expect(body).toEqual(expect.any(Array));
            // expect(body).toHaveLength(41);
            done();
          });
      });

      it('Expect correct number of movies, sorted ASC (default)', async done => {
        request(app)
          .get("/movies")
          .query({ page: 1, year: 1920 })
          .then(response => {
            const { body, status } = response;

            expect(status).toEqual(200);
            expect(body).toHaveLength(29);
            expect(body[0].releaseDate).toEqual('1920-01-01');
            expect(body[body.length - 1].releaseDate).toEqual('1920-12-26');
            done();
          });
      });

      it('Expect sorted ASC', async done => {
        request(app)
          .get("/movies")
          .query({ page: 1, year: 1920 })
          .then(response => {
            const { body, statusCode } = response;

            expect(statusCode).toEqual(200);
            expect(body).toHaveLength(29);
            expect(body[0].releaseDate).toEqual('1920-01-01');
            expect(body[body.length - 1].releaseDate).toEqual('1920-12-26');
            done();
          });
      });

      it('Expect movies to be sorted DESC', async done => {
        request(app)
          .get("/movies")
          .query({ page: 1, year: 1920, sort: 'desc' })
          .then(response => {
            const { body, statusCode } = response;

            expect(statusCode).toEqual(200);
            expect(body[0].releaseDate).toEqual('1920-12-26');
            expect(body[body.length - 1].releaseDate).toEqual('1920-01-01');
            done();
          });
      });

      it('Expect the correct columns', async done => {
        request(app)
          .get("/movies")
          .query({ year: 1920 })
          .then(response => {
            const { body } = response;

            const columns = Object.keys(body[1]);
            const expected = ['imdbId', 'title', 'releaseDate', 'budget', 'genres'];
            expect(columns.sort()).toEqual(expected.sort());
            done();
          });
      });
    });
  });
});