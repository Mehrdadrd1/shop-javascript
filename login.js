const loginApi = async ({ email, password }) => {
  const response = await fetch("https://reqres.in/api/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

document
  .getElementById("loginForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const response = await loginApi({ email, password });
    localStorage.setItem("token", response.token);
    // document.cookie = `token=${response.token}`;

    const user = {
      email: "rayati.mehrdad@gmail.com",
      name: "Mehrdad Rayati",
      password: "Mm215",
    };
  });

document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  if (token) {
    window.location.href = "index.html";
  }
});
