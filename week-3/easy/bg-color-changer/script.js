function changeColor(str) {
  render(str);
}

function render(color) {
  let body = document.querySelector("body");
  body.classList.forEach((ele) => body.classList.remove(ele));

  body.classList.add(color);
}
