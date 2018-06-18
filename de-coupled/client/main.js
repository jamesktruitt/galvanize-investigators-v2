const publicStripeKey = 'pk_test_g8tGsdXqt4VUd0pDAoloF0sU'

var handler = StripeCheckout.configure({
  key: 'publicStripeKey',
  image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
  locale: 'auto',
  token: function(token) {
    // You can access the token ID with `token.id`.
    // Get the token ID to your server-side code for use.
    console.log(token)
  }
});

document.querySelector('#buy-my-thing').addEventListener('submit', function(e) {
  // Open Checkout with further options:
  e.preventDefault();
  console.log(e)
  handler.open({
    name: 'Demo Site',
    description: 'All the things',
    amount: 387
  });
});

// Close Checkout on page navigation:
window.addEventListener('popstate', function() {
  handler.close();
});
