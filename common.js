const updateCartLocal = () => {
  cardItems = localStorage.getItem("card");
  cardItems = cardItems ? cardItems.split(",").map(Number) : [];
  document.getElementById("card").innerHTML = cardItems.length;
};

const updateUser = () => {
  const userLocalStorage = localStorage.getItem("user");
  const user = JSON.parse(userLocalStorage); //opposite of JSON.stringify
  if (user && document.getElementById("user")) {
    document.getElementById("user").innerHTML = user.name;
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  updateCartLocal();
  updateUser();
});
