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
for (btn of callButtons) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const card = e.currentTarget.closest(".bg-white");
    const serviceName = card.querySelector(".service-name").innerText;
    const serviceNumber = card.querySelector(".service-number").innerText;
    if (coins < 20) {
      alert("You don’t have enough coins! (At least 20 are required)");
      return;
    }
    alert(`Calling ${serviceName} - ${serviceNumber}`);
    coins -= 20;
    coinCount.innerText = coins;
  });
}
