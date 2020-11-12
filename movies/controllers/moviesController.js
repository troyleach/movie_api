const Movie = require('../models/Movie');

const { fetchOffset } = require('../../common/helpers/movieHelpers');

class MoviesController {
  constructor() {
    this.model = Movie;
    this.index = this.index.bind(this);
  }

  async index(req, res) {
    const { page } = req.query;
    let offset = 0;
    if (page) {
      offset = fetchOffset(parseInt(page));
    }

    // FIXME: should not hard code limit
    const limit = 50;
    const attributes = ['imdbId', 'title', 'genres', 'releaseDate', 'budget']
    try {
      const movies = await this.model.findAll({ offset, limit, attributes });
      return res.status(200).send(movies);
    } catch (error) {
      // logging error 
      return res.status(500).send({
        "message": 'something went wrong fetching movies',
        "error": error.message
      })
    }
  };
};

function init() {
  return new MoviesController();
}

module.exports = { init };
