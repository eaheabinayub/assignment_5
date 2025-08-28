// heart buttons functionality
const heartCount = document.getElementById("heartCount");
let count = 0;
const heartButtons = document.querySelectorAll(".heart-btn");
for (btn of heartButtons) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    count++;
    heartCount.innerHTML = count;
  });
}

// call buttons functionality
let coins = 100;
const coinCount = document.getElementById("coinCount");
const callButtons = document.querySelectorAll(".call-btn");
