/**
 * 
 * @param {number} page 
 * @returns {number}
 * 
 */
function fetchOffset(page) {
  if (isNaN(page))
    return 0;

  return page * 50 - 50;
};

/**
 * 
 * @param {string} country - 'en-US' default
 * @param {number} currency = 400
 * @param {number} decimals = 2 => .00
 * @returns {string} '$200
 * 
 */
function formatCurrency({
  country = 'en-US',
  number = 0,
  currency = 'USD',
  decimals = 0 }) {

  if (typeof number !== 'number')
    throw new Error('Must provide a number');

  if (number === 0)
    return '$0';

  const formatNumber = number.toLocaleString(
    country,
    {
      style: 'currency',
      currency,
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals
    });

  return `${formatNumber}`;
};


/**
 * 
 * @param {Array.<Objectj>} RatingObjects
 * @returns {number} '2.7'
 * 
 */
function calculateAverageRating(ratings) {
  // FIXME: this could have been done with query and not a function
  if (ratings.length === 0)
    return 0;

  const totalRating = ratings.reduce((acc, obj) => {
    return acc + obj.rating;
  }, 0);

  const averageTotal = totalRating / ratings.length;

  return averageTotal.toFixed(1);
};

module.exports = {
  fetchOffset,
  formatCurrency,
  calculateAverageRating
};