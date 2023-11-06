let product = {};
let cardItems = [];

const getSingleProduct = async () => {
  const searchParams = new URLSearchParams(location.search);
  const responseJson = await fetch(
    `https://fakestoreapi.com/products/${searchParams.get("id")}`
  );
  const response = await responseJson.json();
  return response;
};

const updateProduct = () => {
  const checkIfInCard = cardItems.includes(product.id);
  const productHTML = `
    <div class="singleProduct">
        <div class="product__image">
            <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="product__info">
            <h1 class="product__title">${product.title}</h1>
            <p class="product__description">${product.description}</p>
            <p class="product__price">${product.price}</p>
            <button 
            class="product__button ${checkIfInCard ? "cart--added" : ""}">
            ${checkIfInCard ? "Added" : "Add To Card"}
            </button>
        </div>
    </div>
    `;
  document.querySelector(".singleProduct").innerHTML = productHTML;
};

document.addEventListener("DOMContentLoaded", async () => {
  updateCartLocal();
  product = await getSingleProduct();
  updateProduct();
});
