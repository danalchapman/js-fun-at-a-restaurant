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
  ingredients[0] = "cheese";
  //for (var i = 0; i < ingredients.length; i++) {
    //if (ingredients[i] <=3) {
      return ingredients
    //}
  //}
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}
