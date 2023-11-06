const areYouLoggedIn = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return true;
  } else {
    return false;
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  //Are you logged in?

  if (!areYouLoggedIn()) {
    window.location.href = "login.html";
  }

  updateCartLocal();
});
