const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = form.elements;
  const email = data.email.value.trim();
  const password = data.password.value.trim();

  if (!email || !password) {
    alert("Please fill in all fields!");
  } else {
    const formData = {
      email,
      password,
    };
    console.log(formData);
    form.reset();
  }
});
