const { Sequelize, DataTypes } = require('sequelize');

const path = require('path');
// const dbPath = path.resolve(__dirname, 'movies.db');
const dbPath = '/Users/troyleach/projects/2020/Aetna/movie_api/db/ratings.db'

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
    allowNull: false,
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