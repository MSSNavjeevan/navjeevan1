// Show buyer credit card details if selected
document.getElementById('buyer-payment-method').addEventListener('change', function() {
    const creditCardDetails = document.getElementById('buyer-credit-card-details');
    if (this.value === 'credit-card') {
        creditCardDetails.style.display = 'block';
    } else {
        creditCardDetails.style.display = 'none';
    }
});

// Buyer Interface
document.getElementById('buyer-interface').addEventListener('click', function() {
    // Show the buyer login form and hide the seller sections
    document.getElementById('buyer-interface-section').style.display = 'block';
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('seller-product-section').style.display = 'none';
    document.getElementById('available-products-section').style.display = 'none';
});

// Seller Product Submission
document.getElementById('submit-product-btn').addEventListener('click', function() {
    // Get the product details
    const productName = document.getElementById('product-name').value;
    const productQuantity = document.getElementById('product-quantity').value;
    const productType = document.getElementById('product-type').value;

    if (productName && productQuantity && productType) {
        // Create a new list item for the product
        const newProduct = document.createElement('li');
        newProduct.innerText = `${productName} - ${productQuantity} ${productType}`;
        
        // Append to available products list
        document.getElementById('available-products-list').appendChild(newProduct);

        // Clear the form
        document.getElementById('product-name').value = '';
        document.getElementById('product-quantity').value = '';
    } else {
        alert('Please fill in all product details.');
    }
});

// Available Products Section
document.getElementById('available-products-option').add