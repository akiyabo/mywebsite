let cart = [];
let cartCount = 0;
let cartTotal = 0;

function addToCart(productId, price) {
  cart.push({ productId, price });
  cartCount++;
  cartTotal += price;
  updateCart();
}

function updateCart() {
  // Update cart count
  document.getElementById('cart-count').innerText = cartCount;

  // Update cart items
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';

  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerText = `Product ${item.productId.substring(7)} - $${item.price}`;
    cartItems.appendChild(li);
  });

  // Update total price
  document.getElementById('cart-total').innerText = cartTotal.toFixed(2);
}

function toggleCart() {
  const cartModal = document.getElementById('cart');
  cartModal.style.display = cartModal.style.display === 'flex' ? 'none' : 'flex';
}

function checkout() {
  alert(`Your total is $${cartTotal.toFixed(2)}. Thank you for shopping!`);
  cart = [];
  cartCount = 0;
  cartTotal = 0;
  updateCart();
  toggleCart();
}
