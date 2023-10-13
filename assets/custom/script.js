//Custom inverted cursor
document.body.onmousemove = function (e) {
  document.documentElement.style.setProperty(
    "--x",
    e.clientX + window.scrollX + "px"
  );

  document.documentElement.style.setProperty(
    "--y",
    e.clientY + window.scrollY + "px"
  );
};

document.body.onclick = function () {
  document.body.classList.toggle("invertedcursor");
};
