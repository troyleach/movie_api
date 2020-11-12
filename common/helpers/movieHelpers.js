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

module.exports = {
  fetchOffset,
  formatCurrency
};