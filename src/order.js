function takeOrder(orderType, deliveryOrders) {
  // add new orders to an order type list
    if (deliveryOrders.length < 3) {
      deliveryOrders.push(orderType)
  }
}

function refundOrder(orderNumber, deliveryOrders) {
  // remove an order from the array by order#
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNumber) {
      deliveryOrders.splice(i, 1);
    }
  }
}

function listItems(deliveryOrders) {
  // want to PUSH the item into the items array
  var items = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    items.push(deliveryOrders[i].item)
  }
  return items.join(', ')
}

function searchOrder(deliveryOrders, itemName) {
  // should eval true if an order is listed
  // deliveryOrders has 2 elements
  var result = false;
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === itemName) {
      result = true;
    }
  }
  return result
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
