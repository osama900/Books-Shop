"use strict";
let bookArray = [];
let sub = document.getElementById("submit");

function BookShop(name, price) {
  this.name = name;
  this.price = price;
}

BookShop.prototype.randomNumber = function () {
  let page = Math.floor(Math.random() * (500 - 1) + 1);
  this.page = page;
};

sub.addEventListener("click", handelerListener);

function handelerListener(event) {
  event.preventDefault();
  let bookTitle = event.target.value;
  console.log("ddddddddd");
}
