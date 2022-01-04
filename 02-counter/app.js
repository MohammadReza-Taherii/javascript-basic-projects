let count = 0;
let value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const style = e.currentTarget.classList;
    if (style.contains("increase")) {
      count++;
    } else if (style.contains("decrease")) {
      count--;
    } else count = 0;

    if (count > 0) {
      value.style.color = "green";
    } else if (count) {
      value.style.color = "red";
    } else if (count === 0) {
      value.style.color = "#333";
    }
    value.textContent = count;
  });
});
