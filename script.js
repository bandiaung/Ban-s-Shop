const buttonCategory = document.querySelectorAll('.item button');

const products = document.querySelectorAll('.hot-item-container');

buttonCategory.forEach(function(button){
  button.addEventListener("click", () => {
    const selectedCategory = button.parentElement.dataset.category;
     products.forEach(function(product){
      const productsCategory = product.dataset.category;
       if(selectedCategory === productsCategory){
        product.style.display = "";
       } else {
        product.style.display = "none";
       }

     });
  });
});

const allButton = document.getElementById('all-btn');

allButton.addEventListener("click", () => {
  products.forEach(function(product){
    product.style.display = "";
  });
});