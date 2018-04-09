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
 
 if (cart.length === 0){
    return "Your shopping cart is empty."
  }
  else if (cart.length == 1){
    var cartobj1 = cart[0]
     var cartname1 = cartobj1.itemName
     var cartprice1 = cartobj1.itemPrice
    return `In your cart, you have ${cartname1} at $${cartprice1}.`
  }
  else if (cart.length == 2){
    var cartobj2 = cart[1]
    var cartname2 = cartobj2.itemName
    var cartprice2 = cartobj2.itemPrice
    var cartobj11 = cart[0]
    var cartname11 = cartobj11.itemName
    var cartprice11 = cartobj11.itemPrice
    return `In your cart, you have ${cartname11} at $${cartprice11}, and ${cartname2} at $${cartprice2}.`
  }
    else{
      i = 0
      while(i<cart.length - 1){
        var cartobjx = cart[i]
        var cartnamex = cartobjx.itemName
        var cartpricex = cartobjx.itemPrice
        i++
        cartstr += `${cartnamex} at ${cartpricex},`
      }
    
      return cartstr 
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
