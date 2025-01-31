"use strict";

const getTimeUTC = document.querySelector(".timeUTC");
const anchor = document.querySelectorAll("a");

// Get the current time and date and display it
const displayTimeDate = function () {
  const now = new Date();
  getTimeUTC.textContent = now.toUTCString();
  getTimeUTC.style.color = "#6c757d";
  getTimeUTC.style.fontSize = ".9em";
};

// Update the time and date every 1000milliseconds (1000 === 1s)
setInterval(displayTimeDate, 1000);

// Add class to anchor element
anchor.forEach(function (a) {
  if (a.querySelector("i")) {
    a.classList.add("hover-effect");
  }
});
