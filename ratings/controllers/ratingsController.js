const Rating = require('../models/Rating');

class RatingsController {
  constructor() {
    this.model = Rating;
    this.index = this.index.bind(this)
    //...Define associations
  }

  async index(req, res) {
    const limit = 50;
    const attributes = ["ratingId", "rating", "movieId"];
    try {
      const ratings = await this.model.findAll({ limit, attributes });
      return res.status(200).send(ratings);
    } catch (error) {
      return res.status(500).send({ "message": 'something went wrong fetching ratings' })
    };
  };
};

function init() {
  return new RatingsController();
}

module.exports = { init };
