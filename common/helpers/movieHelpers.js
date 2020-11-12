/**
 * 
 * @param {number} page 
 * @returns {number}
 */
function fetchOffset(page) {
  if (isNaN(page))
    return 0;

  return page * 50 - 50;
};

module.exports = {
  fetchOffset
};