const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (const item in itemsToCount) {
    if (itemsToCount.hasOwnProperty(item)) {
      if (itemsToCount[item] && allItems.includes(item)) {
        result[item] = allItems.filter(x => x === item).length;
      }
    }
  }
  return result;
};

module.exports = countOnly;

