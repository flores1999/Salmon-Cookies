'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const cookieArray = [];
let storeDiv = document.getElementById('stores');

let storeInfo = [];

function SalmonCookies(name, mincust, maxcust, avgsold) {
  this.name = name;
  this.mincust = mincust;
  this.maxcust = maxcust;
  this.avgsold = avgsold;
  this.cookiesPerHour = [];
  this.total = 0;
  this.custPerHour = 0;

  storeInfo.push(this);
}


function randomcust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); // incusive min anparisrom MDN
}

SalmonCookies.prototype.getCustPerHour = function () {
  this.custPerHour = randomcust(this.mincust, this.maxcust);
};

SalmonCookies.prototype.soldPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.getCustPerHour();
    let cookiesThisHour = Math.floor(this.avgsold * this.custPerHour);
    this.cookiesPerHour.push(cookiesThisHour);
    this.total += cookiesThisHour;
  }
};


let table = document.createElement('table');
storeDiv.appendChild(table);

function headerRow() {
  let rowHeading = document.createElement('tr');
  table.appendChild(rowHeading);

  let empty = document.createElement('th');
  rowHeading.appendChild(empty);

  for (let i = 0; i < hours.length; i++) {
    let hoursRow = document.createElement('th');
    hoursRow.textContent = `${hours[i]}`;
    rowHeading.appendChild(hoursRow);
  }
}


SalmonCookies.prototype.render = function () {
  let storeRows = document.createElement('tr');
  table.appendChild(storeRows);

  let storeName = document.createElement('th');
  storeName.textContent = `${this.name}`;
  storeRows.appendChild(storeName);

  for (let i = 0; i < hours.length; i++) {
    let cookiesEachHour = document.createElement('td');
    cookiesEachHour.textContent = `${this.cookiesPerHour[i]}`;
    storeRows.appendChild(cookiesEachHour);
  }
};

let seattle = new SalmonCookies('seattle', 23, 65, 6.3);
let tokyo = new SalmonCookies('tokyo', 3, 24, 1.2);
let dubai = new SalmonCookies('dubai', 11, 38, 3.7);
let paris = new SalmonCookies('paris', 20, 28, 2.3);
let lima = new SalmonCookies('lima', 16, 16, 4.6);

function renderstore() {
  for (let i = 0; i < storeInfo.length; i++) {
    let currentStore = storeInfo[i];
    currentStore.soldPerHour();
    currentStore.getCustPerHour();
    currentStore.render();
  }
}



headerRow();
renderstore();

// SalmonCookies.prototype.render = function () {
//   this.soldPerHour();
//   let seattleLable = document.createElement('h2');
//   seattleLable.innerText = this.name;
//   stores.appendChild(seattleLable);
//   let cookiespercust = document.createElement('ul');
//   stores.appendChild(cookiespercust);
//   for (let i = 0; i < hours.length; i++) {
//     let cookie = document.createElement('li');
//     cookie.innerText = `${hours[i]}, ${this.cookiesPerHour[i]} cookis `;
//     cookiespercust.appendChild(cookie);

//   }
// let totalcookies = document.createElement('li');
// totalcookies.innerText = `totle: ${this.totle}`;
// cookiespercust.appendChild(totalcookies);
// };

// let seattleCell = document.createElement('th');
// seattleCell.textContent = 'seattle';
// rowHeading.appendChild(seattleCell),

//   let tokyoCell = document.createElement('th');
//   tokyoCell.textContent = 'seattle';
//   rowHeading.appendChild(tokyoCell),

//   let dubaiCell = document.createElement('th');
//   dubaiCell.textContent = 'seattle';
//   rowHeading.appendChild(dubaiCell),

//   let parisCell = document.createElement('th');
//  parisCell.textContent = 'seattle';
//   rowHeading.appendChild(parisCell),

//   let limaCell = document.createElement('th');
//   limaCell.textContent = 'seattle';
//   rowHeading.appendChild(limaCell),

// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();

// cookieArray.push(seattle, tokyo, dubai, paris, lima);
