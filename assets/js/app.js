document.addEventListener("DOMContentLoaded", function() {
  const light = document.querySelector('.light');

  document.addEventListener("mousemove", function (e) {
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY}px`;
  });
});

