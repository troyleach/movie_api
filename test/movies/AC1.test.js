const { app } = require('../../app');
const request = require('supertest');

// FIXME: Mock db response
describe('Movies', () => {
  describe('GET /movies', () => {
    describe('Positive results', () => {
      it('Expect at most 50 movies per page', async done => {
        request(app)
          .get("/movies")
          .query({ page: 3 })
          .then(response => {
            const { body } = response;
            const shouldInclude = body.some(record => record.title === "Back to the Future Part III")
            const shouldNotIncludeMovie = body.some(record => record.title !== "The Elementary Particles");

            expect(response.statusCode).toBe(200);
            expect(shouldInclude).toBe(true);
            expect(shouldNotIncludeMovie).toBe(true);
            done();
          });
      });

      it('Expect to default to page 1 if no page query is sent', async done => {
        request(app)
          .get("/movies")
          .query({ page: 1 })
          .then(response => {
            const { body } = response;
            const shouldInclude = body.some(record => record.title === "Ariel")
            const shouldNotIncludeMovie = body.some(record => record.title !== "The Elementary Particles");

            expect(body.length).toEqual(50);
            expect(shouldInclude).toBe(true);
            expect(shouldNotIncludeMovie).toBe(true);
            done();
          });
      });

      it('Expect to default to page 1 if page query is something other then a number', async done => {
        // This assumes that I have create a test db that is the same EVERY time the db is created.
        // Can not have random data.
        // Mock db response
        request(app)
          .get("/movies")
          .query({ page: 'test' })
          .then(response => {
            const { body } = response;
            const resIncludesMovie = body.some(record => record.title === "The Elementary Particles");
            expect(body.length).toEqual(50);
            expect(resIncludesMovie).toBe(false);
            done();
          });
      });

      it('Expect the correct columns', async done => {
        request(app)
          .get("/movies")
          .then(response => {
            const movie = response.body[0];
            const columns = Object.keys(movie);
            const expected = ['imdbId', 'title', 'genres', 'releaseDate', 'budget'];
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