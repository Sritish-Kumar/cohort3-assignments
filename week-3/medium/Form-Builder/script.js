const form = document.querySelector("#myForm");
const inp = document.createElement("input");
const label = document.createElement("label");
const display = document.querySelector(".col-2");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  inp.setAttribute("type", formData.get("field"));
  label.innerHTML = formData.get("label");

  display.appendChild(label);
  display.appendChild(inp);

  form.reset();
});
