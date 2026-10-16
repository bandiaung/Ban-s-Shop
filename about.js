const searchInput = document.getElementById("search-item");
const products = document.querySelectorAll(".about-container");

searchInput.addEventListener("input", function () {
  const searchValue = searchInput.value.toLowerCase();
  products.forEach(function (product) {
    const category = product.dataset.category.toLowerCase();

    if (category.includes(searchValue)) {
      product.style.display = "";
    } else {
      product.style.display = "none";
    }
  });
});