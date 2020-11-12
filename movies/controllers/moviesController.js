const Movie = require('../models/Movie');

class MoviesController {
  constructor() {
    this.model = Movie;
    this.index = this.index.bind(this);
  }

  async index(req, res) {
    const limit = 50;
    const attributes = ['imdbId', 'title', 'genres', 'releaseDate', 'budget']
    try {
      const movies = await this.model.findAll({ limit, attributes });
      return res.status(200).send(movies);
    } catch (error) {
      // logging error 
      return res.status(500).send({
        "message": 'something went wrong fetching movies',
        "error": error
      })
    }
  };
};

function init() {
  return new MoviesController();
}

module.exports = { init };
