function createRestaurant(name) {
  var pizzaRestaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
  return pizzaRestaurant
}

function addMenuItem(pizzaRestaurant, menuItem) {
  // pizzaRestaurant = object
  // menuItem = object
  // menuType = value of menuItem.type
  var menuType = menuItem.type
  if (pizzaRestaurant.menus[menuType].includes(menuItem) === false) {
    pizzaRestaurant.menus[menuType].push(menuItem)
  }
}

function removeMenuItem(pizzaRestaurant, menuItemName, menuType) {
  // remove an menuItem
  // menuItemName = string in the name key of the menuItem
  // restaurantMenu = menuType array within menu object within pizzaRestaurant
  var restaurantMenu = pizzaRestaurant.menus[menuType];
  for (var i = 0; i < restaurantMenu.length; i++) {
    if (restaurantMenu[i].name === menuItemName) {
      restaurantMenu.splice(i, 1)
      return `No one is eating our ${menuItemName} - it has been removed from the ${menuType} menu!`
    }
  }
  return `Sorry, we don't sell ${menuItemName}, try adding a new recipe!`
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
