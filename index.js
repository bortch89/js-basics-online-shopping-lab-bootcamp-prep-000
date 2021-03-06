var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() *100)
  cart.push ({[item]:price});
  console.log (item + " has been added to your cart.");
  return cart
}

function viewCart() {
  var superVar = [];
  if (cart.length > 0) {
      for (var index in cart) {
        var key = Object.keys(cart[index])
        superVar.push (" " + key + " at $" + cart[index][key])
      }

      console.log ("In your cart, you have" + superVar + ".")
  } else {
    console.log ("Your shopping cart is empty.")
  }
}

function removeFromCart(item) {
  for (var i = 0, l = cart.length ; i<l; i++) {
    debugger
    if (cart[i].hasOwnProperty(item)) {
      cart.splice (i,1)
      return cart
    }
  }
  console.log ("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if(cardNumber == null || cardNumber.length === 0) {
    console.log ("We don't have a credit card on file for you to place your order.")
  } else {
    console.log (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart = [];
}
