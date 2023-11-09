const loginAPI = async ({ email, password }) => {
  const response = await fetch("https://reqres.in/api/register", {
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
  .getElementById("register")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Passwors do not match");
      return;
    }

    const response = await loginAPI({ name, email, password });
    localStorage.setItem("token", response.token);

    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "login.html";
  });
