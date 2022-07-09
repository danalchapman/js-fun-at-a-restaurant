function nameMenuItem(name) {
  // var menuItemName = name
  return `Delicious ${name}`
}

function createMenuItem(name, price, type) {
  // var menuItemName = name;
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

function decreasePrice(price) {
  // should decrease menuItem.price by 10%
  // menuItem.price * .90
  // var decreasedPrice = price * .9;
  // return decreasedPrice --> this returns the same as the return below
  return price * .9
}

function createRecipe(title, ingredients, type) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type
  }
  return recipe
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
