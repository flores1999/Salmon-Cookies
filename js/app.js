'use strict';

let seattleCookies = document.getElementById('stores');

console.dir(seattleCookies);


function randomcust(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min); // incusive min and max from MDN
}

let seattle = {
  name: 'seattle',
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  mincust: 23,
  maxcust: 65,
  avgsold: 6.3,
  cookiesPerHour:[],

  getCustPerHour: function(){
    this.custPerHour = randomcust(this.mincust, this.maxcust);
  },

  soldPerHour: function(){
    // this.soldPerHour = randomcust(this.avgsold);

    for(let i = 0; i<this.hours.length; i++){
      this.getCustPerHour();
      let cookiesThisHour = Math.floor (this.avgsold * this.custPerHour);
      this.cookiesPerHour.push(cookiesThisHour);
    }
    
    render: function(){

    }


  }

};


// seattle.cookiesold();
console.log(seattle);


// let tokyo = {
//   name: 'tokyo',
//   hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   mincust: 3,
//   maxcust: 24,
//   avgsold: 1.2,
// cookiesPerHour:[],

// getCustPerHour: function(){
//   this.custPerHour = randomcust(this.mincust, this.maxcust);
// },

// soldPerHour: function(){
//   // this.soldPerHour = randomcust(this.avgsold);

//   for(let i = 0; i<this.hours.length; i++){
//     this.getCustPerHour();
//     let cookiesThisHour = Math.floor (this.avgsold * this.custPerHour);
//     this.cookiesPerHour.push(cookiesThisHour);
//   }

// }

// };


// let dubai = { 
//   name: 'dubai',
// hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   mincust: 11,
//   maxcust: 38,
//   avgsold: 3.7,
// cookiesPerHour:[],

// getCustPerHour: function(){
//   this.custPerHour = randomcust(this.mincust, this.maxcust);
// },

// soldPerHour: function(){
//   // this.soldPerHour = randomcust(this.avgsold);

//   for(let i = 0; i<this.hours.length; i++){
//     this.getCustPerHour();
//     let cookiesThisHour = Math.floor (this.avgsold * this.custPerHour);
//     this.cookiesPerHour.push(cookiesThisHour);
//   }

// }
// };


// let paris = { 
//   name:'paris',
// hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   mincust: 20, 
//   maxcust: 38,
//   avgsold: 2.3,
// cookiesPerHour:[],

// getCustPerHour: function(){
//   this.custPerHour = randomcust(this.mincust, this.maxcust);
// },

// soldPerHour: function(){
//   // this.soldPerHour = randomcust(this.avgsold);

//   for(let i = 0; i<this.hours.length; i++){
//     this.getCustPerHour();
//     let cookiesThisHour = Math.floor (this.avgsold * this.custPerHour);
//     this.cookiesPerHour.push(cookiesThisHour);
//   }

// }
// };


// let lima = {
//   name:'lima',
// hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   mincust: 16,
//   maxcust: 16,
//   avgsold: 4.6,
// cookiesPerHour:[],

// getCustPerHour: function(){
//   this.custPerHour = randomcust(this.mincust, this.maxcust);
// },

// soldPerHour: function(){
//   // this.soldPerHour = randomcust(this.avgsold);

//   for(let i = 0; i<this.hours.length; i++){
//     this.getCustPerHour();
//     let cookiesThisHour = Math.floor (this.avgsold * this.custPerHour);
//     this.cookiesPerHour.push(cookiesThisHour);
//   }

// }
// };