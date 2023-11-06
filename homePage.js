let cardItems = [];
let products = [];

const fetchProducts = async () => {
  const responseJson = await fetch("https://fakestoreapi.com/products", {
    method: "GET",
  });
  const response = await responseJson.json();
  return response;
};

const updateProducts = () => {
  let productHTML = "";
  products.forEach((product) => {
    const checkIfInCard = cardItems.includes(product.id);
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
              <button
              class="addToCard ${checkIfInCard ? "cart--added" : ""}"
              data-id="${product.id}">
              ${checkIfInCard ? "ADEED" : "ADD"}
              </button>
              <a
              href="./product.html?id=${product.id}"
              class="addToCard">
               SHOW
              </a>
          </div>
        </div>
      </li>
    `;
  });

  document.querySelector(".products").innerHTML = productHTML;
};

const updateCart = (productId) => {
  cardItems.push(productId);
  localStorage.setItem("card", cardItems);
  document.getElementById("card").innerHTML = cardItems.length;
};

const eventForAddToCart = () => {
  document.querySelectorAll(".addToCard").forEach((buttonNode) => {
    buttonNode.addEventListener("click", (event) => {
      // const productId = event.target.getAttribute("data-id")
      const productId = event.target.dataset.id;
      if (cardItems.includes(Number(productId))) return;
      updateCart(Number(productId));
      event.target.disabled = true;
      updateProducts();
      eventForAddToCart();
    });
  });
};

document.addEventListener("DOMContentLoaded", async () => {
  products = await fetchProducts();
  updateCartLocal();
  updateProducts();
  eventForAddToCart();
});
