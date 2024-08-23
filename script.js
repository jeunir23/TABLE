"use strict";
const searchInput = document.querySelector(".search-input");
const rows = document.querySelectorAll("tbody tr");

searchInput.addEventListener("keyup", function () {
  const filter = this.value.toLowerCase();

  rows.forEach((row) => {
    text = row.textContent.toLowerCase();
  });
});
