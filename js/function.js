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
const callHistory = document.getElementById("callHistory");
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
    const date = new Date().toLocaleTimeString();
    const div = document.createElement("div");
    div.innerHTML = `<div
            class="flex justify-between items-center mt-5 p-3 rounded-lg bg-[#FAFAFA]"
          >
            <div>
              <h3>${serviceName}</h3>
              <h3>${serviceNumber}</h3>
            </div>
            <p>${date}</p>
          </div>`;
    callHistory.insertBefore(div, callHistory.firstChild);
  });
}
// Clear button functionality
const clear = document.getElementById("clearBtn");
clear.addEventListener("click", function () {
  callHistory.innerHTML = "";
});
// Copy buttons functionality
let number = 0;
const copyCount = document.getElementById("copyCount");
const copyButtons = document.querySelectorAll(".copy-btn");
for (btn of copyButtons) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const card = e.currentTarget.closest(".bg-white");
    const serviceNumber = card.querySelector(".service-number").innerText;
    number++;
    copyCount.innerHTML = number;
    alert(`Number has been copied : ${serviceNumber}`);
    navigator.clipboard.writeText(serviceNumber);
  });
}
