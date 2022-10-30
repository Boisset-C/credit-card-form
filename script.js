const expirationSelect = document.querySelector("[data-expiration-year]");

const currrentYear = new Date().getFullYear();
for (let i = currrentYear; i < currrentYear + 10; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.innerText = i;
  expirationSelect.append(option);
}
