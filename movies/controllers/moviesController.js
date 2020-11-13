const Movie = require('../models/Movie');
const Rating = require('../../ratings/models/Rating');

const { fetchOffset } = require('../../common/helpers/movieHelpers');

class MoviesController {
  constructor() {
    this.model = Movie;
    this.index = this.index.bind(this);
    this.show = this.show.bind(this);
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

  calculateAverageRating(ratings) {
    // FIXME: move to the helper file
    const totalRating = ratings.reduce((a, obj) => {
      return a + obj.rating;
    }, 0);

    const averageTotal = totalRating / ratings.length;

    return averageTotal.toFixed(1);
  };

  async show(req, res) {
    const { movieId } = req.params;
    const attributes = ['imdbId', 'title', ['overview', 'description'], 'releaseDate', 'budget', 'runtime',
      'genres', 'language', 'productionCompanies', 'ratings', 'averageRating']
    const movieQueryParms = {
      where: {
        movieId
      },
      attributes,
    }
    try {
      const movie = await this.model.findOne(movieQueryParms);
      // logging
      if (!movie)
        return res.status(404).send({ "message": "Movie not found" })

      const ratings = await Rating.findAll({ where: { movieId } })

      movie['ratings'] = ratings || [];
      movie['averageRating'] = this.calculateAverageRating(ratings) || 0;

      return res.status(200).send(movie);
    } catch (error) {
      // logging
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
