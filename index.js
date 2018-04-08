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
 if (cart.length>0){
   
   for (var i = 0,i<cart.length,i++){
     var cartobj = cart[i]
     var objname = cartobj.itemName
     var objprice = cartobj.itemPrice
     if (cart.length == 1){
     cartstr = cartstr += `${objname} at $${objprice}.` 
     }
     else if (cart.length == 2 ){
       
     }
   }
 }
 
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
