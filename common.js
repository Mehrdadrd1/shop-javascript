const updateCartLocal = () => {
  cardItems = localStorage.getItem("card");
  cardItems = cardItems ? cardItems.split(",").map(Number) : [];
  document.getElementById("card").innerHTML = cardItems.length;
};

document.addEventListener("DOMContentLoaded", async () => {
  updateCartLocal();
});
