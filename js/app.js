'use strict';

let stores = document.getElementById('stores');

console.dir(stores);


function randomcust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); // incusive min anparisrom MDN
}

let seattle = {
  name: 'seattle',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  mincust: 23,
  maxcust: 65,
  avgsold: 6.3,
  cookiesPerHour: [],
  totle:0,

  getCustPerHour: function () {
    this.custPerHour = randomcust(this.mincust, this.maxcust);
  },

  soldPerHour: function () {


    for (let i = 0; i < this.hours.length; i++) {
      this.getCustPerHour();
      let cookiesThisHour = Math.floor(this.avgsold * this.custPerHour);
      this.cookiesPerHour.push(cookiesThisHour);
      this.totle += cookiesThisHour;
    }
  },
  render: function () {
    this.soldPerHour();
    let seattleLable = document.createElement('h2');
    seattleLable.innerText = this.name;
    stores.appendChild(seattleLable);
    let cookiespercust = document.createElement('ul');
    stores.appendChild(cookiespercust);
    for (let i = 0; i< this.hours.length; i++){
      let cookie = document.createElement('li');
      cookie.innerText = `${this.hours[i]}, ${this.cookiesPerHour[i]} cookis `;
      cookiespercust.appendChild(cookie);

    }
    let totlecookies = document.createElement('li');
    totlecookies.innerText = `totle: ${this.totle}`;
    cookiespercust.appendChild(totlecookies);


  }


};
seattle.render();
console.log(seattle);

let tokyo = {
  name: 'tokyo',
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  mincust: 3,
  maxcust: 24,
  avgsold: 1.2,
  cookiesPerHour:[],
  totle:0,

  getCustPerHour: function () {
    this.custPerHour = randomcust(this.mincust, this.maxcust);
  },

  soldPerHour: function () {

    for (let i = 0; i < this.hours.length; i++) {
      this.getCustPerHour();
      let cookiesThisHour = Math.floor(this.avgsold * this.custPerHour);
      this.cookiesPerHour.push(cookiesThisHour);
      this.totle += cookiesThisHour;
    }
  },
  render: function () {
    this.soldPerHour();
    let seattleLable = document.createElement('h2');
    seattleLable.innerText = this.name;
    stores.appendChild(seattleLable);
    let cookiespercust = document.createElement('ul');
    stores.appendChild(cookiespercust);
    for (let i = 0; i< this.hours.length; i++){
      let cookie = document.createElement('li');
      cookie.innerText = `${this.hours[i]}, ${this.cookiesPerHour[i]} cookis `;
      cookiespercust.appendChild(cookie);

    }
    let totlecookies = document.createElement('li');
    totlecookies.innerText = `totle: ${this.totle}`;
    cookiespercust.appendChild(totlecookies);

  }

};
tokyo.render();
console.log(tokyo);

let dubai = {
  name: 'dubai',
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  mincust: 11,
  maxcust: 38,
  avgsold: 3.7,
  cookiesPerHour:[],
  totle:0,

  getCustPerHour: function () {
    this.custPerHour = randomcust(this.mincust, this.maxcust);
  },

  soldPerHour: function () {

    for (let i = 0; i < this.hours.length; i++) {
      this.getCustPerHour();
      let cookiesThisHour = Math.floor(this.avgsold * this.custPerHour);
      this.cookiesPerHour.push(cookiesThisHour);
      this.totle += cookiesThisHour;
    }
  },
  render: function () {
    this.soldPerHour();
    let seattleLable = document.createElement('h2');
    seattleLable.innerText = this.name;
    stores.appendChild(seattleLable);
    let cookiespercust = document.createElement('ul');
    stores.appendChild(cookiespercust);
    for (let i = 0; i< this.hours.length; i++){
      let cookie = document.createElement('li');
      cookie.innerText = `${this.hours[i]}, ${this.cookiesPerHour[i]} cookis `;
      cookiespercust.appendChild(cookie);

    }
    let totlecookies = document.createElement('li');
    totlecookies.innerText = `totle: ${this.totle}`;
    cookiespercust.appendChild(totlecookies);

  }

};
dubai.render();
console.log(dubai);

let paris = {
  name:'paris',
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  mincust: 20,
  maxcust: 38,
  avgsold: 2.3,
  cookiesPerHour:[],
  totle:0,

  getCustPerHour: function () {
    this.custPerHour = randomcust(this.mincust, this.maxcust);
  },

  soldPerHour: function () {

    for (let i = 0; i < this.hours.length; i++) {
      this.getCustPerHour();
      let cookiesThisHour = Math.floor(this.avgsold * this.custPerHour);
      this.cookiesPerHour.push(cookiesThisHour);
      this.totle += cookiesThisHour;
    }
  },
  render: function () {
    this.soldPerHour();
    let seattleLable = document.createElement('h2');
    seattleLable.innerText = this.name;
    stores.appendChild(seattleLable);
    let cookiespercust = document.createElement('ul');
    stores.appendChild(cookiespercust);
    for (let i = 0; i< this.hours.length; i++){
      let cookie = document.createElement('li');
      cookie.innerText = `${this.hours[i]}, ${this.cookiesPerHour[i]} cookis `;
      cookiespercust.appendChild(cookie);

    }
    let totlecookies = document.createElement('li');
    totlecookies.innerText = `totle: ${this.totle}`;
    cookiespercust.appendChild(totlecookies);

  }

};
paris.render();
console.log(paris);


let lima = {
  name:'lima',
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  mincust: 16,
  maxcust: 16,
  avgsold: 4.6,
  cookiesPerHour:[],
  totle:0,

  getCustPerHour: function () {
    this.custPerHour = randomcust(this.mincust, this.maxcust);
  },

  soldPerHour: function () {

    for (let i = 0; i < this.hours.length; i++) {
      this.getCustPerHour();
      let cookiesThisHour = Math.floor(this.avgsold * this.custPerHour);
      this.cookiesPerHour.push(cookiesThisHour);
      this.totle += cookiesThisHour; 
    }
  },
  render: function () {
    this.soldPerHour();
    let seattleLable = document.createElement('h2');
    seattleLable.innerText = this.name;
    stores.appendChild(seattleLable);
    let cookiespercust = document.createElement('ul');
    stores.appendChild(cookiespercust);
    for (let i = 0; i< this.hours.length; i++){
      let cookie = document.createElement('li');
      cookie.innerText = `${this.hours[i]}, ${this.cookiesPerHour[i]} cookis `;
      cookiespercust.appendChild(cookie);

    }
    let totlecookies = document.createElement('li');
    totlecookies.innerText = `totle: ${this.totle}`;
    cookiespercust.appendChild(totlecookies);

  }

};
lima.render();
console.log(lima);
