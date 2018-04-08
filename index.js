var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newcart = { itemName: `${item}`, itemPrice: Math.floor(Math.random() * Math.floor(100))} 
 cart.push(newcart)
 return `${item} has been added to your cart.`
}

function viewCart() {
 var cartstr = `In your cart, you have `
 var cartobj1 = cart[0]
 var cartname1 = cartobj1.itemName
 var cartprice1 = cartobj1.itemPrice
 if (cart.length === 0){
    return "Your shopping cart is empty."
  }
  else if (cart.length == 1){
    var cartobj1 = cart[0]
 var cartname1 = cartobj1.itemName
 var cartprice1 = cartobj1.itemPrice
    return `In your cart, you have ${cartname1} at $${cartprice1}.`
  }
    
}
   
 

 
 
  // write your code here

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
