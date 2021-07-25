"use strict";
let bookArray = [];

function BookShop(name, price) {
  this.name = name;
  this.price = price;
  bookArray.push(BookShop);
}

BookShop.prototype.randomNumber = function () {
  this.page = Math.floor(Math.random() * (500 - 1) + 1);
};
