function nameMenuItem(name) {
  var menuItemName = name
  return `Delicious ${name}`
}

function createMenuItem(name, price, type) {
  var menuItemName = name;
  var menuItem = {
    name: name,
    price: price,
    type: type
  }
  return menuItem
}

function addIngredients(ingredientsToAdd, ingredients) {
  // we only push ingredientsToAdd if they return false;
  if (ingredients.includes(ingredientsToAdd) === false) {
    ingredients.push(ingredientsToAdd)
  }
}

function formatPrice(initialPrice) {
  // add a $ in front of the price
  return `$${initialPrice}`
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  // decreasePrice,
  // createRecipe
}
