const { Sequelize, DataTypes } = require('sequelize');

const dbPath = `${process.cwd()}/db/ratings.db`;

// Look here for logging : https://sequelize.org/master/manual/getting-started.html
// scroll down to logging bottom of page
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath
});

const Rating = sequelize.define('Rating', {
  ratingId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  movieId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  rating: {
    type: DataTypes.REAL,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},
  {
    tableName: 'ratings',
    timestamps: false
  },
);

module.exports = Rating;