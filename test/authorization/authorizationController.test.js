const { app } = require('../../server');
const { performRequest } = require('../requestHelpers');

describe('Authorization', () => {
  describe('GET /auth', () => {
    describe('Positive results', () => {
      it('Expect 200', async () => {
        const response = await performRequest({
          url: '/auth',
          verb: 'get'
        })
        expect(response.status).toBe(200)
      });
    });
  });
});