"use strict";
let bookArray = [];
let sub = document.getElementById("submit");

function BookShop(name, price) {
  this.name = name;
  this.price = price;
  bookArray.push(BookShop);
}

BookShop.prototype.randomNumber = function () {
  this.page = Math.floor(Math.random() * (500 - 1) + 1);
};

sub.addEventListener("click", habdelerListener);

function habdelerListener(event) {
  event.preventDefault();
  console.log("ddddddddd");
}
