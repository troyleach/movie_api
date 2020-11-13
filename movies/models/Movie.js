const { Sequelize, DataTypes } = require('sequelize');

const dbPath = `${process.cwd()}/db/movies.db`;
console.log('here is the root', dbPath)

// Look here for logging : https://sequelize.org/master/manual/getting-started.html
// scroll down to logging bottom of page
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath
});


const { formatCurrency } = require('../../common/helpers/movieHelpers');

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
    allowNull: true,
    get() {
      const value = this.getDataValue('budget');
      const currency = formatCurrency({ number: value })
      return currency;
    }
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
  },
  ratings: {
    type: Sequelize.VIRTUAL
  },
  averageRating: {
    type: Sequelize.VIRTUAL
  }
},
  {
    tableName: 'movies',
    timestamps: false
  },
);

module.exports = Movie;