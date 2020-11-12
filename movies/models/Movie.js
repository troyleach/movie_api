const { Sequelize, DataTypes } = require('sequelize');

const path = require('path');
// const dbPath = path.resolve(__dirname, 'movies.db');
const dbPath = '/Users/troyleach/projects/2020/Aetna/movie_api/db/movies.db'
// console.log('Path to my stuff', dbPath)
// Users/troyleach/projects/2020/Aetna/movie_api/movies/models/movies.db
// path do my db /Users/troyleach/projects/2020/Aetna/movie_api/db/movies.db
// Path to my stuff /Users/troyleach/projects/2020/Aetna/movie_api/movies/models/movies.db

// Look here for logging : https://sequelize.org/master/manual/getting-started.html
// scroll down to logging bottom of page
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath
});

const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully to the movies db.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
testDbConnection();

// Lets make a model
// what is datatype REAL => number
// module.exports = (sequelize, DataTypes) => {
const Movie = sequelize.define('Movie', {
  movieId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    autoIncrement: true,
    primaryKey: true
  },
  imdbId: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  overview: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  productionCompanies: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  releaseDate: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  budget: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  revenue: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  runtime: {
    type: DataTypes.REAL,
    allowNull: true
  },
  language: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  genres: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  status: {
    type: DataTypes.TEXT,
    allowNull: true
  }
},
  {
    tableName: 'movies',
    timestamps: false
  },
);

module.exports = Movie;