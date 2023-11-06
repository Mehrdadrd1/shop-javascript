let products = [];
let productsInCart = [];
let cardItems = [];

const fetchProducts = async () => {
  const responseJson = await fetch("https://fakestoreapi.com/products");
  const response = await responseJson.json();
  return response;
};

const updateProductsInCard = () => {
  let productHTML = ``;

  productsInCart.forEach((product) => {
    productHTML += ` 
     <li>
        <div class="product">
          <img
            src="${product.image}"
            alt="product"
          />
          <div class="product-info">
            <h3>${product.title}</h3>
            <p>PRICE: $${product.price}</p>
          </div>
        </div>
      </li>
    `;
  });

  document.querySelector(".productsInCard").innerHTML = productHTML;
};

document.getElementById("checkout").addEventListener("click", () => {
  if (cardItems.length === 0) {
    return;
  }
  //1. Replace
  window.location.href = "./checkout.html";
  //2. PushState
  //window.location.pushState("checkout.html");
});

document.addEventListener("DOMContentLoaded", async () => {
  products = await fetchProducts();
  updateCartLocal();

  productsInCart = products.filter((product) => {
    return cardItems.includes(product.id);
  });
  updateProductsInCard();
});
