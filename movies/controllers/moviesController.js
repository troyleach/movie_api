const Movie = require('../models/Movie');

exports.index = async (req, res) => {
  try {
    const movies = await Movie.findAll({ limit: 8 })
    return res.status(200).send(movies);

  } catch (error) {
    // logger
    return res.status(404).send({ message: error })
  };
}